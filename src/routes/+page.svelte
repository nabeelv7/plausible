<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log(document.referrer); // e.g., "https://google.com"
  });
</script>

<h1>Welcome to SvelteKit</h1>
