<script>
  import { url, params } from "@sveltech/routify";
  import { tick, onMount, onDestroy } from 'svelte';

  import { 
    tutorials,
    currentTutorial 
  } from "../store/store.js";


  $currentTutorial =	{
		id: 2,
		text: `Bits`,
    chapter_dir: "01-introduction",
    section_dir: "02-layout",
		href: "/tutorial/01-introduction/02-layout/",
		content: `Tab 42`,
	};


  // $: defaults = { chapter: $currentTutorial.chapter_dir, section: $currentTutorial.section_dir};

  let defaults = { chapter: '01-introduction', section: '01-basics' }

  const unsubscribe = params.subscribe( value => {
    console.log(`DEBUG:_layout:params`)
    console.log(JSON.stringify($params));
	});
  onDestroy(unsubscribe);

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
  <li><a href="/tab-2">Tab 2</a></li>
  <li><a href="/tab-3">Tab 3</a></li>
  <li><a href={ $url('/tutorial/:chapter/:section/', { ...defaults, ...$params } )}>Tutorial</a></li>
  <!-- <li><a href="/tutorial/">Tutorial</a></li> -->
</ul>

<slot />

