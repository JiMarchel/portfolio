<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import CodeBlock from "$lib/components/code-block.svelte";
  import Image from "$lib/components/image.svelte";
  import CustomHeading from "$lib/components/custom-heading.svelte";
  import Text from "$lib/components/text.svelte";
  import { ArrowLeft } from "lucide-svelte";
  import CustomList from "$lib/components/custom-list.svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import CustomLink from "$lib/components/custom-link.svelte";
  import TableOfContents from "$lib/components/table-of-contents.svelte";

  const { data } = $props();
  const post = data.post;

  function goBack() {
    window.history.back();
  }

  const estimatedReadTime = $derived(
    post?.body
      ? Math.ceil(JSON.stringify(post.body).split(" ").length / 200)
      : 5,
  );
</script>

<Metadata
  pageTitle={post.title}
  pageDescription={post?.excerpt ?? post?.title ?? ""}
  siteName="Moch Jimmy Marchel - Post"
  image={post.mainImage.url}
/>
<div class="min-h-screen pb-20">
  <div class="max-w-5xl mx-auto md:px-6 pb-8">
    <button
      onclick={goBack}
      class="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
    >
      <ArrowLeft class="mr-2 h-4 w-4" />
      Back to Post
    </button>
  </div>

  {#if !post}
    <div class="max-w-5xl mx-auto px-6 text-center py-20">
      <p>Loading post...</p>
    </div>
  {:else}
    <div
      class="max-w-7xl mx-auto md:px-6 grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-10"
    >
      <article>
        <header class="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div
            class="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6"
          >
            <time datetime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{estimatedReadTime} min read</span>
          </div>

          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance mb-6 leading-tight"
          >
            {post.title}
          </h1>

          {#if post.excerpt}
            <p
              class="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {post.excerpt}
            </p>
          {/if}

          {#if post.author}
            <div class="flex items-center justify-center gap-3">
              <Avatar.Root class="h-10 w-10 border border-border">
                <Avatar.Image
                  src={post.author.image?.url}
                  alt={post.author.name}
                />
                <Avatar.Fallback
                  >{post.author.name?.charAt(0) ?? "A"}</Avatar.Fallback
                >
              </Avatar.Root>
              <div class="text-sm text-left">
                <p class="font-medium text-foreground">{post.author.name}</p>
                <p class="text-muted-foreground text-xs">Author</p>
              </div>
            </div>
          {/if}
        </header>

        <div class="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div
            class="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-sm"
          >
            <img
              src={post.mainImage.url}
              alt={post.title}
              class="h-full w-full object-cover"
              width={post.mainImage.dims?.width}
              height={post.mainImage.dims?.height}
            />
          </div>
        </div>

        <div class="xl:hidden">
          <TableOfContents body={post.body} mode="mobile" />
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="prose prose-lg prose-invert text-muted-foreground">
            <PortableText
              value={post.body}
              components={{
                types: {
                  code: CodeBlock,
                  image: Image,
                },
                block: {
                  h1: CustomHeading,
                  h2: CustomHeading,
                  h3: CustomHeading,
                  normal: Text,
                  blockquote: Text,
                },
                marks: {
                  link: CustomLink,
                },
                list: {
                  bullet: CustomList,
                },
              }}
            />
          </div>
        </div>
      </article>

      <!-- <aside class="hidden xl:block">
        <div class="sticky top-20">
          <h2 class="text-lg font-bold mb-4 text-foreground">
            Table of contents
          </h2>
          <TableOfContents body={post.body} mode="desktop" />
        </div>
      </aside> -->
    </div>
  {/if}
</div>
