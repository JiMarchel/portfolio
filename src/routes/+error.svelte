<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="min-h-screen flex items-center justify-center px-4">
  <div class="text-center">
    <h1 class="text-6xl font-bold text-foreground mb-4">
      {$page.status}
    </h1>
    <p class="text-xl text-muted-foreground mb-8">
      {$page.error?.message || "Something went wrong"}
    </p>
    <a
      href="/"
      class="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      Go back home
    </a>
  </div>
</div>
