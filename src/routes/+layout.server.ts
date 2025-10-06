import { client } from '$lib/sanity/client';
import { POSTS_QUERY } from '$lib/sanity/queries';

export async function load() {
  const posts = await client.fetch(POSTS_QUERY);
  return { posts }
}