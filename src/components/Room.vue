<template>
<div class="room--container">
  <div class="room--wrapper">
    <div>Khu {{ sectorName }}</div>
    <div class="room__floor--wrapper">
      <div
        class="floor--wrapper"
        v-for="(floor, key) in floorData"
        :key="key"
        @click="selectedFloor(key)"
        :class="isSelect == key + 1 ? selectedColor : defaultColor"
        :style="key == floorData.length - 1 ? border1 : border2"
      >
        Tầng {{ floor }}
      </div>
    </div>
    <div v-for="(room, key) in selectedroomData" :key="key">
      {{ room }}
    </div>
  </div>
  <Map></Map>
</div>
</template>

<script>
import Map from "./Map.vue";

export default {
  components: { Map },
  name: "Room",
  data() {
    return {
      border1: "border-right: 0",
      border2: "border-right: 1px solid white; ",
      defaultColor: "floor--color",
      selectedColor: "floor--color2",
      isSelect: "1",
      sectorName: "",
      roomData: [],
      selectedroomData: [],
      floorData: [],
      sectorData: [
        {
          sectorSelected: "Khu giảng đường",
          path: "giang-duong",
          sectorInfo: [
            {
              sector: "A",
              pathSector: "khu-A",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A224", "A233A", "A233B"] },
                { floor: " 3", room: ["A324", "A333A", "A333B"] },
                { floor: " 4", room: ["A424", "A433A", "A433B"] },
              ],
            },
            {
              sector: "B",
              pathSector: "khu-B",
              sectorDetail: [
                { floor: " 1", room: ["B124", "B133", "B133"] },
                { floor: " 2", room: ["B224", "B233", "B233"] },
                { floor: " 3", room: ["B324", "B333A", "B333"] },
                { floor: " 4", room: ["B424", "B433A", "B433"] },
              ],
            },
            {
              sector: "C",
              pathSector: "khu-C",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "D",
              pathSector: "khu-D",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "E",
              pathSector: "khu-E",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "F",
              pathSector: "khu-F",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "G",
              pathSector: "khu-G",
              sectorDetail: [
                { floor: " 1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "H",
              pathSector: "khu-H",
              sectorDetail: [
                { floor: "1", room: ["A124", "A133A", "A133B"] },
                { floor: " 2", room: ["A124", "A133A", "A133B"] },
                { floor: " 3", room: ["A124", "A133A", "A133B"] },
                { floor: " 4", room: ["A124", "A133A", "A133B"] },
              ],
            },
            {
              sector: "S - Smart Building",
              pathSector: "khu-S",
              sectorDetail: [
                { floor: "1", room: ["A124", "A133A", "A133B"] },
                { floor: "2", room: ["A124", "A133A", "A133B"] },
                { floor: "3", room: ["A124", "A133A", "A133B"] },
                { floor: "4", room: ["A124", "A133A", "A133B"] },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {
    this.sectorData.forEach((value) => {
      if (this.$route.params.feature == value.path) {
        value.sectorInfo.forEach((value) => {
          if (value.pathSector == this.$route.params.sector) {
            // this.floorData.push(value.sectorDetail);
            this.sectorName = value.sector;
            this.roomData = value.sectorDetail;
            this.selectedroomData = value.sectorDetail[0].room;
          }
        });
      }
    });
    this.roomData.forEach((value) => {
      this.floorData.push(value.floor);
      //   alert(value.floor);
    });
  },
  methods: {
    selectedFloor(index) {
      this.isSelect = index + 1;
      this.selectedroomData = this.roomData[index].room;
    },
  },
};
</script>

<style scoped>
.room--container{
  display: flex;
}
.floor--color {
  color: white;
}
.floor--color2 {
  color: orange;
}
.room--wrapper {
  width: 20%;
  height: auto;
  background-color: blue;
  border-right: 1px solid blue;
  color: white;
}
.room__floor--wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.floor--wrapper {
  justify-content: space-between;
  cursor: pointer;
  width: 20%;
}
</style>