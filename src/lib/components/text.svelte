<script lang="ts">
  import type { BlockComponentProps } from "@portabletext/svelte";
  import type { Snippet } from "svelte";

  interface Props {
    portableText: BlockComponentProps;
    children: Snippet;
  }

  let { portableText, children }: Props = $props();

  let { indexInParent, global, value } = $derived(portableText);
  let { ptBlocks } = $derived(global);
  let { style } = $derived(value);
</script>

<div class="relative">
  {#if style === "blockquote"}
    <blockquote
      class="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground break-words"
    >
      {@render children()}
    </blockquote>
  {:else if style === "normal"}
    <p
      class="leading-7 [&:not(:first-child)]:mt-6 text-foreground/90 break-words"
    >
      {@render children()}
    </p>
  {/if}
</div>
