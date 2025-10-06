<script lang="ts">
  let {
    pageTitle,
    pageDescription,
    siteName,
    author = "Moch Jimmy Marchel",
  } = $props();

  const imageUrl = $derived(`/hat.png`);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta
    name="keywords"
    content="Moch Jimmy Marchel, Moch, Jimmy, Marchel, mochjimmy, mochjimmymarchel, mochjimmy.dev, mochjimmy.id, mochjimmy.com, mochjimmy.net, mochjimmymarchel.dev, mochjimmymarchel.id, mochjimmymarchel.com, mochjimmymarchel.net, CTF, Writeup, CyberSecurity, Web Development, Programming"
  />
  <meta property="og:image" content={imageUrl} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content="Moch Jimmy Marchel's Portrait" />
  <meta name="author" content={author} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <!-- <meta property="og:url" content={origin} /> -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <!-- <link rel="canonical" href={origin} /> -->
  <meta name="application-name" content={siteName} />
  <meta name="generator" content="SvelteKit" />
  <meta name="license" content="MIT" />
  <meta name="color-scheme" content="dark" />
  <meta name="theme-color" content="#13111C" />
  <meta name="format-detection" content="telephone=no" />
  <link rel="icon" href={imageUrl} />
</svelte:head>
