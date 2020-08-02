<script>
  import Header from "./components/Header.svelte";
  import Device from "./components/Device.svelte";

  import * as api from "./api.js";

  window.api = api;

  let nodes = [];
  api.nodes().then(data => {
    nodes = data;
  });

</script>

<Header />

<div class="flex flex-wrap">
{#each nodes as node}
  <Device node={node} />
{/each}
</div>
