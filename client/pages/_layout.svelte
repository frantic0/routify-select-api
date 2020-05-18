<script>
  import { url, params } from "@sveltech/routify";
  import { tick, onMount, onDestroy } from 'svelte';

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

