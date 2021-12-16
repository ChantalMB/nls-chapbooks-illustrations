<script>
  import { url } from "@roxi/routify";
  export let data, rowid;
  $: item = data.filter(item => item.rowid == rowid)[0];
</script>

<div >
  <div >
    {#each Object.entries(item) as [name, value]}
      <div>
        <b>{name}:</b>
        <input type="text" {value}>
      </div>
    {/each}
  </div>
  <br>
  <a href="{$url('../:id', {rowid})}">Back</a>
</div>
