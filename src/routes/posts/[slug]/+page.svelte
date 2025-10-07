<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import CodeBlock from "$lib/components/code-block.svelte";
  import Image from "$lib/components/image.svelte";
  import CustomHeading from "$lib/components/custom-heading.svelte";
  import Text from "$lib/components/text.svelte";
  import { ChevronLeft } from "lucide-svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CustomList from "$lib/components/custom-list.svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import CustomLink from "$lib/components/custom-link.svelte";

  const { data } = $props();
  const post = data.post;

  function goBack() {
    window.history.back();
  }
</script>

<Metadata
  pageTitle={post.title}
  pageDescription={post?.excerpt ?? post?.title ?? ""}
  siteName="Moch Jimmy Marchel - Post"
/>

<article class="prose prose-invert pl-4 pr-9 sm:pl-0 sm:pr-0 w-sm sm:w-2xl mx-auto py-8">
  <Button onclick={goBack} class="flex items-center mb-10 cursor-pointer"
    ><ChevronLeft size="16" /> Back</Button
  >

  {#if !post}
    <p>Loading…</p>
  {:else}
    <header class="mb-6">
      <h1 class="text-3xl font-bold">{post.title}</h1>
      {#if post.publishedAt}
        <p class="text-sm opacity-70">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      {/if}
      <img
        src={post.mainImage.url}
        alt={post.title}
        class="rounded-lg mt-4 max-w-full h-auto mx-auto"
        width={post.mainImage.dims?.width}
        height={post.mainImage.dims?.height}
      />
    </header>

    <section>
      <PortableText
        value={post.body}
        components={{
          types: {
            code: CodeBlock, // Custom renderer untuk blok kode
            image: Image, // Custom renderer untuk gambar
          },
          block: {
            h1: CustomHeading,
            h2: CustomHeading,
            h3: CustomHeading,
            normal: Text,
            blockquote: Text,
          },
          marks: {
            // link: CustomLink,
            
            // absUrl: AbsoluteUrl
          },
          list: {
            bullet: CustomList,
          },
        }}
      />
    </section>
  {/if}

  <Button
    onclick={goBack}
    class="flex items-center mb-10 cursor-pointer mx-auto my-10"
    ><ChevronLeft size="16" /> Back</Button
  >
</article>
