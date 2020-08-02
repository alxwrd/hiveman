<script>
  import Login from "./components/Login.svelte";

  import App from "./App.svelte";

  import { auth } from "./stores.js";

  let authed = false;
  const unsub = auth.subscribe(value => {
    authed = value.sessionId ? true : false;
  });
</script>

{#if !authed}
  <div
    class="container mx-auto my-16 xl:my-32 flex justify-center items-center">
    <Login />
  </div>
{:else}
  <App />
{/if}
