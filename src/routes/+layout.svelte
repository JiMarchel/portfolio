<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$lib/components/navbar.svelte";

  let { children } = $props();
</script>


<div class="min-h-screen w-full relative bg-black">
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div
    class="absolute inset-0 z-0"
    style="background: radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000;"
  />

  <div
    class="text-white z-50 relative flex flex-col items-center justify-center overflow-hidden"
  >
    <ModeWatcher defaultMode="dark" />
    <Navbar />
    {@render children?.()}
  </div>
</div>
