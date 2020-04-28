<script>
  import { params } from '@sveltech/routify';

  export let showId;
  export let scoped;
  const { currentTutorial } = scoped
  // console.log('params', $params)
  // console.log('showId', showId)
</script>

<p>{showId}</p>

