<script>
  import { auth } from "../stores.js";

  import Logo from "./Logo.svelte";

  let authDetails = {};
  let userHash = "";
  const unsub = auth.subscribe(value => {
    authDetails = value;
    userHash = md5(authDetails.username || "");
  });
</script>

{#if authDetails.username}
  <header class="bg-yellow-600 h-16 flex justify-between shadow-md">
    <div class="w-1/4 md:w-1/6 lg:w-1/12" />
    <div class="w-1/2">
      <Logo />
    </div>
    <div
      class="w-1/4 md:w-1/6 lg:w-1/12"
      on:click={() => {
        auth.set({});
      }}>
      <div class="py-4">
        <img
          class="h-8 mx-6 absolute right-0 rounded-full shadow-md
          hover:scale-105 transform transition-transform ease-in-out
          duration-500"
          src="https://www.gravatar.com/avatar/{userHash}?d=identicon"
          alt="User avatar" />
      </div>
    </div>

  </header>
{/if}
