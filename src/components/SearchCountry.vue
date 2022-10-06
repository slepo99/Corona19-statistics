<template>
  <form>
    <input :value="modelValue" type="text" @input="searchPost" />
  </form>
</template>

<script>
export default {
  name: "search-country",
  props: {
    modelValue: [String, Number],
  },

  methods: {
    searchPost(event) {
      return this.$emit("update:modelValue", event.target.value);
    },
  },
  mounted() {},
};
</script>

<style></style>
