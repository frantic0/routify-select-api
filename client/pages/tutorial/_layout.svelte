<script>
  import { goto, ready, url } from "@sveltech/routify";
  
  import { 
    tutorials,
    currentTutorial 
  } from "../../store/store.js";
  
  let movie = [];

  let handleSelect = e => { 
    console.log("DEBUG:tutorial:_layout:handleSelectAndGoTo")
    $goto(`/tutorial/${$currentTutorial.chapter_dir}/${$currentTutorial.section_dir}/`);
  }

  let previous = e => {
  }

  let next = e => {
  }

</script>

Tutorial content

<br>

<button class="navButton" on:click={previous}>
  &#9665;
</button>   

<select class="combobox-dark" 
        bind:value={$currentTutorial} 
        on:change={ e => handleSelect(e) } 
        >
  <!-- {#each $tutorials as { id, text, chapter_dir, section_dir, href, content } } -->
  {#each $tutorials as tutorial }
    <option value={ tutorial }>
      {tutorial.text}
    </option>
  {/each}
</select>   

<button class="navButton" on:click={next}> 
  &#9655;
</button>

<br>

<slot scoped={ currentTutorial.content }>

</slot>


<style>


  .navButton{
    font-size: 1em; 
    font-family: monospace;
  }

</style>