<script>
  import { goto, ready, url } from "@sveltech/routify";

  let movie = [];

  let tutorials = [
		{ id: 1, text: `Default`, href: './', content: `Tab 11`  },
		{ id: 2, text: `Bits`,    href: './tab-2', content: `Tab 12`  },
		{ id: 3, text: `IXI`,     href: './tab-3', content: `Tab 13`  },
		{ id: 4, text: `Maya`,    href: './tab-4', content: `Tab 14` }
	];

  let counter = 0; 

  let currentTutorial = tutorials[0]; 

  let handleSelect = e => { 
    let href = e.target.value;
    $goto(href)
  }

  let previous = e => {

    // if(){

    // }
  }

  let next = e => {

    
  }

</script>

Tab 4 content

<br>

<button class="button-dark" on:click={previous}>
 <span style='font-size: 1em; font-family:Comic Sans MS;'>
    &#9665;
  </span>

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

<button class="button-dark" on:click={next}> 
 <span style='font-size: 1em; font-family:Comic Sans MS;'>
    &#9655;
  </span>
</button>

<br>

<slot scoped={ {currentTutorial} }>
</slot>


