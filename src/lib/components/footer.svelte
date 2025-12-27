<script lang="ts">
  import { Github, Linkedin, Mail } from "lucide-svelte";
</script>

<footer class="w-full border-t border-border/40 py-6 mt-12 md:mt-24">
  <div
    class="max-w-3xl mx-auto px-6 flex flex-row items-center justify-between gap-4"
  >
    <p class="text-sm text-muted-foreground">
     © 2026
    </p>

    <div class="flex items-center gap-4">
      <a
        href="https://github.com/jimarchel"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Github class="size-5" />
      </a>
      <a
        href="https://linkedin.com/in/jimarchel"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin class="size-5" />
      </a>
      <a
        href="mailto:dev@jimarchel.my.id"
        class="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Email"
      >
        <Mail class="size-5" />
      </a>
    </div>
  </div>
</footer>
