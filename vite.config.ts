import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  // server: {
  //   allowedHosts: [
  //     "86726d78d433.ngrok-free.app",
  //   ],
  // },
});
