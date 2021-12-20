<script>
    export let id;
    import { url } from "@roxi/routify";
    import { clusters } from '../../../store.js';
    import { goto } from '@roxi/routify'


    let imgs;

    for (let i = 0, len = $clusters.length; i < len; i++) {
        for (let j = 0, len = $clusters[i].length; j < len; j++) {
            if (id == $clusters[i][j]['label']) {
                imgs = $clusters[i][j]['images'];
            }
        }
    }
    console.log(imgs)

</script>

<style>
    :global(.ccard) {
        background: #f1e6d2;
        max-width: 15%;
        max-height: 30%;
        display: inline-block;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 24px;
        text-align: center;

    }
    .pgContent {
        text-align: center;
    }
</style>

<div class="pgContent">
    <div style="padding-top: 19px; text-align: center; margin-top: -8px; margin: 0 auto; width: 70%;">
    <p> The cluster you see on this page is listed "in order", which means that what precedes and follows each image are their "neighbours" in similarity. As you scroll, keep this in mind and note the trends which appear across this set of images. Click animage if you'd like to take a closer look.</p>
    </div>
    <button on:click={$goto($url('../../home'))}>Return to home</button>

    <div>
        {#each imgs as i}
            <a class="ccard" href={$url('./:item', { item: i })}>
            <img src="/original/{i}" alt="Avatar" style="width:100%;">
            <h3 class="item">{i}</h3>
            </a>
        {/each}
    </div>

    <button on:click={$goto($url('../../home'))}>Return to home</button>
</div>

