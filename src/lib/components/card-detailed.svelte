<script lang="ts">
  export let post: {
    title: string;
    publishedAt: string;
    mainImage: { url: string };
    categories: { title: string }[];
    slug: string;
    excerpt?: string;
  };
</script>

<a
  href="/posts/{post.slug}"
  class="group grid grid-cols-1 sm:grid-cols-12 gap-6 bg-card hover:bg-muted/50 p-4 -mx-4 rounded-xl transition-all duration-300"
>
  <div class="sm:col-span-4 relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/50">
    <img
      src={post.mainImage.url}
      alt={post.title}
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"    
    />
  </div>

  <div class="sm:col-span-8 flex flex-col justify-center gap-3">
    <div class="text-xs font-medium text-muted-foreground">
      {new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short", 
        day: "numeric",
      })}
    </div>

    <h3 class="text-xl sm:text-2xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text group-hover:text-primary transition-colors">
      {post.title}
    </h3>
    {#if post.excerpt}
      <p class="text-muted-foreground line-clamp-2 md:line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>
    {/if}

    {#if post.categories?.length}
      <div class="flex flex-wrap gap-2 mt-auto pt-2">
        {#each post.categories as category}
          <span class="text-xs bg-muted px-2 py-1 rounded-md text-foreground/80">{category.title}</span>
        {/each}
      </div>
    {/if}
  </div>
</a>
