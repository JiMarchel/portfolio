<script lang="ts">
  import { Calendar } from "lucide-svelte";

  export let post: {
    title: string;
    publishedAt: string;
    mainImage: { url: string };
    categories: { title: string }[];
    slug: string;
  };
</script>

<a href="/posts/{post.slug}"
  class="w-full h-32 p-4 border border-gray-700 rounded-lg flex justify-between gap-5 shadow-2xl hover:border-pink-600 transition-all duration-200 cursor-pointer"
>
  <div class="space-y-1">
    <h1 class="font-bold text-xl">{post.title}</h1>
    <p class="text-gray-400 text-sm flex items-center gap-1">
      <span>
        <Calendar size={14} />
      </span>
      {new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
    <div class="space-x-1">
      {#each post.categories as category}
        <span class="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded-full"
          >{category.title}</span
        >
      {/each}
    </div>
  </div>
  <img
    src={post.mainImage.url}
    alt={post.title}
    class="h-auto w-auto object-cover"
  />
</a>
