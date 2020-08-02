<script>
  import Field from "./Field.svelte";
  import Logo from "./Logo.svelte";

  import * as api from "../api.js";

  let username;
  let password;

  function login() {
    if (!username || !password) {
      console.error("No login data supplied");
      return;
    }
    api.login(username, password);
  }
</script>

<div class="w-10/12 lg:w-8/12 xl:w-5/12">
  <div class="h-16 sm:h-24 md:h-32 my-4">
    <Logo />
  </div>
  <div
    class="border-yellow-600 p-8 border-t-8 bg-white mb-6 rounded-lg shadow-lg">
    <form on:submit|preventDefault={login}>
      <Field label="Username" bind:value={username} />
      <Field label="Password" type="password" bind:value={password} />

      <div class="flex items-center justify-between">
        <button
          class="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2
          px-4 rounded">
          Login
        </button>
      </div>
    </form>
  </div>
</div>
