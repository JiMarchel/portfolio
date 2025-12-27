<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';

  interface Props {
    portableText: CustomBlockComponentProps;
  }

  let { portableText }: Props = $props();
  let { value } = $derived(portableText);

  let imageUrl = $derived(urlFor(value).url());

  let altText = $derived(value.alt || '[Gambar tidak memiliki deskripsi]');
</script>

{#if imageUrl}
  <figure class="my-10 space-y-3">
    <div class="overflow-hidden rounded-xl border border-border/40 shadow-sm bg-muted/20">
      <img 
        src={imageUrl} 
        alt={altText} 
        class="w-full h-auto object-cover" 
        loading="lazy"
      />
    </div>
    {#if value.caption}
      <figcaption class="text-sm text-center text-muted-foreground italic px-4">
        {value.caption}
      </figcaption>
    {/if}
  </figure>
{:else}
  <p class="text-gray-500">[Gambar tidak dapat dimuat]</p>
{/if}