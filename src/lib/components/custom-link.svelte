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

  let {portableText, children}: Props = $props()

  let {value} = $derived(portableText)
  let newWindow = $derived(value.newWindow || false)
</script>

{#if value.url}
  <a href={value.url} target={newWindow ? '_blank' : undefined} class="font-medium text-blue-500 hover:text-blue-400 hover:underline transition-colors">
    {@render children()}
  </a>
{:else}
  {@render children()} 
{/if}