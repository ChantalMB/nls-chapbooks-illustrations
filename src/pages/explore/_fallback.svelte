<script>
    import CrudWidget from "../_components/CrudWidget/Index.svelte";
    import { onMount } from 'svelte';
    import { cities, books, pubs } from '../../store.js';
    import { Stretch } from 'svelte-loading-spinners';
    import { url } from "@roxi/routify";  

    let filter_1 = "pub_simplify";
    let filter_2 = "A. Imlay";
    let modded_filter = "";
    let posts = [];
    let url_link;
    let check_url_link;
    let search_link;
    let curr_link;
    let setFilter = [];

    let dataLoading = false;

    onMount(async () => {
        setLink();
        loadData();
    });

    function setLink() {
      url_link = 'https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/or_nc_merged.json?_sort=rowid&' + filter_1 + '__exact=';

      search_link = 'https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/or_nc_merged.json?_shape=array&_sort=rowid&' + filter_1 + '__exact=';

      if (filter_1 == "geo_city") {
        setFilter = $cities;
      } else if (filter_1 == "pub_simplify") {
        setFilter = $pubs;
      } else if (filter_1 == "chapbook_id") {
        setFilter = $books;
      }

      curr_link = search_link;
      check_url_link = url_link;
    }

    async function loadData() {
      let join_link;

      modded_filter = String(filter_2)
      if (modded_filter.includes("&")) {
        modded_filter = modded_filter.replace("&", "%26")
      }

      if (!curr_link.includes("_next")) {
        posts = [];
        join_link = curr_link + modded_filter;
        check_url_link = check_url_link + modded_filter;
      } else {
        join_link = curr_link;
      }

      dataLoading = true;
      const response = await fetch(join_link);
      const d = await response.json();

      //console.log(join_link)

      for (let i = 0, len = d.length; i < len; i++) {
        posts.push(d[i])
      }

      console.log(check_url_link)
      const nurl = await fetch(check_url_link);
      const check = await nurl.json();
      //console.log("check: " + check);

      if (check.next_url != null){
        curr_link = check.next_url;
        check_url_link = curr_link;
        let mod = curr_link.split(/(?<=\bor_nc_merged.json\?\b)/);
        curr_link = mod[0] + '_shape=array&' + mod[1];
        loadData();
      } else {
        curr_link = search_link;
        check_url_link = url_link;
        dataLoading = false;
      }
      posts = posts;
      join_link = "";
    }

</script>

<div style="text-align: center; margin-top: -8px; margin: 0 auto; width: 70%;">
    <h1 >Explore the Illustrations</h1>
    <p>On this page, you may explore the illustrated pages of Scotland's chapbooks through filtering the metadata associated with each chapbook. Should you like to view the metadata in its original digitized format, the database which this page uses can be accessed <a href="https://nls-chapbooks-illustrations.herokuapp.com/">here</a>.</p>
</div>

<div class="pg_margin">
  <div class="filter">
    <div style="padding-top: 5px">
        <select bind:value={filter_1} on:change={() => setLink()}>
            <option value='pub_simplify'>by printer</option>
            <option value='geo_city'>by location</option>
            <option value='chapbook_id'>by book</option>
        </select>
    </div>

    <div style="padding-top: 5px">
      <select class="multi" multiple bind:value={filter_2} on:change={() => loadData()}>
        {#each setFilter as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="show_imgs">
    {#if dataLoading === true}
    <div class="loading">
      <Stretch size="60" color="beige" unit="px" duration="1s"></Stretch>
    </div>
    {:else}
      <CrudWidget data={posts} />
    {/if}
  </div>
</div>