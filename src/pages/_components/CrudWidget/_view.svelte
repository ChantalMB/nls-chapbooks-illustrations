<script>
  import { url } from "@roxi/routify";
  export let data = [],
    rowid;
  $: item = data.filter(item => item.rowid == rowid)[0];
</script>

{#if item}
  <div>
    <div>
      {#each Object.entries(item) as [name, value]}
        <div>
          <b>{name}:</b>
          {value}
        </div>
      {/each}
    </div>
    <br />
    <a href={$url('../', { rowid })}>[Back]</a>
    <a href={$url('../:id/update', { rowid })}>[Update]</a>
  </div>
{/if}
