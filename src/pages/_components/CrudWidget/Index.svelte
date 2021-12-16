<script>
  import { leftover } from "@roxi/routify";
  import { onMount } from "svelte";

  import list from "./_list.svelte";
  import update from "./_update.svelte";
  import view from "./_view.svelte";
  export let data;
  const components = { list, update, view };

  $: [rowid, action = "view"] = $leftover.split("/");
  $: component = (rowid && components[action]) || list;
</script>

<div>
  <div style="width: 100%; margin: auto;" class="widget">
    <svelte:component this={component} {data} {rowid} />
  </div>
</div>