<script lang="ts">
  let { children } = $props();
</script>

<li class="list-disc ml-7 text-foreground/90">
  {@render children()}
</li>
