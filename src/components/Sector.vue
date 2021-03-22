<template>
<div class="sector--container">
  <div class="sector--wrapper">
    <div>{{ sectorName }}</div>
    <div
      class="sector__item--wrapper"
      v-for="(sectorItem, key) in sector"
      :key="key"
      @click="chooseSector(sectorItem.pathSector)"
    >
      {{ sectorItem.sector }}
    </div>
  </div>
  <Map></Map>
  </div>
</template>

<script>
import Map from "./Map.vue"

export default {
  components: { Map },
  name: "Sector",
  props: {
    FeatureInfo: Object,
  },
  data() {
    return {
      sectorName: "",
      sector: [],
      sectorData: [
        {
          sectorSelected: "Khu giảng đường",
          path: "giang-duong",
          sectorInfo: [
            {
              sector: "Khu A",
              pathSector: "khu-A",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu B",
              pathSector: "khu-B",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu C",
              pathSector: "khu-C",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu D",
              pathSector: "khu-D",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu E",
              pathSector: "khu-E",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu F",
              pathSector: "khu-F",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu G",
              pathSector: "khu-G",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu H",
              pathSector: "khu-H",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "khu S - Smart Building",
              pathSector: "khu-S",
              sectorDetail: [
                { floor: "Tầng 1", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 2", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 3", room: ["A124", "A133A", "A133B"] },
                { floor: "Tầng 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    chooseSector(path) {
      this.$router.push({
        name: "Room",
        params: {
          cate: "tra-cuu-map",
          feature: this.$route.params.feature,
          sector: path,
        },
      });
      //   var partURL = cate.split("/");
      //   this.$router.push({
      //     name: name,
      //     params: {
      //       cate: partURL[0],
      //       feature: partURL[1],
      //       featureInfo: this.CateData,
      //       fullPath: cate,
      //     },
      //   });
    },
  },
  created() {
    // this.$route.params.featureInfo.forEach((value) => {
    //     if(this.$route.params.feature == value.pathCate){
    //         this.sectorName = value.cate;
    //     }
    // });
    this.sectorData.forEach((value) => {
      if (this.$route.params.feature == value.path) {
        this.sectorName = value.sectorSelected;
        this.sector = value.sectorInfo;
      }
      // if(value.sectorSelected == this.sectorName){
      //     this.sector = value.sectorInfo
      // }
    });
  },
  // data() {
  //     return {
  //         fullNameFeature:[{path:"giang",fullName:""}]
  //     }
  // },
};
</script>

<style scoped>
.sector--container{
  display: flex;
}
.sector--wrapper {
  width: 20%;
  height: auto;
  border-right: 1px solid blue;
}
.sector__item--wrapper {
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.sector__item--wrapper:hover {
  background-color: rgb(52, 154, 255);
  cursor: pointer;
}
</style>