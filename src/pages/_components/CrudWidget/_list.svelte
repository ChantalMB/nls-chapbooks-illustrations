<script>
  import { url } from "@roxi/routify";
  export let data;
</script>

<div class="items">
  {#each data as item}
    <a class="card" href={$url('../:rowid', { rowid: item.rowid })}>
      <img src="/original/{item.img_file}" alt="Avatar" style="width:100%">
      <h3 class="item">{item.date_issued}, {item.title}</h3>
    </a>
  {/each}
</div>


