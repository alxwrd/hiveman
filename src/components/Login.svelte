<script>
  import Field from "./Field.svelte";

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
  <div class="w-full py-6 flex justify-center items-center">
    <img
      class="lg:h-32 md:h-24 h-16"
      src="assests/hive.svg"
      alt="Logo, of a bee hive" />
    <p class="lg:text-5xl md:text-4xl text-2xl px-2 font-bold text-gray-800">
      Hiveman
    </p>
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
