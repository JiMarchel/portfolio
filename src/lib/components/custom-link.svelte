<script lang="ts">
  import type { MarkComponentProps } from "@portabletext/svelte";
  import { type Snippet } from "svelte";

  interface Props {
    portableText: MarkComponentProps<{
      href?: string;
      url?: string;
      newWindow?: boolean;
      blank?: boolean;
    }>;
    children: Snippet;
  }

  let { portableText, children }: Props = $props();

  let { value } = $derived(portableText);
  // Sanity uses 'href' for links, but some schemas use 'url'
  let href = $derived(value.href || value.url);
  let newWindow = $derived(value.newWindow || value.blank || false);
</script>

{#if href}
  <a
    {href}
    target="_blank"
    rel={newWindow ? "noopener noreferrer" : undefined}
    class="font-medium text-blue-500 hover:text-blue-400 hover:underline transition-colors"
  >
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}
