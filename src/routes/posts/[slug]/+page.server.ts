import { client } from "$lib/sanity/client.js";
import { POST_QUERY } from "$lib/sanity/queries";

export async function load({ params }) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return { status: 404 };
  }

  return { post };
}
