<script>
  import Login from "./components/Login.svelte";

  import { token } from "./stores.js";

  let authed = false;
  const unsub = token.subscribe(value => {
    authed = value ? true : false;
  });
</script>

{#if !authed}
  <div
    class="container mx-auto my-16 xl:my-32 flex justify-center items-center">
    <Login />
  </div>
{/if}
