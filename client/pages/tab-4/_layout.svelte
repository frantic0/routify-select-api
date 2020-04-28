<script>
  import { goto, ready, url } from "@sveltech/routify";

  let movie = [];

  let tutorials = [
		{ id: 1, text: `Default`, href: './', content: `Tab 41`  },
		{ id: 2, text: `Bits`,    href: './tab-2', content: `Tab 42`  },
		{ id: 3, text: `IXI`,     href: './tab-3', content: `Tab 43`  },
		{ id: 4, text: `Maya`,    href: './tab-4', content: `Tab 44` }
	];


  let currentTutorial = tutorials[0]; 

  let handleSelect = e => { 
    let href = e.target.value;
    $goto(href)
  }

  let previous = e => {
  }

  let next = e => {
  }

</script>

Tab 4 content

<br>

<button class="button" on:click={previous}>
  &#9665;
</button>   

<select class="combobox-dark" 
        bind:value={currentTutorial} 
        on:change={ e => handleSelect(e) } 
        >
  {#each tutorials as { id, text, href, content } }
    <option value={ href }>
      {text}
    </option>
  {/each}
</select>   

<button class="button" on:click={next}> 
  &#9655;
</button>

<br>

<slot scoped={ { tutorials } }>

</slot>


<style>


  .button{
    font-size: 1em; 
    font-family: monospace;
  }

</style>