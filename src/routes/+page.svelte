<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import Card from "$lib/components/card-post.svelte";
  import Metadata from "$lib/components/metadata.svelte";

  let { data } = $props();

  const slicedPosts = data.posts.slice(0, 3);
</script>

<Metadata
  pageDescription="Hi there, I am Moch Jimmy Marchel. I enjoy writing Typescript. I am interested in Programming Languages, CyberSecurity and I love to play CTF.
I use this website to store my CTF writeups and maybe share my interesting experiences in the future."
  pageTitle="Moch Jimmy Marchel - Portfolio"
  siteName="Moch Jimmy Marchel - Portfolio"
/>

<div
  class="text-white z-50 relative flex flex-col items-center justify-center pt-5"
>
  <div class="flex items-center gap-2">
    <Avatar.Root>
      <Avatar.Image src="/my.jpeg" alt="My Avatar" />
      <Avatar.Fallback>MJ</Avatar.Fallback>
    </Avatar.Root>

    <div>
      <p class="font-medium">Moch Jimmy Marchel</p>
      <p class="text-[0.8rem] text-gray-300">Junior Pentester | Web Dev</p>
    </div>
  </div>

  <div class="flex flex-col pt-10 max-w-xl gap-2">
    <h1
      class="bg-gradient-to-br from-white to-gray-400/80 bg-clip-text text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      About Me
    </h1>
    <p class=" text-gray-300">
      Hi there, I am Moch Jimmy Marchel. I enjoy writing Typescript. I am
      interested in Programming Languages, CyberSecurity and I love to play CTF.
    </p>

    <p class="text-gray-300">
      I use this website to store my CTF writeups and maybe share my interesting
      experiences in the future.
    </p>
  </div>

  <section class="flex flex-col pt-15 w-xl gap-2">
    <h1
      class="whitespace-pre-wrap bg-gradient-to-br from-white to-gray-400/80 bg-clip-text text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      Latest Posts
    </h1>
    {#each slicedPosts as post}
      <Card {post} />
    {/each}
    <a
      href="/posts"
      class="bg-gradient-to-br from-white to-gray-400/80 bg-clip-text font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-center pt-5"
      >View all posts...</a
    >
  </section>
</div>
