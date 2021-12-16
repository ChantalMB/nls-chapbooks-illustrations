<script>
  import { url } from "@roxi/routify";
  export let data;
</script>

<div class="items">
  {#each data as item}
    <a class="card" href={$url('../:rowid', { rowid: item.rowid })}>
      <img src="original/{item.img_file}" alt="Avatar" style="width:100%">
      <h3 class="item">{item.img_file}</h3>
    </a>
  {/each}
</div>

<style>
  * :global(.card) {
    background: transparent;
    width: 256px;
    height: 256px;
    display: inline-block;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 24px;
  }
</style>
