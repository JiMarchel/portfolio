<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";

  let { children } = $props();
</script>

<div
  class="min-h-screen w-full relative bg-background text-foreground transition-colors duration-300 flex flex-col"
>
  <ModeWatcher defaultMode="dark" />
  <Navbar />
  <main class="max-w-3xl mx-auto px-6 pt-10 sm:pb-5 flex-1 w-full">
    {@render children?.()}
  </main>
  <Footer />
</div>
