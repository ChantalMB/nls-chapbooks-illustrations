<script>
    import { url } from "@roxi/routify";
    import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte'
    import FaGitAlt from 'svelte-icons/fa/FaGitAlt.svelte'
    import GoGraph from 'svelte-icons/go/GoGraph.svelte'

</script>

<style>
    .icons {
        text-align: center;
        margin-bottom: 0px;
    }

    .icon {
        color: red;
        width: 23px;
        height: 23px;
        display: inline-block;
        margin: 5px 15px 7px 15px;
    }

    p {
        margin-top: 3px;
    }
</style>

<div class="wrapper">
    <div class="title">
        <h1 style="margin-top: 0px; margin-bottom: 0px;">Observing Chapbooks</h1>
        <div class="icons">
            <div class="icon">
              <a href="https://chantalmb.github.io/nls-chapbooks-pixplot/" target="_blank"><GoGraph /></a>
            </div>
            <div class="icon">
              <a href="https://nls-chapbooks-illustrations.vercel.app/" target="_blank"><FaDatabase /></a>
            </div>
            <div class="icon">
              <a href="https://github.com/ChantalMB/nls-chapbooks-illustrations" target="_blank"><FaGitAlt /></a>
            </div>
        </div>
        <p>Throughout the early modern period and into the 19th century, thousands of chapbooks were produced for the masses in Scotland. These small, cheaply-produced booklets that contained songs, stories, sermons, and more were a key source of entertainment for their readers, and often, their listeners.</p>
        <p>This website was created to explore the rough woodcut illustrations that often decorated the pages of these chapbooks. Using a combination of object detection and Convolutional Neural Networks via PixPlot, the pages which contain illustrations were clustered based on visual similarity. You can explore these outputted clusters in their original form on a PixPlot page as linked below, or use any one of the images on this page to explore them in a more traditional, gallery format.
        </p>
    </div>
    
    <a id="cds1" class="card" style="background-image:url('/original/117874979.3.jpg')" href={$url('./:id', {id : "cluster_1"})}>
        <h3 class="item">#1</h3>
    </a>

    <a id="cds2" class="card" style="background-image:url('/original/117873764.3.jpg')" href={$url('./:id', {id : "cluster_2"})}>
        <h3 class="item">#2</h3>
    </a>

    <a id="cds3" class="card" style="background-image:url('/original/117874691.3.jpg');" href={$url('./:id', {id : "cluster_3"})}>
        <h3 class="item">#3</h3>
    </a>

    <a id="cds4" class="card" style="background-image:url('/original/117863041.3.jpg')" href={$url('./:id', {id : "cluster_4"})}>
        <h3 class="item">#4</h3>
    </a>

    <a id="cds5" class="card" style="background-image:url('/original/117874595.3.jpg')" href={$url('./:id', {id : "cluster_5"})}>
        <h3 class="item">#5</h3>
    </a>

    <a id="cds6" class="card" style="background-image:url('/original/117859471.3.jpg')" href={$url('./:id', {id : "cluster_6"})}>
        <h3 class="item">#6</h3>
    </a>

    <a id="cds7" class="card" style="background-image:url('/original/117873668.3.jpg')" href={$url('./:id', {id : "cluster_7"})}>
        <h3 class="item">#7</h3>
    </a>

    <a id="cds8" class="card" style="background-image:url('/original/117874787.3.jpg')" href={$url('./:id', {id : "cluster_8"})}>
        <h3 class="item">#8</h3>
    </a>

    <a id="cds9" class="card" style="background-image:url('/original/117859555.3.jpg')" href={$url('./:id', {id : "cluster_9"})}>
        <h3 class="item">#9</h3>
    </a>

    <a id="cds10" class="card" style="background-image:url('/original/117862657.3.jpg')" href={$url('./:id', {id : "cluster_10"})}>
        <h3 class="item">#10</h3>
    </a>
  
</div>