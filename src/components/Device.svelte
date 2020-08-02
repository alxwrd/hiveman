<script>
  import * as api from "../api.js";

  export let node;

  function turnOn() {
    api.turnOn(node.id);
  }

  function turnOff() {
    api.turnOff(node.id);
  }
</script>

<div id={node.id} class="w-64 h-64 md:w-64 m-4 p-4 mx-auto bg-yellow-100 rounded shadow">
  <div class="">
    <p class="text-lg pb-2 font-medium">{node.name}</p>
    <button
      class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4
      rounded"
      on:click={turnOn}>
      ON
    </button>
    <button
      class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4
      rounded"
      on:click={turnOff}>
      OFF
    </button>
  </div>
</div>
