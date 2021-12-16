import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const cid = derived(apiData, ($apiData) => {
  if ($apiData.rows){
    return $apiData.rows.map(id => id.chapbook_id);
  }
  return [];
});

export const geo = derived(apiData, ($apiData) => {
  console.log($apiData)
  if ($apiData.rows){
    let g = $apiData.rows.map(id => id.geo_city);
    // g = Array.from(new Set(g));
    return g;
  }
  return [];
});

export const pub = derived(apiData, ($apiData) => {
  if ($apiData.rows){
    return $apiData.rows.map(id => id.publisher);
  }
  return [];
});