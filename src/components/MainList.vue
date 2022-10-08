<template>
  <div>
    <SearchCountry v-model="text" />

    <div
      class="ml-16 mr-24 bg-sky-600 border-none rounded-lg flex justify-around items-center place-self-center h-12 shadow-3xl"
    >
      <div class="flex place-self-center items-center justify-start flex-auto">
        <div class="ml-6 w-12">
          <p class="text-white">№</p>
        </div>
        <hr class="w-px h-12 bg-white" />
        <div class="ml-12">
          <p class="text-white font-roboto">Country</p>
        </div>
      </div>
      <hr class="w-px h-12 bg-white mr-6" />
      <div class="mr-24 w-40">
        <p class="text-white align-text-center">Total Confirmed</p>
      </div>
    </div>

    <div class="ml-16 mr-24">
      <ul>
        <li
          v-for="(item, index) in searchPost()"
          :key="item.id"
          @click="getModalData(item)"
          class="flex border-none rounded-lg justify-between items-center place-self-center h-12 shadow-3xl cursor-pointer"
        >
          <div
            class="flex place-self-center items-center justify-start flex-auto"
          >
            <div class="ml-6 w-12 font-bold">
              {{ index + 1 }}
            </div>
            <hr class="w-px h-12 bg-light-gray mr-6" />
            <div class="ml-12">
              <h2 class="font-serif font-bold">{{ item.Country }}</h2>
            </div>
          </div>
          <hr class="w-px h-12 bg-light-gray mr-6" />
          <div class="mr-24 w-40">
            <p class="align-text-center font-bold">{{localeNumber(item.TotalConfirmed) }}</p>
          </div>
        </li>
      </ul>
    </div>

    <DialogWindow :modalData="modalData" :show="show" @hideModal="hideModal" />
  </div>
</template>

<script>
import axios from "axios";
import SearchCountry from "./SearchCountry.vue";
import DialogWindow from "./DialogWindow.vue";

export default {
  name: "country-list",
  components: { SearchCountry, DialogWindow },

  data() {
    return {
      data: [],
      text: "",
      modalData: [],
      show: false,
    };
  },

  methods: {
    async getCountries() {
      try {
        const response = await axios.get("https://api.covid19api.com/summary");
        this.data = response.data.Countries;
        console.log(response.data);
      } catch (e) {
        alert("error");
      }
    },
    searchPost() {
      return this.data.filter((item) =>
        item.Country.toLowerCase().includes(this.text.toLowerCase())
      );
    },

    getModalData(val) {
      this.modalData.push(val);
      this.show = true;
    },
    hideModal() {
      this.show = false;
      this.modalData = [];
      this.text = "";
    },
    localeNumber(item) {
      return item.toLocaleString()
    }
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style></style>
