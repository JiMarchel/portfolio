import { error } from "@sveltejs/kit";
import { client } from "$lib/sanity/client.js";
import { POST_QUERY } from "$lib/sanity/queries";

export async function load({ params }) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    throw error(404, { message: "Post not found" });
  }

  return { post };
}
