<script>
  import { params } from '@sveltech/routify';
  import {
    selected
  } from '../../../../store/store.js';


  export let showId;
  export let scoped;
  let { content } = scoped
  
  console.log(params)
  console.log($params)
    // console.log('showId', showId)
  console.log(scoped)
</script>

<p>Scoped: { content }</p>
<p>Selected: { JSON.stringify($selected) }</p>
<p>Params: { JSON.stringify($params) }</p>
<p>ShowId: { showId }</p>

