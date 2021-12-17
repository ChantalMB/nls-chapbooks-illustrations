<style>
  main {
    background: #7fc5bb;
    height: 100%;
    overflow: auto;
  }
</style>

<script>
import { onMount } from "svelte";
import { apiData, cid } from '../store.js';

// onMount(async () => {
//   fetch("https://nls-chapbooks-illustrations.herokuapp.com/nls-chapbooks-illustrations/or_nc_merged.json?_shape=objects")
//   .then(response => response.json())
//   .then(data => {
// 		console.log(data);
//     apiData.set(data);
//   }).catch(error => {
//     console.log(error);
//     return [];
//   });
// });

</script>

<!-- routify:options index=0 -->
<main>
	<h1>Whiskey Drinks Menu</h1>
	<ul>

	<!-- {#each $cid as drinkName}
    {#if drinkName == '104187055'}
      <li>{drinkName}</li>
    {/if}
	{/each} -->
	</ul>
</main>
