<script>
  import { goto, ready, url } from "@sveltech/routify";
  
  import { 
    tutorials,
    currentTutorial 
  } from "../../store/store.js";
  
  let movie = [];

  let handleSelect = e => { 
    let href = e.target.value;
    console.log("before goto")
    console.log(href)
    $goto(href)
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
  {#each $tutorials as { id, text, href, content } }
    <option value={ href }>
      {text}
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