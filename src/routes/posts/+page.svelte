<script lang="ts">
  import CardDetailed from "$lib/components/card-detailed.svelte";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import { ChevronLeftIcon, ChevronRightIcon } from "lucide-svelte";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import Metadata from "$lib/components/metadata.svelte";

  let { data } = $props();

  const perPage = 5;
  let currentPage = $derived.by(() => {
    const p = Number(page.url.searchParams.get("page") ?? "1");
    return Number.isFinite(p) && p > 0 ? p : 1;
  });

  const posts = $derived(
    data.posts.slice((currentPage - 1) * perPage, currentPage * perPage)
  );

  const count = data.posts.length;

  const onPageChange = (currentPage: number) => {
    goto(`?page=${currentPage}`);
  };
</script>

<Metadata
  pageDescription="Explore the latest posts from Moch Jimmy Marchel."
  pageTitle="Moch Jimmy Marchel - Posts"
  siteName="Moch Jimmy Marchel - Portfolio"
/>

<div class="min-h-screen py-12 px-6">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="space-y-2 pb-4 border-b border-border/40">
      <h1 class="text-3xl font-bold tracking-tight">Writing</h1>
      <p class="text-muted-foreground">Thoughts on development, security, CTF and everything in between.</p>
    </div>

    <section class="flex flex-col gap-6">
      {#each posts as post}
        <CardDetailed {post} />
      {/each}
    </section>

  <Pagination.Root {count} {perPage} bind:page={currentPage} {onPageChange}>
    {#snippet children({ pages, currentPage })}
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.PrevButton>
            <ChevronLeftIcon class="size-4" />
            <span class="hidden sm:block">Previous</span>
          </Pagination.PrevButton>
        </Pagination.Item>
        {#each pages as page (page.key)}
          {#if page.type === "ellipsis"}
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
          {:else}
            <Pagination.Item>
              <Pagination.Link {page} isActive={currentPage === page.value}>
                {page.value}
              </Pagination.Link>
            </Pagination.Item>
          {/if}
        {/each}
        <Pagination.Item>
          <Pagination.NextButton>
            <span class="hidden sm:block">Next</span>
            <ChevronRightIcon class="size-4" />
          </Pagination.NextButton>
        </Pagination.Item>
      </Pagination.Content>
    {/snippet}
  </Pagination.Root>
  </div>
</div>
