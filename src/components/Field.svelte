<script>
  export let label;
  export let placeholder = label;
  export let type = "text";
  export let value = "";

  let dirty = false;

  const onBlur = () => {
    dirty = true;
  };

  const handleInput = event => {
    value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
  };
</script>

<div class="mb-4">
  <label class="font-bold text-gray-700 block mb-2">{label}</label>
  <input
    {type}
    {value}
    class="block appearance-none w-full bg-white border border-gray-400
    hover:border-gray-600 px-2 py-2 rounded shadow outline-none {value === '' && dirty ? 'border-red-400' : 'border-gray-400'}"
    {placeholder}
    on:blur={onBlur}
    on:input={handleInput}
    on:change={handleInput} />
</div>
