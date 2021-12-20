<script>
  import { url } from "@roxi/routify";
  import { Magnifier } from 'svelte-magnifier';
  import { goto } from '@roxi/routify';

  export let data = [],
    rowid;
  $: item = data.filter(item => item.rowid == rowid)[0];

</script>

<style>

  :global(.magnifier) {
      float: left;
      margin: 0px 0px 0px 35px;
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      width: 50%;
      box-sizing: border-box;
      text-align: center;
  }

  .dis {
    position: fixed;
    width: 26%;
    right: 0;
    text-align: center;

  }

  .info_card {
    background: #ebdbbd;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px 25px 15px 35px;
    width: 79%;
    max-height: 60vh;
    overflow: scroll;

  }

  .info {
      text-align: left;
      color: #30303B;
  }
</style>

<div class="widget-display">
  <div class="dis_card">
    <Magnifier zoomFactor=1 src="/original/{item['img_file']}" alt="Avatar" width="700px" mgHeight="200" mgWidth="200" mgTouchOffsetX=0 mgTouchOffsetY=0 />
  </div>

  <div class="dis">
    <div class="butts">
      <button on:click={$goto($url('../'))}>Go back</button>
      <button on:click={$goto($url('../../../home'))}>Home</button>
    </div>

    <div class="info_card">
      <div class="info">
          <h3><b>Year :</b> {item['date_issued']}</h3>
          <p><b>Title :</b> {item['title']}</p>
          <p><b>Subtitle :</b> {item['subtitle']}</p>
          <p><b>Chapbook ID :</b> <a href={item['url']} target="_blank">{item['chapbook_id']}</a></p>
          <p><b>Alternative titles :</b> {item['alt_titles']}</p>
          <p><b>Publishing info :</b> {item['pub_full']}</p>
          <p><b>Record notes :</b> {item['record_notes']}</p>
          <p><b>Bibliographic Notes :</b> {item['bibliographic_notes']}</p>
      </div>
    </div>
  </div>

</div>
