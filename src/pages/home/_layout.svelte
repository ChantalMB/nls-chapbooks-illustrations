<style>
  main {
    background: #678785;
    height: 100%;
    overflow: auto;
  }

  :global(.wrapper) {
    margin: 0 auto;
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    grid-template-areas: 
      "cds1 cds2 cds3 cds4"
      "cds5 ct ct cds6"
      "cds7 cds8 cds9 cds10";
  }

  * :global(.card) {
    position: relative;
    padding: 1rem;
    height: 20vh;
    width: 85%;
    align-self: center;
    justify-self: center;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-size: 115%;
    background-repeat: no-repeat;
    background-position: 50% 59%;
  }

  * :global(.card > h3) {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 11px;
    color: #676787;
  }

  :global(#cds1) {
    justify-content: center;
    grid-area: cds1;
    animation: fadeIn 1s;    
  }

  :global(#cds2) {
    grid-area: cds2;
    animation: fadeIn 2s;

  }

  :global(#cds3) {
    grid-area: cds3;
    animation: fadeIn 3s;
  }

  :global(#cds4) {
    grid-area: cds4;
    animation: fadeIn 4s;
  }
  :global(#cds5) {
    grid-area: cds5;
    animation: fadeIn 2s;
  }
  :global(#cds6) {
    grid-area: cds6;
    animation: fadeIn 5s;
  }
  :global(#cds7) {
    grid-area: cds7;
    animation: fadeIn 3s;
  }
  :global(#cds8) {
    grid-area: cds8;
    animation: fadeIn 4s;
  }
  :global(#cds9) {
    grid-area: cds9;
    animation: fadeIn 5s;
  }
  :global(#cds10) {
    grid-area: cds10;
    animation: fadeIn 6s;
  }

  :global(.title) {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 10px;
    grid-area: ct;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>

<!-- routify:options index=0 -->
<main>
  <slot />
</main>
