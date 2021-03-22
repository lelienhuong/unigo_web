<template>
  <div class="sidebar--wrapper">
    <div class="category--wrapper">
      <div
        v-for="(cateInfo, index) in CateData.data"
        :index="index"
        :key="cateInfo.cate"
        @click="pushRouterLink(cateInfo.pathCate, name, index)"
        class="category__item--container"
      >
        <img
          :style="isSelect == index + 1 ? selectedColorImg : defaultColorImg"
          src="../assets/img/nhaxe.png"
          style="margin-right: 5px"
          width="20px"
          height="20px"
        />
        <p :style="isSelect == index + 1 ? selectedColor : defaultColor">
          {{ cateInfo.cate }}
        </p>
      </div>
    </div>
    <Map></Map>
  </div>
</template>

<script>
import Map from "./Map.vue";

export default {
  name: "SideBar",
  components: { Map },
  data() {
    return {
      isSelect: "1",
      selectedColor: "color: #0B66BF",
      defaultColor: "color:black",
      selectedColorImg:
        "filter: invert(27%) sepia(47%) saturate(2983%) hue-rotate(194deg) brightness(94%) contrast(92%);",
      defaultColorImg: "",
    };
  },
  props: {
    CateData: Object,
    name: String,
  },
  created() {

    if (
      this.name == "Feature"
       && sessionStorage.length == 0
    ) {
      sessionStorage.setItem("isSelectSideBar", "1");
      sessionStorage.setItem("isSelectSector", "1");
      this.isSelect = sessionStorage.getItem("isSelectSideBar");
    }
    if (
      this.name == "Feature" &&
      sessionStorage.getItem("isSelectSideBar") != "1"
    ) {
      this.isSelect = sessionStorage.getItem("isSelectSideBar");
    }
    if (
      this.name == "Sector" &&
      sessionStorage.getItem("isSelectSector") != "1"
    ) {
      this.isSelect = sessionStorage.getItem("isSelectSector");
    }
  },
  methods: {
    pushRouterLink(cate, name, index) {
      if (this.name == "Feature") {
        sessionStorage.setItem("isSelectSideBar", index + 1);
      }
      if (this.name == "Sector") {
        sessionStorage.setItem("isSelectSector", index + 1);
      }
      // // sessionStorage.setItem("isSelectSideBar", index + 1);
      // alert(sessionStorage.getItem("isSelectSideBar"));
      //  this.isSelect = index + 1;
      if (name == "Feature") {
        this.$router.push({ name: name, params: { cate: cate } });
      }
      if (name == "Sector") {
        var partURL = cate.split("/");
        this.$router.push({
          name: name,
          params: {
            cate: partURL[0],
            feature: partURL[1],
            featureInfo: this.CateData,
            fullPath: cate,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.sidebar--wrapper {
  display: flex;
}
.category--wrapper {
  width: 20%;
  height: auto;
  font-weight: 500;
  /* color: black; */
  /* background-color: #0B66BF; */
  border-right: 1px solid blue;
}
.category__item--container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
}
.category__item--container:hover {
  background-color: rgb(52, 154, 255);
}
</style>