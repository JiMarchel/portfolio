<script lang="ts">
  import Prism from "prismjs";
  import { onMount } from "svelte";
  import { Check, Copy, Terminal } from "lucide-svelte";
  
  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-python";
  import "prismjs/components/prism-sql";
  import "prismjs/components/prism-bash";
  import "prismjs/components/prism-jsx";
  import "prismjs/components/prism-json";
  // We can keep using okaidia or switch to a custom dark theme via Tailwind mainly
  import "prismjs/themes/prism-okaidia.css"; 

  import type { CustomBlockComponentProps } from "@portabletext/svelte";

  interface Props {
    portableText: CustomBlockComponentProps;
  }

  let { portableText }: Props = $props();
  let { value } = $derived(portableText);

  let highlighted = $state("");
  let lang = $state("plaintext");
  let isCopied = $state(false);

  function highlight() {
    lang = value?.language ?? "text";
    const grammar = (Prism as any).languages[lang] ?? Prism.languages.markup;
    highlighted = Prism.highlight(value?.code ?? "", grammar, lang);
  }

  async function copyToClipboard() {
    if (!value?.code) return;
    try {
      await navigator.clipboard.writeText(value.code);
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  }

  onMount(highlight);
</script>

<div class="my-8 rounded-xl overflow-hidden border border-border/50 bg-[#1e1e1e] shadow-xl">
  <!-- Window Header -->
  <div class="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
    <div class="flex items-center gap-2">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <span class="ml-3 text-xs font-mono text-muted-foreground/60 select-none">
        {value.filename ?? lang}
      </span>
    </div>

    <button
      onclick={copyToClipboard}
      class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
      aria-label="Copy code"
    >
      {#if isCopied}
        <Check size={14} class="text-green-400" />
        <span class="text-green-400">Copied!</span>
      {:else}
        <Copy size={14} />
        <span>Copy</span>
      {/if}
    </button>
  </div>

  <!-- Code Area -->
  <div class="relative overflow-x-auto text-[13px] sm:text-sm leading-6">
    <pre class="!bg-transparent !m-0 !p-4 !font-mono language-{lang}"><code class="language-{lang}">{@html highlighted}</code></pre>
  </div>
</div>
