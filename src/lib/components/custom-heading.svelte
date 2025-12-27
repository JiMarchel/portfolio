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

  const headings = ["h1", "h2", "h3", "h4", "h5"];

  let precededByHeading = $derived(
    (() => {
      const prevBlock = ptBlocks[indexInParent - 1];
      return prevBlock &&
        "style" in prevBlock &&
        typeof prevBlock.style === "string"
        ? headings.includes(prevBlock.style)
        : false;
    })()
  );

  let anchorId = $derived(
    value.children
      ?.map((child: any) => child.text)
      .join("")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-") ?? ""
  );
</script>

<!-- If preceded by heading, have a higher margin top -->
<div
  class="relative group {precededByHeading
    ? 'mt-12'
    : 'mt-8'} mb-4 scroll-mt-20"
  id={anchorId}
>
  <a
    href="#{anchorId}"
    class="absolute -left-6 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground p-1"
  >
    #
  </a>
  {#if style === "h1"}
    <h1 class="text-4xl font-bold tracking-tight text-foreground">
      {@render children()}
    </h1>
  {:else if style === "h2"}
    <h2
      class="text-3xl font-bold tracking-tight text-foreground border-b border-border/40 pb-2"
    >
      {@render children()}
    </h2>
  {:else if style === "h3"}
    <h3 class="text-2xl font-semibold tracking-tight text-foreground">
      {@render children()}
    </h3>
  {:else}
    <h4 class="text-xl font-semibold text-foreground">
      {@render children()}
    </h4>
  {/if}
</div>
