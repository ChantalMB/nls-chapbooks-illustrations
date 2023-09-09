<script>
    export let item;
    import { url } from "@roxi/routify";
    import { Magnifier } from 'svelte-magnifier';
    import { onMount } from 'svelte';
    import { goto } from '@roxi/routify'



    let imgInfo = {};

    onMount(async () => {
        let link = "https://nls-chapbooks-illustrations.vercel.app/nls-chapbooks-illustrations/or_nc_merged.json?_shape=array&_sort=rowid&img_file__exact=" + item;
        console.log(link)
        const response = await fetch(link);
        const d = await response.json();
        for (let i = 0, len = d.length; i < len; i++) {
            imgInfo = d[i];
        }
    });
        

  </script>
  
<style>
  :global(.magnifier) {
        float: left;    
        margin: 0px 15px 0px 33px;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

  .dis {
    position: fixed;
    right: 0;

  }

  .butts {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 45px;
  }

  .info_card {
    background: #ebdbbd;
    width: 34vw;
    max-height: 85vh;
    display: inline-block;
    box-shadow: 0 6px 13px 0 rgba(0, 0, 0, 0.19);
    margin: 30px 55px 15px 25px;
    padding: 10px 25px 15px 35px;
    overflow: scroll;
  }

  .info{
    float: left;
    text-align: left;
    position: relative;
    color: #30303B;
  }

</style>
  
<div class="dis_card">
  <Magnifier zoomFactor=1 src="/original/{item}" alt="Avatar" width="700px" mgHeight="200" mgWidth="200" mgTouchOffsetX=0 mgTouchOffsetY=0 />
</div>

<div class="dis">
  <div class="butts">
    <button on:click={$goto($url('../'))}>Go back</button>
    <button on:click={$goto($url('../../../home'))}>Home</button>
  </div>

  <div class="info_card">

    <div class="info">
        <h3><b>Year:</b> {imgInfo['date_issued']}</h3>
        <p><b>Chapbook ID : </b><a href={imgInfo['url']} target="_blank">{imgInfo['chapbook_id']}</a></p>
        <p><b>Title:</b> {imgInfo['title']}</p>
        <p><b>Subtitle:</b> {imgInfo['subtitle']}</p>
        <p><b>Alternative titles:</b> {imgInfo['alt_titles']}</p>
        <p><b>Publishing info:</b> {imgInfo['pub_full']}</p>
        <p><b>Record notes:</b> {imgInfo['record_notes']}</p>
        <p><b>Bibliographic Notes:</b> {imgInfo['bibliographic_notes']}</p>
    </div>
  </div>
</div>