<style>
    main {
        background: #303B3A;
        height: 100%;
    }
    * :global(.card) {
        background: transparent;
        width: 256px;
        height: 256px;
        display: inline-block;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 24px;
    }

    :global(.pg_margin) {
        margin: 15px;
    }

    :global(.filter) {
        position: fixed;
        float: left;
        width: 19%;
        box-sizing: border-box;
    }

    :global(.loading) {
        top: 50%;
        left: 59%;
        transform: translate(-50% , -50%);
        position: absolute;
    }

    :global(select) {
        width: 100%;
        background: #ebdbbd;
        color: #30303B;
    }

    :global(.multi) {
        height: 60vh;
        background: #ebdbbd;
        color: #30303B;
    }

    :global(.show_imgs) {
        float:right;
        width: 81%;
        box-sizing: border-box;
        text-align:center;
    }
</style>
  
<!-- routify:options index=1 -->
<main>
    <slot />
</main>
  