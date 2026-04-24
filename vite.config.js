import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll("\\", "/");

          if (!normalizedId.includes("node_modules")) {
            return undefined;
          }

          if (normalizedId.includes("@react-three/drei")) {
            return "drei-vendor";
          }

          if (normalizedId.includes("@react-three/fiber")) {
            return "fiber-vendor";
          }

          if (
            normalizedId.includes("/three/examples/jsm/") ||
            normalizedId.includes("/examples/jsm/")
          ) {
            return "three-examples";
          }

          if (normalizedId.includes("three-stdlib")) {
            return "three-stdlib";
          }

          if (normalizedId.includes("/three/src/renderers/")) {
            return "three-renderers";
          }

          if (
            normalizedId.includes("/three/src/") ||
            normalizedId.includes("node_modules/three")
          ) {
            return "three-core";
          }

          if (normalizedId.includes("framer-motion")) {
            return "motion-vendor";
          }

          if (normalizedId.includes("react-router")) {
            return "router-vendor";
          }

          if (
            normalizedId.includes("react-vertical-timeline-component") ||
            normalizedId.includes("react-tilt")
          ) {
            return "ui-vendor";
          }

          if (normalizedId.includes("@emailjs")) {
            return "email-vendor";
          }

          if (
            normalizedId.includes("react") ||
            normalizedId.includes("scheduler")
          ) {
            return "react-vendor";
          }

          return "vendor";
        },
      },
    },
  },
});
