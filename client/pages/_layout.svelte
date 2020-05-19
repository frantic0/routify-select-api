<script context="module">
	export async function preload() {
		// '/' absolute URL
		return await fetch(`/tutorial/tutorial.json`)
                  .then(r => r.json());
	}
</script>

<script>
  import { url, params, ready } from "@sveltech/routify";
  import { tick, onMount, onDestroy } from 'svelte';

  import { 
    tutorials,
    selected 
  } from "../store/store.js";

  // $tutorials = await preload();

  // $currentTutorial = $tutorials[1];

  
  $: load();

  let load = () => {
		// '/' absolute URL
		fetch(`/tutorial/tutorial.json`)
      .then(r => r.json())
      .then(json => {
        $tutorials = json;
        $selected = $tutorials[1];
        console.log('fetch');
        console.log($selected);
        $ready();
      });
	}

  $: defaults = { chapter: $selected.chapter_dir, section: $selected.section_dir};

  // let defaults = { chapter: '01-introduction', section: '01-basics' }

  // const unsubscribe = params.subscribe( value => {
  //   console.log(`DEBUG:_layout:params`)
  //   console.log(JSON.stringify($params));
	// });
  // onDestroy(unsubscribe);



</script>


<style>
  ul#horizontal-list {
    list-style: none;
	}
	ul#horizontal-list li {
		display: inline;
	}
</style>

<ul id="horizontal-list"> 
  <li><a href="/">Tab 1</a></li>
  <li><a href="/tab-2/">Tab 2</a></li>
  <li><a href="/tab-3/">Tab 3</a></li>
  
  <li><a href="/tutorial/{$selected.chapter_dir}/{$selected.section_dir}/">Tutorial</a></li>

  <!-- <li><a href={ $url('/tutorial/:chapter/:section/', { ...defaults, ...$params } ) }>Tutorial</a></li> -->

</ul>

<slot />

