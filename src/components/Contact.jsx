import React, { Suspense, lazy, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { CanvasSkeleton } from "./skeletons";

const EarthCanvas = lazy(() => import("./canvas/Earth"));
const MotionDiv = motion.div;
const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((currentForm) => ({ ...currentForm, [name]: value }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current?.reportValidity()) {
      return;
    }

    const sanitizedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    setForm(sanitizedForm);
    setLoading(true);
    setStatus({ type: "info", message: "Sending your message..." });

    try {
      await emailjs.send(
        "service_1eaeors",
        "template_zts2lpi",
        {
          from_name: sanitizedForm.name,
          to_name: "Yohan",
          from_email: sanitizedForm.email,
          to_email: "yohan.procontact@gmail.com",
          message: sanitizedForm.message,
        },
        "qwQJCziuyEM22s_HT"
      );
      setForm(initialFormState);
      setStatus({
        type: "success",
        message: "Message sent. I will reply as soon as possible.",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Message could not be sent right now. Please try again or email me directly at yohan.procontact@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <MotionDiv
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
              autoComplete="name"
              placeholder="What's your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
               rounded-lg border border-transparent font-medium outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/40"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              inputMode="email"
              placeholder="What's your email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
               rounded-lg border border-transparent font-medium outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/40"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
               rounded-lg border border-transparent font-medium outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/40"
            />
          </label>
          {status.message ? (
            <p
              aria-live="polite"
              className={`text-sm ${
                status.type === "error"
                  ? "text-red-300"
                  : status.type === "success"
                    ? "text-emerald-300"
                    : "text-secondary"
              }`}
            >
              {status.message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </MotionDiv>
      <MotionDiv
        variants={slideIn("right", "tween", 0.5, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={<CanvasSkeleton className="rounded-2xl" />}>
          <EarthCanvas />
        </Suspense>
      </MotionDiv>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");

export default ContactSection;
