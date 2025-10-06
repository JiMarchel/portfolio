<script lang="ts">
  import Prism from "prismjs";
  import { onMount } from "svelte";

  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-python";
  import "prismjs/components/prism-sql";
  import "prismjs/components/prism-bash";
  import "prismjs/components/prism-jsx";
  import "prismjs/themes/prism-okaidia.css";

  import type { CustomBlockComponentProps } from "@portabletext/svelte";

  interface Props {
    portableText: CustomBlockComponentProps;
  }

  let { portableText }: Props = $props();
  let { value } = $derived(portableText);

  let highlighted = $state("");
  let lang = $state("plaintext");

  function highlight() {
    lang = value?.language ?? "plaintext";
    const grammar = (Prism as any).languages[lang] ?? Prism.languages.markup;
    highlighted = Prism.highlight(value?.code ?? "", grammar, lang);
  }

  onMount(highlight);
</script>

<pre class="language-{lang}">
  <code class="language-{lang}">{@html highlighted}</code>
</pre>
