<template>
  <div class="flex justify-around mt-16 items-center place-self-center">
<div class="flex  place-self-center items-center justify-start flex-auto ml-12">
    <div>
      <img src="@/icons/logologo.png" alt="" class=" w-24 h-24" />
    </div>
    <div class="">
      <h1 class=" h-16 font-roboto font-bold text-5xl flex items-center ">
        STATISTIC
      </h1>
    </div>
  </div>
    <div>
      <input
        :value="modelValue"
        type="text"
        @input="searchPost"
        class="shadow-3xl border-none rounded-lg mr-24 hover:border-none"
        placeholder="Search..."
      />
    </div>
  </div>
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
