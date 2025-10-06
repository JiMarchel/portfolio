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

<div>
  <a
    href="/posts/{post.slug}"
    class="w-full p-4 border border-gray-700 rounded-lg grid grid-cols-5 gap-3 sm:gap-5 shadow-2xl hover:border-pink-600 transition-all duration-200 cursor-pointer"
  >
    <!-- Konten (full-width mobile, 3/4 desktop) -->
    <div class="space-y-1 col-span-3 flex flex-col justify-between">
      <div>
        <h1 class="font-bold text-lg sm:text-xl line-clamp-2">{post.title}</h1>
        <p class="text-gray-400 text-sm flex items-center gap-1 mt-1">
          <span>
            <Calendar size={14} />
          </span>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      
      <div class="flex flex-wrap gap-1 mt-2">
        {#each post.categories.sort((a, b) => b.title.length - a.title.length) as category}
          <span class="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded-full"
            >{category.title}</span
          >
        {/each}
      </div>
    </div>

    <!-- Gambar (full-width mobile, 1/4 desktop) -->
    <div class="col-span-2 sm:order-last ">
      <div class="h-32 sm:h-full w-full overflow-hidden rounded">
        <img
          src={post.mainImage.url}
          alt={post.title}
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </a>
</div>