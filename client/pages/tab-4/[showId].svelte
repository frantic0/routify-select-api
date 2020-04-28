<script>
  import { params } from '@sveltech/routify';

  export let showId;
  export let scoped;
  let { currentTutorial } = scoped
  console.log($params)
  // console.log('showId', showId)
  console.log(scoped)
</script>

<p>Scoped: { currentTutorial }</p>
<p>Params: { $params }</p>
<p>ShowId: { showId }</p>

