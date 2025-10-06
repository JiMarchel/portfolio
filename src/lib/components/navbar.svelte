<script lang="ts">
  import {
    Github,
    House,
    Instagram,
    Linkedin,
    Mail,
    PencilLine,
  } from "lucide-svelte";
</script>

<nav
  class="border-b border-gray py-2 px-1 flex pt-5 items-center justify-between gap-14 sm:gap-2 shadow-2xl sm:w-2xl"
>
  <div class="flex items-center gap-4">
    <a href="/" class="hover:scale-125 transition-all duration-200">
      <House />
    </a>
    <a href="/posts" class="hover:scale-125 transition-all duration-200">
      <PencilLine />
    </a>
  </div>
  <div class="flex items-center gap-4 ">
    <a href="https://github.com/JiMarchel" target="_blank" class="hover:scale-125 transition-all duration-200"><Github /></a>
    <a href="https://www.linkedin.com/in/jimarchel/" target="_blank" class="hover:scale-125 transition-all duration-200"><Linkedin /></a>
    <a href="https://www.instagram.com/0xmarchel/" target="_blank" class="hover:scale-125 transition-all duration-200"><Instagram /></a>
    <a href="mailto:dev@jimarchel.my.id" class="hover:scale-125 transition-all duration-200"><Mail /></a>
  </div>
</nav>
