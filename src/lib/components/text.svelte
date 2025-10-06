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

<!-- If preceded by heading, have a higher margin top -->
<div
  class="relative flex items-center gap-1"
>
  {#if style === "blockquote"}
    <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-300 my-1">
      {@render children()}
    </blockquote>
  {:else if style === "normal"}
    <p class="text-base my-1">
      {@render children()}
    </p>
  {/if}
</div>
