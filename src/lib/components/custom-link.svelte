<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'
  import {type Snippet} from 'svelte'

  interface Props {
    portableText: MarkComponentProps<{
      url?: string
      newWindow?: boolean
    }>
    children: Snippet
  }

  // Property custom marks receive from @portabletext/svelte when rendered
  let {portableText, children}: Props = $props()

  // Remember to make your variables reactive with runes (or $: if using legacy syntax)
  // so that they can reflect prop changes
  // See: https://svelte.dev/docs/svelte/$derived
  // Or if using legacy syntax: https://svelte.dev/docs/svelte/legacy-reactive-assignments
  let {value} = $derived(portableText)
  let newWindow = $derived(value.newWindow || false)
</script>

{#if value.url}
  <a href={value.url} target={newWindow ? '_blank' : undefined} class="font-medium text-blue-500 hover:text-blue-400 hover:underline transition-colors">
    <!-- Marks receive children which you can render with Svelte's slots -->
    {@render children()}
  </a>
{:else}
  <!-- If no valid URL, render only the contents of the mark -->
  {@render children()} 
{/if}