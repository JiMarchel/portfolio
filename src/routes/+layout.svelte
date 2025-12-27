<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$lib/components/navbar.svelte";

  let { children } = $props();
</script>


<div class="min-h-screen w-full relative bg-background text-foreground transition-colors duration-300">
    <ModeWatcher defaultMode="dark" />
    <Navbar />
    <main class="max-w-3xl mx-auto px-6 py-12 sm:py-20">
      {@render children?.()}
    </main>
</div>
