<script>
  import { goto, ready, url } from "@sveltech/routify";


  let movie = [];

  let tutorials = [
		{ id: 1, text: `Default`, href: '/tutorial/01-introduction/01-basics/', content: `Tab 41`  },
		{ id: 2, text: `Bits`,    href: '/tutorial/01-introduction/02-layout/', content: `Tab 42`  },
		{ id: 3, text: `IXI`,     href: '/tutorial/02-languages/02-language-2/', content: `Tab 43`  },
		{ id: 4, text: `Maya`,    href: '/tutorial/03-integration/03-model-2/', content: `Tab 44` }
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

Tutorial content

<br>

<button class="navButton" on:click={previous}>
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

<button class="navButton" on:click={next}> 
  &#9655;
</button>

<br>

<slot scoped={ { tutorials } }>

</slot>


<style>


  .navButton{
    font-size: 1em; 
    font-family: monospace;
  }

</style>