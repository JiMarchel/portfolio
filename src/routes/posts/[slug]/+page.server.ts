import { error } from "@sveltejs/kit";
import { client } from "$lib/sanity/client.js";
import { POST_QUERY } from "$lib/sanity/queries";

export async function load({ params }) {
  try {
    const post = await client.fetch(POST_QUERY, { slug: params.slug });

    if (!post) {
      throw error(404, { message: "Post not found" });
    }

    return { post };
  } catch (err) {
    // If it's already a SvelteKit error, re-throw it
    if (err && typeof err === "object" && "status" in err) {
      throw err;
    }
    // Log the error for debugging
    console.error("Error fetching post:", err);
    throw error(500, { message: "Failed to load post" });
  }
}
