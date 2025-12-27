<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    body: any[];
  }

  let { body, mode = "desktop" }: { body: any[]; mode?: "mobile" | "desktop" } =
    $props();

  // Extract headings from PortableText blocks
  let headings = $derived(
    body
      .filter(
        (block: any) =>
          block._type === "block" && ["h2", "h3"].includes(block.style)
      )
      .map((block: any) => {
        // PortableText content is an array of children (spans), join them to get text
        const text =
          block.children?.map((child: any) => child.text).join("") ?? "";
        const slug = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        return {
          id: slug,
          text,
          level: block.style === "h2" ? 2 : 3,
        };
      })
  );

  let activeId = $state("");

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headings.forEach((heading: any) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });

  function scrollTo(id: string, e: Event) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

{#if mode === "mobile"}
  <!-- Mobile View (Collapsible) -->
  <div class="mb-8 border border-border/60 rounded-lg p-4 bg-muted/30">
    <details class="group">
      <summary
        class="flex items-center justify-between font-medium cursor-pointer list-none text-foreground"
      >
        <span>Table of contents</span>
        <span class="transition-transform group-open:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
          >
        </span>
      </summary>
      <nav class="mt-4 flex flex-col gap-2">
        {#each headings as heading}
          <a
            href="#{heading.id}"
            onclick={(e) => scrollTo(heading.id, e)}
            class="text-sm text-muted-foreground hover:text-foreground transition-colors {heading.level ===
            3
              ? 'pl-4'
              : ''}"
          >
            {heading.text}
          </a>
        {/each}
      </nav>
    </details>
  </div>
{/if}

{#if mode === "desktop"}
  <!-- Desktop View (Sidebar) -->
  <nav
    class="sticky top-24 self-start max-h-[calc(100vh-8rem)]  w-full"
  >
    <ul class="space-y-4 text-sm border-l border-border/30 pl-4">
      {#each headings as heading}
        <li>
          <a
            href="#{heading.id}"
            onclick={(e) => scrollTo(heading.id, e)}
            class="block transition-all hover:text-foreground
              {activeId === heading.id
              ? 'text-foreground font-medium translate-x-1'
              : 'text-muted-foreground'}
              {heading.level === 3 ? 'pl-4' : ''}"
          >
            {heading.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
