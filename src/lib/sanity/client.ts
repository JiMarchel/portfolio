import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset:   PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-15',  // ganti dengan versi yang kamu pakai
  useCdn: true               // true = cepat, caching; false = data paling fresh
  // token: import.meta.env.VITE_SANITY_READ_TOKEN, // hanya jika butuh draft/preview
});
