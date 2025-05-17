<script>
  import "../app.css";

  let { children } = $props();
</script>

<div class="fixed top-10 right-10 space-x-4">
  <a href="/" class="link">Home</a>
  <a href="/hello" class="link">Hello</a>
</div>
{@render children()}
