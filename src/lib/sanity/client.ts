import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID || "7blsog1k",
  dataset: PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
