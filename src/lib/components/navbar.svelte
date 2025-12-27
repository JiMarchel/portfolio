<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
  ];
</script>

<header class="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b border-border/40">
  <div class="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
    <nav class="flex items-center gap-6">
      {#each navItems as item}
        <a 
          href={item.href} 
          class={cn(
            "text-sm font-medium transition-colors hover:text-foreground",
            page.url.pathname === item.href ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {item.label}
        </a>
      {/each}
    </nav>
    
    <div class="flex items-center gap-4">
      <!-- Add socials here or keep them in the hero if you prefer a cleaner nav -->
    </div>
  </div>
</header>
