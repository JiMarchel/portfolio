import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  // server: {
  //   allowedHosts: [
  //     "9a98d4609d94.ngrok-free.app",
  //   ],
  // },
});
