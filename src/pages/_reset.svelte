<script>
  import { TabsTransition } from "@roxi/routify/decorators";
  import BottomNav from "./_components/BottomNav.svelte";
  import { url, isActive } from "@roxi/routify";

  const _urls = [
    ["./home", "Home", "#30303B"],
    ["./explore", "Explore", "#30303B"],
    ["./paradata", "Paradata", "#30303B"],
  ];
  $: urls = _urls.map(([path, name, color]) => ({
    name,
    href: $url(path),
    color,
    active: !!$isActive(path),
  }));
</script>

<style>
  :global(body) {
    padding: 0;
  }
  * :global(.inset) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  main.inset {
    bottom: 64px;
    overflow: auto;
  }

  /* * :global(*) {
    text-align: center;
  } */
  /* a {
    position: fixed;
    top: 0;
    left: 0;
    padding: 8px 16px;
    background: #555;
    color: white;
  } */
</style>

<div style="height: 100%">
  <main class="inset">    
      <slot decorator={TabsTransition} />    
  </main>
  <BottomNav {urls} height="64px" />
</div>

