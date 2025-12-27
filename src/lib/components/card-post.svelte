<script lang="ts">
  export let post: {
    title: string;
    publishedAt: string;
    mainImage: { url: string };
    categories: { title: string }[];
    slug: string;
  };
</script>

<a
    href="/posts/{post.slug}"
    class="group flex flex-col gap-2 p-4 -mx-4 rounded-md hover:bg-muted/50 transition-colors"
  >
    <div class="flex flex-col gap-1">
      <h3 class="font-medium text-foreground group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      
      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        <time datetime={post.publishedAt} class="shrink-0">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short", 
              day: "numeric",
            })}
        </time>
        {#if post.categories?.length}
            <span class="hidden sm:inline">•</span>
            <div class="flex flex-wrap gap-2">
                {#each post.categories as category}
                    <span class="bg-muted px-1.5 py-0.5 rounded text-xs">{category.title}</span>
                {/each}
            </div>
        {/if}
      </div>
    </div>
  </a>