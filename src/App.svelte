<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baskervville&family=Libre+Baskerville:wght@700&family=Spartan:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<Router {routes} />