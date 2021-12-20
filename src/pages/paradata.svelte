<script>
  import Gist from "./Gist.svelte";
  import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte'
  import FaGitAlt from 'svelte-icons/fa/FaGitAlt.svelte'
  import GoGraph from 'svelte-icons/go/GoGraph.svelte'

</script>
<style>
  main {
    background: #3B3832;
    height: 100%;
  }

  p {
    color: #3B3832;
  }

  h1 {
    text-align: center;
    margin-bottom: 0px;
  }

  .text {
    background-color: #f5ebd7;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    width: 75%;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 15px 35px 35px 35px;
  }

  .imgSets {
    position: relative;
    text-align: center;
  }

  figure {
    display: inline-block;
    width: 30%;
    margin: 10px;
    
  }

  figcaption {
    font-style: italic;
    font-size: small;
  }

  img {
    width: 100%;

  }

  p {
    overflow: hidden;
  }

  h2, h3, h4 {
    color: #30303B;
  }

  .icons {
    text-align: center;
    margin-bottom: 7px;
  }

  .icons p {
    margin-top: 0px;
  }

  .icon {
    color: red;
    width: 23px;
    height: 23px;
    display: inline-block;
    margin: 9px;
  }

</style>

<!-- routify:options index=2 -->


<main>
  <br />
  <h1>Project Paradata</h1>
  <div class="icons">
    <div class="icon">
      <a href="https://chantalmb.github.io/nls-chapbooks-pixplot/" target="_blank"><GoGraph /></a>
    </div>
    <div class="icon">
      <a href="https://nls-chapbooks-illustrations.herokuapp.com/" target="_blank"><FaDatabase /></a>
    </div>
    <div class="icon">
      <a href="https://github.com/ChantalMB/nls-chapbooks-illustrations" target="_blank"><FaGitAlt /></a>
    </div>
    <p><a href="https://github.com/ChantalMB">Chantal Brousseau</a></p>
  </div>
  <div class="text">
    <h2 id="paradata">Paradata</h2>
    <p>This project began as what I thought was an original idea, but instead became an experiment in reproducibility and accessibility. In the course this website was created for, <a href="https://graddh.netlify.app/">HIST5706</a>, we were tasked with building a work of exploratory digital history after having spent the previous weeks reading about and experimenting with various concepts that fell under the large umbrella of what &quot;digital history&quot; is. I knew I wanted to implement something related to computer vision, because although I plan to base my master&#39;s research on tasks related to it, I had done very little &quot;hands-on&quot; work with it; the theory I had read was both fascinating, yet intimidating. Earlier in the semester, I had been introduced to Yale&#39;s <a href="https://dhlab.yale.edu/projects/pixplot/">PixPlot</a>, and I thoroughly enjoyed using it because frankly, it&#39;s really cool-- I&#39;m a sucker for a good data visualization. I decided I wanted to use it in a more in-depth manner (and <em>oh boy did I</em>, but more on that later), yet to do so I first needed a dataset of images to feed it.</p>
    <p>As someone with a preference for early modern social history, particularly due to the eccentricities of woodcut illustrations, the first dataset that came to mind was the <a href="https://data.nls.uk/data/digitised-collections/chapbooks-printed-in-scotland/">collection of chapbooks printed in Scotland</a> as made available by the <a href="https://data.nls.uk/">National Library of Scotland</a>. The download contained nearly 50 000 scanned pages-- many of which featured my beloved woodcuts-- from the NLS&#39;s collection of chapbooks along with associated metadata, so it was the perfect starting point.</p>
    <p>It&#39;s commonly thought that many of the illustrations placed within chapbooks were chosen randomly and bore no relation to the text; these chapbooks were produced as cheaply as possible, and part of this included the trade and reuse of woodcuts to add illustrations. I am by no means an expert on Scottish chapbooks, even if I have spent <em>hours</em> looking at them at this point, but I do know that true randomness is a rare thing. Much like how computers rely on an algorithm they&#39;ve learned to produce a &quot;random&quot; digit, we humans rely on a brain trained on our life&#39;s experiences to make a &quot;random&quot; choice. Humans, obviously, are much more complex than any algorithim currently known, but the hypothesis I went into this project with was: how might the illustrations found in these chapbooks reflect the society which they were composed in? The printer who was selecting the illustrations also read the text associated with them, so did certain words evoke the usage of certain illustrations? Even if the printer grabbed a particular woodcut without looking, did they have a particular set of woodcuts? And what led to the curation of this collection? The first of these questions I had I thought may be best answered by a computer, the latter question, through metadata.</p>
    <h3 id="accessible-data-creation">Accessible data creation</h3>
    <p>Before I could answer any of these questions, I first had to tackle the challenge of how to identify the pages which contained images in the sea of 50 000 scans. I spent some time experimenting with OpenCV to see if I could perhaps do this algorithmically using the handful of images offered in the collection&#39;s sample data. Yet, due to the age and cheap nature of a chapbook&#39;s production, the thin pages and occasional ink splots led to many false positives. Fortunately, one fateful data when I googled the NLS&#39;s chapbooks collection because I had been too lazy to bookmark the Data Foundry page, I stumbled across this <a href="https://gitlab.com/vgg/nls-chapbooks-illustrations">project and paper</a> produced just a few months earlier by the <a href="https://www.robots.ox.ac.uk/~vgg/">Visual Geometry Group</a> at the University of Oxford. It was a project doing exactly what I was attempting to do-- visual analysis of the chapbooks of this collection-- <em>and</em> their repository included instructions on how to implement their object detection model for your own work! I read through their paper which introduced details of both the steps they took to compile their final dataset, and how their (very intriguing) in-house <a href="https://www.robots.ox.ac.uk/~vgg/software/vise/">VISE</a> software worked to group images based on visual similarity, much like PixPlot. Moving on to attempt to implement their work myself from their repo, however, was not as pleasant as reading their paper.</p>
    <p>Although I have done a decent amount of applied machine learning, I could not get their illustration detector to work on my computer. This was perhaps impacted by my lack of familiarity working with the tools they used, the lack of available information on these tools due to them being created in-house, and the fact that while I&#39;m assuming all of this was published so that the work was reproducible, the instructions about how to implementing their work came second to the outcome of research thus the instructions that <em>were</em> given ended up being somewhat scattered. Ultimately though, this failing effort to reproduce their work lead to the thought of, &quot;if I&#39;m having a hard time with this, then how might other digital historians with less experience than me fair should they need something like this for their own work?&quot; And so I set out on a journey to reproduce the project which VGG had introduced to me, except this time I would exclusively use open-source tools with well-established community support.</p>
    <h4 id="the-engima-of-object-detection">The Engima of Object Detection</h4>
    <p>I knew going into this that I wouldn&#39;t be able to achieve the exact quality of the VGG paper&#39;s results; they had a year to produce their work and I only had about 2 months. Performing object detection in an easy, accessible way to identify the pages in the dataset which included images was the most significant challenge for me in this project, and a bit of a failure in the way of reproducibility. For the task of finding details such as images within pages that also include wear from decades of ageing and layers of text due to the transparency of the paper, the detection model used in the VGG paper, <a href="https://arxiv.org/abs/1911.09070">EfficientDet</a> was undoubtedly the premier choice for this type of work. But EfficientDet is new, which means there&#39;s no beginner-friendly way to implement it. I wanted something that could easily be modified and could run in something like Google Colab for those who wanted to train their own models but didn&#39;t have the GPU to do so. I didn&#39;t have the time to develop a whole Python library to make EfficientDet easy to use in this manner, so I went to the next best object detection model, YOLOv3, which could be used with the popular (ImageAI library)[<a href="https://github.com/OlafenwaMoses/ImageAI">https://github.com/OlafenwaMoses/ImageAI</a>] for training custom object detection models.</p>
    <p>The creator of this project has made extensive tutorials on how to use this library for every task it could perform, and these tutorials made the coding segment of training my custom model incredibly simple. Yet, I did face issues initially installing the library, which revealed both some positives and negatives of using open-source tools such as ImageAI. The creator of ImageAI created the library as a side project, and while he had last updated the library to be used with Tensorflow 2.x in January 2021, he has not done any further work on the project which includes addressing and fixing the many issues which resulted from this update. I have encountered the issue of libraries being upgraded to use the latest Tensorflow version only to break many times before, and knew that I would need to install the last version of the library which used Tensorflow 1.x; but, ImageAI also has certain dependencies that must be installed with it, and this is where there&#39;s a significant benefit of using open-source tools-- the community following the project&#39;s development. By searching the issues raised on Github, within minutes <a href="https://github.com/OlafenwaMoses/ImageAI/issues/669">I found someone with a similar issue to me</a> and who subsequently listed their solution, which included their dependencies that resulted in the successful installation of ImageAI. After doing what this individual posited, I had the library installed and running!</p>
    <p>While in the VGG paper they annotated 337 images for their first out of three rounds of training their model, I wanted to see what I could produce using the minimum number of examples, so I annotated only 203 images over the course of one episode of <em>The X-Files</em> using the simplistic browser-based tool <a href="https://github.com/tzutalin/labelImg">LabelImg</a>. After dividing these images into training and validation sets, I was set to start training! Since I was developing this locally on my computer with a not-<em>amazing</em> GPU, I left this to run overnight, and when I had come back to it the next day it was finished training with no errors! I was shocked, because honestly every other time I&#39;ve done ML tasks, something goes wrong and getting the training going takes a few times. But not this time! So despite dependency issues, ImageAI may be the most pleasant experience I&#39;ve had with ML.</p>
    <p>Thanks to the VGG paper&#39;s discussion of common false-positive detections they experienced, I knew that there was a high probability I would also experience things such as images printed on the front of the page bleeding through the paper and thus being visible on the back. Before actually using my trained model to detect illustrations across all 47 329 images, I created a separate folder for all potential detections with a low confidence score to make manual clean up easier. Since I had only used 203 images to train my model, while it never failed to detect images when testing it, the confidence scores were low by default already so I anticipated some amount of inaccurate detections where the computer&#39;s certainty was less.</p>
    
    <div class="imgSets">
    <figure>
      <img src="/paraimgs/anno1.jpg" alt="example annotation"/>
    </figure>
    <figure>
      <img src="/paraimgs/anno2.jpg" alt="example annotation"/>
    </figure>
    <figure>
      <img src="/paraimgs/anno3.jpg" alt="example annotation"/>
    </figure>
    </div>

    <p>The results of my object detection? The dataset was immediately reduced to around 4500 pages, and manual clean up was simple after this both thanks to my &quot;low probability&quot; folder and the fact that what did successfully fool my model was usually a large spot of water damage or ink on a full page of text, which stood out in the sea of distinct woodcuts. I ended up with 3744 pages, which was 115 more than the VGG&#39;s paper; since they had a subject matter expert manually review the outputs of their detection model, I wondered what the differences were between what I kept and they excluded. I ran my list of image files against a list of theirs which I extracted from <a href="https://gitlab.com/vgg/nls-chapbooks-illustrations/-/blob/master/data/copy-of-vise-project-data/metadata_db.sqlite">the metadata used for their VISE database</a>, and surprisingly, the key differences I found were that what they included that was not in my collection of images was what seemed to be a handful of what seemed to be text-exclusive pages, which I&#39;m still not sure if they were intentionally kept or false detections that slipped past those doing the manual review of their model&#39;s output.</p>
    <p>Although I had good results from using ImageAI, I have yet to be able to get my work functioning in a colab notebook for others to use. For now, here is the code, that will hopefully run one day:</p>
    <Gist gistUrl="https://gist.github.com/ChantalMB/9cd0cb9cd527c096202543f2c03cbd8a"/>
    <h4 id="wrangling-metadata">Wrangling Metadata</h4>
    <p>The metadata created and used by this website <a href="https://nls-chapbooks-illustrations.herokuapp.com/">can be found here</a> in a useable and browseable format thanks to <a href="https://datasette.io/">Datasette</a>.</p>
    <p>Like in the VGG project, I too wanted my pages to be associated with their chapbook&#39;s metadata. Although I could use the PixPlot output to observe illustration associations, if I wanted to look at the work of individual printers and publishers, this could be done by organizing the images using their metadata. Since I had included a number of pages more than the VGG project had, I couldn&#39;t just reuse their metadata and instead I created my metadata in the same manner they had, by extracting the XML metadata associated with each chapbook, placing this information into a table using the XML parsing and pandas Python libraries, and then manually removing any auxiliary rows created by top-level tags. Since I knew I wanted to be able to browse these images by publishing information, I used <a href="https://openrefine.org/">OpenRefine</a> to create an additional column that included the information given about this in the metadata in a more &quot;normalized&quot; format that would be more conducive to filtering. Once I produced a table I was happy with, I converted the CSV table outputted to a database that was published via Datasette and hosted on <a href="https://www.heroku.com/">Heroku</a> Much of the work included in this step was tedious, but not at all impossible thanks to the numerous tools and guides openly available for the data cleaning process.</p>
    <h3 id="results">Results</h3>
    <p>Upon all of the metadata being wrangled and illustrations put in place, I was finally able to feed my extracted pages to PixPlot, which, as detailed in <a href="https://github.com/YaleDHLab/pix-plot">their GitHub repository</a>, is a very simple process. Zooming in and out of the various detected &quot;hotspot&quot; clusters, I made note of a number of observations which intrigued me that can also be observed using this website. Many of the woodcut illustrations tended to be rather rough and not very elaborate, yet cluster #9 is dedicated to showcasing instances where the chapbook illustrations <em>were</em> actually quite detailed. The topics of the chapbooks in this cluster seemed to be primarily related to religion or royalty, with a spattering of longer tales of adventure such as that of Sinbad. Related to this, in an interesting turn, cluster #3 was dedicated to the older chapbooks within this collection, dating back to the 18th century or earlier, and the illustrations featured on the pages of these books tended to be more elaborate than those produced in the 19th century, with the exception of those featured in cluster #9.</p>
    
    <div class="imgSets">
      <figure>
      <img src="/paraimgs/clu9.jpg" alt="cluster 9 example"/>
      <figcaption>From cluster #9</figcaption>
      </figure>
      <figure>
      <img src="/paraimgs/clu3.jpg" alt="cluster 3 example"/>
      <figcaption>From cluster #3</figcaption>
      </figure>
    </div>

    <p>Cluster #8 showcased a swathe of chapbooks dedicated to songs, which tended to feature a singular person on the cover. A trend I noted amongst these individuals was the repeat usage of a woodcut depicting the Greek god Hermes, who I&#39;ve never known to have associations with song, but perhaps I don&#39;t know enough about ancient Greek society. Perhaps it is because he resembles an angel in flight? In a similar observation regarding classical influence, in this same cluster, there were chapbooks written about &quot;historical&quot; accounts of famous figures, and in chapbooks that seems to reference tales from more ancient times, the figure on the cover would be shown wearing Roman-style garb, whereas a chapbook related to a more &quot;recent&quot; figure would have a person on the title page wearing more &quot;modern&quot; battle regalia.</p>
    
    <div class="imgSets">
      <figure>
      <img src="/paraimgs/mod.jpg" alt="modern garb"/>
      <figcaption>Regimental Highland dress</figcaption>
      </figure>
      <figure>
      <img src="/paraimgs/rome.jpg" alt="roman garb"/>
      <figcaption>Classical-style attire</figcaption>
      </figure>

    </div>

    <p>To discern more than this from the clusters,  I think I would need to do further microscopic analyses of them and also, frankly, learn much more about the subject chapbooks in Scotland to identify the crucial details I’m likely missing. But already, PixPlot reveals numerous starting points for further inquiry.</p>
    <p>So if PixPlot has such excellent output, why did I create this website? Well, attempting to use PixPlot on my laptop has been an unpleasant experience in the past, but I wanted the output of my work to be observable and useable for anybody who wishes to look. While PixPlot represents my data in a way that is beyond my ability to replicate as an individual, unless you&#39;re on a pretty hearty device the website generated by PixPlot can be incredibly slow, lagging, and thus frustrating to browse in the way that is intended. Presenting PixPlot as an option rather than the sole source of observing my work while it continues to be developed felt like a better choice. Further, beyond PixPlot, I also wanted to be able to browse the illustrations by grouping them according to associated metadata. The VISE software produced by VGG could have been used to do this, as it is an exceptional tool for computational curation, but the current UI that VISE has is quite unintuitive and has little instruction regarding use to make up for this, thus in the spirit of making my work accessible, I chose to create this simple website using <a href="https://svelte.dev/">Svelte</a> with <a href="https://www.routify.dev/">Routify</a> for page routing. While routing logic has and always will be my greatest foe when it comes to web development, this website came together significantly faster than any other website I have built using other frameworks such as React. Fetching data from the <a href="https://docs.datasette.io/en/stable/json_api.html">JSON API provided by Datasette</a>, I quickly produced a simple tool to browse the illustrated pages based on set filters. Clicking through the various different printers and publishers of chapbooks, one of the most significant factors I noticed was the output versus quality of work gap. Certain printers, such as W. Falconer, produced very detailed and refined woodcuts on higher quality paper than most other chapbooks, but in my collection of images, he was the printer of very few. On the flip side, there were printers such as J. Morren, who had printed over 100 illustrations in this collection, but the paper tended to be grainer and the illustrations, rougher.</p>
    
    <div class="imgSets">
      <figure>
      <img src="/paraimgs/falconer.jpg" alt="W Falconer"/>
      <figcaption>W. Falconer</figcaption>
      </figure>
      <figure>
      <img src="/paraimgs/morren.jpg" alt="J Morren"/>
      <figcaption>J. Morren</figcaption>
      </figure>
    </div>

    <p>The amount I was able to draw from the application of basic object detection combined with some simple yet powerful tools to observe the output from both macroscopic and microscopic perspectives astounds me. While each tool I&#39;ve discussed also has its flaws, which I also discussed, the continued development of resources like these making this form of higher-level ML research into something with the goal of being accesible and reproducible for those who don&#39;t consider themselves to be &quot;digital historians&quot; points to a promising future for digital humanities research. If I could make all of these observations about chapbooks as a none specialist, I can only imagine what the output would be if this same task was performed by a specialist in the topic.</p>
    <h3 id="going-further">Going further</h3>
    <p>As a serial monotasker, I would love to build more and add more to this website, but who knows when I&#39;ll have the time to do that. Yet I do want to include this small section about where I would like to go further, if I ever did have the time. One of the absolute highlights of manually reviewing the output of my object detection model was that, occasionally, a small area of writing would get detected. Some of these were evidently old archival notes, but some featured small tasks like calculations or much longer, passive-aggressive notes. I think it would be immensely interesting to train a detection model to identify handwriting in the pages of these chapbooks to find <em>all</em> of these smaller hidden messages. These cheap pieces of literature were a part of daily life for those living in 17th to 19th century Scotland, and the notes quickly scrawled across their pages indicates that the chapbooks were used for more than just reading material-- what intricacies about daily life during that era could be revealed in these notes?</p>
    <div class="imgSets">
      <figure>
        <img src="/paraimgs/writing1.jpg" alt="example annotation"/>
      </figure>
      <figure>
        <img src="/paraimgs/writing2.jpg" alt="example annotation"/>
      </figure>
    </div>

    <p>Further, in relation to metadata, there is a section that notes &quot;related texts&quot; for some of these chapbooks. It would be interesting to map out these relations in some form of knowledge graph, to see if there&#39;s any correlation among printers of these texts or illustration styles featured within.</p>
    <h3 id="bibliography">Bibliography</h3>
    <p>Significant credit must be given to the basis of this project, the VGG&#39;s original work using this data:</p>
    <p>Dutta Abhishek, Bergel Giles, and Zisserman Andrew. 2021. Visual Analysis of Chapbooks Printed in Scotland. In The 6th International Workshop on Historical Document Imaging and Processing (HIP &#39;21), September 5–6, 2021, Lausanne, Switzerland. ACM, New York, NY, USA 6 Pages. <a href="https://doi.org/10.1145/3476887.3476893">https://doi.org/10.1145/3476887.3476893</a></p>

  </div>


</main>
