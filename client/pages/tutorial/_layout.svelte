<script>
  import { goto, ready, url } from "@sveltech/routify";
  
  import { 
    tutorials,
    selected 
  } from "../../store/store.js";
  
  let movie = [];

  let handleSelect = e => { 
    console.log("DEBUG:tutorial:_layout:handleSelectAndGoTo")
    $goto(`/tutorial/${$selected.chapter_dir}/${$selected.section_dir}/`);
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
                bind:value={ $selected } 
                on:change={ e => handleSelect(e) } 
                >
          {#if $tutorials !== undefined} 
            {#each $tutorials as chapter, i}                	
              <optgroup label="{i + 1}. {chapter.title}">
                {#if chapter.sections !== undefined}
                  {#each chapter.sections as section, i}
                    <!-- <option value={section}>{String.fromCharCode(i + 97)}. {section.title}</option> -->
                    <option value={section}>{section.title}</option>
                  {/each}
                {/if}  
              </optgroup>
            {/each}
          {/if}
        </select> 

<button class="navButton" on:click={next}> 
  &#9655;
</button>

<br>

<slot scoped={ selected.content }>

</slot>


<style>


  .navButton{
    font-size: 1em; 
    font-family: monospace;
  }

</style>