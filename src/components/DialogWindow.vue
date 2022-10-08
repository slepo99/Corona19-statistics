<template>
  <div class="dialog" v-if="show" >
    <div
      @click.stop
      class="dialog-content"
      v-for="(data, id) in modalData"
      :key="id"
    >
    <div>
      <p class="font-sans not-italic font-bold text-2xl text-black">{{data.Country}}</p>
    </div>
      <div>
      <div class="flex justify-between mt-5 items-center">
        <div class="flex justify-start">
        <img src="@/icons/VectorConfirmed.png" alt="confirmed logo" class="h-4 w-4 mr-4">
        <p class="font-sans not-italic font-normal text-sm text-light-gray mr-24">Total Confirmed </p> 
      </div>
        <p class="font-sans not-italic font-normal text-sm text-light-gray">{{ data.TotalConfirmed }}</p>
      </div>

      <div class="flex justify-between mt-5 items-center">
        <div class="flex justify-start">
        <img src="@/icons/VectorDeaths.png" alt="confirmed logo" class="h-4 w-4 mr-4">
        <p class="font-sans not-italic font-normal text-sm text-light-gray mr-24">Total Deaths</p>
      </div>
         <p class="font-sans not-italic font-normal text-sm text-light-gray">{{ data.TotalDeaths }}</p>
      </div>

      <div class="flex justify-between mt-5 items-center">
        <div class="flex justify-start">
        <img src="@/icons/VectorRecovered.png" alt="confirmed logo" class="h-4 w-4 mr-4">
        <p class="font-sans not-italic font-normal text-sm text-light-gray mr-24">New Confirmed </p>
      </div>
        <p class="font-sans not-italic font-normal text-sm text-light-gray">{{ data.NewConfirmed }}</p>
      </div>

    </div>
      <button @click="hideModal" class="w-24 h-8 bg-sky-600 border-none rounded-lg shadow-4xl mt-6"> 
        <p class="text-white align-text-center font-sans not-italic text-xs ">OK</p> 
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog-window",
  props: {
    modalData: {
      type: [Object, Array],
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 200px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
</style>
