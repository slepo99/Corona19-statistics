<template>
  <div>
    <SearchCountry v-model="text" />
    <div>
      <ul class="posts">
        <li
          class="posts-list"
          v-for="item in searchPost()"
          :key="item.id"
          @click="getModalData(item)"
        >
          <div>
            <h2>{{ item.Country }}</h2>
          </div>
        </li>
      </ul>
    </div>
    <DialogWindow :modalData="modalData" :show="show" @hideModal="hideModal" />
  </div>
</template>

<script>
import SearchCountry from "./SearchCountry.vue";
import axios from "axios";
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
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style>
body {
  background: url(/src/icons/world.svg) fixed no-repeat;
  background-position-y: 40px;
  background-position-x: -120px;
  background-size: 115%;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
}

.posts-list {
  border: 1px solid teal;
  border-radius: 12px;
  width: 25%;
  text-align: center;
  list-style-type: none;
  margin: 30px;
  align-items: center;
  padding: 0;
}
</style>
