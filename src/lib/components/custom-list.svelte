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
<div class="relative flex items-center gap-1">
  {#if style === "bullet"}
    <ul class="list-disc pl-5">
      <li>{@render children()}</li>
    </ul>
  {:else if style === "number"}
    <ol class="list-decimal pl-5">
      <li>{@render children()}</li>
    </ol>
  {/if}
</div>
