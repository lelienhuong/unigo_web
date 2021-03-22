<template>
  <div class="map--wrapper">
    <button id="search-btn" type="button" class="btn btn-primary btn-adjusted">
      Tìm Kiếm
    </button>
    <button
      id="zoom-btn"
      type="button"
      class="btn btn-primary btn-zoom-adjusted"
    >
      Phóng to
    </button>
    <div id="map" class="map">
      <canvas
        class="myCanvas"
        id="myCanvas"
        width="800"
        height="800"
        style="width: 100%; height: 100%"
      ></canvas>
      <!-- <span id="dot1" class="dot1"></span>
            <span id="dot2" class="dot2"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
};
</script>

<style>
.map--wrapper {
  width: 80%;
  height: auto;
  background-color: red;
  position: relative;
}
.map {
  background-image: url(../assets/img/map_newest.svg);
  width: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  margin: auto;
  position: relative;
  background-color: #fffde7;
}

.dot {
  position: absolute;
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.dot1 {
  position: absolute;
  top: 35%;
  left: 38%;
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.dot2 {
  position: absolute;
  top: 23%;
  left: 56%;
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.btn-adjusted {
  position: absolute;
  top: 0;
  right: 18%;
  z-index: 1;
  width: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  height: auto;
  text-align: center;
}

.btn-zoom-adjusted {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 25%;
  width: 6vw;
  height: auto;
  z-index: 1;
  font-size: 1em;
  text-align: center;
}
</style>