<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div
      @click.stop
      class="dialog-content"
      v-for="(data, id) in modalData"
      :key="id"
    >
      <p>CountryCode: {{ data.CountryCode }}</p>
      <p>TotalConfirmed: {{ data.TotalConfirmed }}</p>
      <p>Total Deaths: {{ data.TotalDeaths }}</p>
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

<style>
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
