<script>
    import CrudWidget from "../_components/CrudWidget/Index.svelte";

    import { url, route } from "@roxi/routify";
    import { onMount } from "svelte";
    import { apiData, cid, geo, pub } from '../../store.js';
    import { goto } from '@roxi/routify'

  let posts = [];
  let curr_link = "https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/merged.json?_shape=objects";

  onMount(async () => {
    fetch("https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/merged.json?_shape=objects")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  });

  console.log("cid: " + $cid[0])

  let link;
  let items = [];
  let u_items = [];
  let setFilter = "";


  function setLink() {
    link = 'https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/merged.json?_shape=array&_sort=rowid&' + filter_1 + '__exact='
    // if (filter_1 ==)

  }

  async function loadCategory() {
        if (setFilter != filter_1){
          items = [];
        }
        const response = await fetch(curr_link)
        const opts = await response.json();
        
        for (let i = 0, len = opts.rows.length; i < len; i++) {
          items.push(opts.rows[i][filter_1])
        }

        console.log(items)

        if (opts.next_url != null) {
          curr_link = opts.next_url;
          console.log(curr_link)
          loadCategory();
        } else {
          u_items = Array.from(new Set(items));
          curr_link = "https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/merged.json?_shape=objects";
        }
        setFilter = filter_1;
        // Array.from(new Set(a))
    }


  async function loadData() {
    posts = [];
    let join_link = link + filter_2;
    console.log(join_link)
    const response = await fetch(join_link);
    const d = await response.json();
    for (let i = 0, len = d.length; i < len; i++) {
      posts.push(d[i])
    }
    posts = posts;
    join_link = "";
    console.log(d);
  }

  let filter_1 = "";
  let filter_2 = "";
</script>

<div style="padding-top: 20px">
    <h1 style="text-align: center; margin-top: -8px">Explore the Illustrations</h1>
</div>

<div style="padding-top: 5px">
    <select bind:value={filter_1} on:change={() => setLink()}>
        <option value='chapbook_id'>by book</option>
        <option value='publisher'>by printer</option>
        <option value='geo_city'>by location</option>
    </select>
</div>

<div style="padding-top: 5px">
    <select bind:value={filter_2} on:change={() => loadData()}>
        {#each $geo as drinkName}
          <option value={drinkName}>{drinkName}</option>
        {/each}
    </select>
</div>

<CrudWidget data={posts} />