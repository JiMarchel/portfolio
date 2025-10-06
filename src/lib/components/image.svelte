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
  <figure class="">
    <img 
      src={imageUrl} 
      alt={altText} 
      class="rounded-sm max-w-full h-auto my-1" 
    />
    {#if value.caption}
      <figcaption class="mt-2 text-sm text-gray-500 text-center">
        {value.caption}
      </figcaption>
    {/if}
  </figure>
{:else}
  <p class="text-gray-500">[Gambar tidak dapat dimuat]</p>
{/if}