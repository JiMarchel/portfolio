<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import Card from "$lib/components/card-post.svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";

  let { data } = $props();

  const slicedPosts = data.posts.slice(0, 3);
</script>

<Metadata
  pageDescription="Hi there, I am Moch Jimmy Marchel. I enjoy writing Typescript. I am interested in Programming Languages, CyberSecurity and I love to play CTF.
I use this website to store my CTF writeups and maybe share my interesting experiences in the future."
  pageTitle="Moch Jimmy Marchel - Portfolio"
  siteName="Moch Jimmy Marchel - Portfolio"
/>

<div class="flex flex-col gap-12 sm:gap-16">
  <section
    class="flex flex-col sm:flex-row gap-8 sm:items-start justify-between"
  >
    <div class="flex flex-col gap-4 max-w-lg w-full">
      <div class="flex items-center justify-between gap-4">
        <h1
          class="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          Hey, I'm Moch Jimmy Marchel
        </h1>

        <div class="relative shrink-0 sm:hidden">
          <Avatar.Root class="size-24 border-2 border-border/50">
            <Avatar.Image src="/cat.jpeg" alt="Moch Jimmy Marchel" />
            <Avatar.Fallback class="text-2xl">MJ</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </div>
      <p class="text-lg text-muted-foreground leading-relaxed">
        Hi, I enjoy writing Typescript and exploring Programming Languages. I
        use this website to store my CTF writeups and maybe share my interesting
        experiences in the future. Currently focused on learning web
        exploitation and secure coding practices.
      </p>

      <div class="flex items-center gap-4 pt-4">
        <a
          href="https://github.com/jimarchel"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium hover:underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jimarchel"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href="mailto:dev@jimarchel.my.id"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium hover:underline underline-offset-4"
        >
          Email
        </a>
      </div>
    </div>

    <div class="relative shrink-0 hidden sm:block">
      <Avatar.Root class="size-32 border-2 border-border/50">
        <Avatar.Image src="/cat.jpeg" alt="Moch Jimmy Marchel" />
        <Avatar.Fallback class="text-2xl">MJ</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </section>

  <Separator/>

  <section class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold tracking-tight">Latest Posts</h2>
      <a
        href="/posts"
        class="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        View all
      </a>
    </div>

    <div class="grid gap-4">
      {#each slicedPosts as post}
        <Card {post} />
      {/each}
    </div>
  </section>
</div>
