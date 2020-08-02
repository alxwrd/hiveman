<script>
  import * as api from "../api.js";

  import { afterUpdate } from "svelte";

  export let node;

  let on = false;
  let powerButton;

  afterUpdate(() => {
    on = node.attributes.state.displayValue === "ON" ? true : false;

    if (on) {
      powerButton.firstChild.classList.add("text-yellow-500");
      powerButton.firstChild.classList.remove("text-gray-500");
    } else {
      powerButton.firstChild.classList.remove("text-yellow-500");
      powerButton.firstChild.classList.add("text-gray-500");
    }

    powerButton.classList.toggle(on ? "shadow-inner" : null);
  });

  function togglePower() {
    let resp = on ? api.turnOff(node.id) : api.turnOn(node.id);
    resp.then(data => node = data)
  }
</script>

<div id={node.id} class="w-64 h-48 m-4 p-4 mx-auto rounded border shadow">
  <div class="">
    <div class="relative">
      <button
        bind:this={powerButton}
        on:click={togglePower}
        class="rounded-lg right-0 top-0 absolute w-10 h-10 border appearance-none">
        <i class="fas fa-power-off text-gray-500" />
      </button>
    </div>
    <p class="text-lg py-2 font-medium font-bold text-gray-800">{node.name}</p>
    <p class="text-gray-500">{node.attributes.state.displayValue}</p>
  </div>
</div>
