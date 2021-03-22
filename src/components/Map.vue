<template>
  <div class="map--wrapper">
    <button
      id="search-btn"
      type="button"
      class="btn btn-primary btn-adjusted"
      @click="drawLine"
    >
      Tìm Kiếm
    </button>
    <button
      id="zoom-btn"
      type="button"
      class="btn btn-primary btn-zoom-adjusted"
      @click="zoomFunction"
    >
      Phóng to
    </button>
    <div id="map" class="map">
      <canvas
        class="myCanvas"
        id="myCanvas"
        :width="widthCanvas"
        :height="heightCanvas"
        style="width: 100%; height: 100%"
        @click="canvasClick"
      ></canvas>
      <!-- <span id="dot1" class="dot1"></span>
            <span id="dot2" class="dot2"></span> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Map",
  data() {
    return {
      data: [],
      isZoom: false,
      widthCanvas:0,
      heightCanvas:0
    };
  },
  created() {
    this.widthCanvas = 0.8 * window.innerWidth;
    this.heightCanvas = window.innerHeight;
  },
  methods: {
    zoomFunction() {
      $(function () {
        this.isZoom = !this.isZoom;
        if (this.isZoom) {
          $("#zoom-btn").text("Trở về");
          $("#map")
            .on("mouseover", function () {
              $("#map").css({
                transform: "scale(" + 1.6 + ")",
              });
            })
            .on("mouseout", function () {
              $("#map").css({
                transform: "scale(1)",
              });
            })
            .on("mousemove", function (e) {
              $("#map").css({
                "transform-origin":
                  (((e.pageX - $(this).offset().left) * (1.6 - 1)) /
                    $(this).width()) *
                    100 +
                  "% " +
                  (((e.pageY - $(this).offset().top) * (1.6 - 1)) /
                    $(this).height()) *
                    100 +
                  "%",
              });
            });
        } else {
          $("#zoom-btn").text("Phóng to");
          $("#map")
            .on("mouseover", function () {
              $("#map").css({
                transform: "scale(" + 1 + ")",
              });
            })
            .on("mouseout", function () {
              $("#map").css({
                transform: "scale(1)",
              });
            })
            .on("mousemove", function () {
              $("#map").css({
                "transform-origin": "100%",
              });
            });
        }
      });
    },
    drawLine() {
      $(function () {
        var data = JSON.parse(sessionStorage.getItem("dataNodes")); //sessionStorage.getItem("dataNodes");
        for (var i = 0; i < data.length - 1; i++) {
          var canvas = document.getElementById("myCanvas");
          // Chọn đối tượng vẽ 2D
          var rect = canvas.getBoundingClientRect();
          var context = canvas.getContext("2d");
          context.setLineDash([5, 3]);
          context.lineWidth = 3;
          context.strokeStyle = "yellow";
          context.beginPath(); // Khai báo vẽ đường thẳng mới
          // context.moveTo(0, 0); // Điểm bắt đầu
          // context.lineTo(0, rect.height); // Điểm kết thúc
          // context.moveTo(0.975 * data[0].x, 1.16 * data[0].y); // Điểm bắt đầu
          // context.lineTo(0.975 * data[1].x, 1.16 * data[1].y); // Điểm kết thúc
          // context.moveTo(data[i].x * 0.968, data[i].y * 1.15); // Điểm bắt đầu
          // context.lineTo(data[i + 1].x * 0.965, data[i + 1].y * 1.15); // Điểm kết thúc
          // alert(data[i].x * rect.width / 100);
          context.moveTo(
            (data[i].x * rect.width) / 100,
            (data[i].y * rect.height) / 100
          ); // Điểm bắt đầu
          context.lineTo(
            (data[i + 1].x * rect.width) / 100,
            (data[i + 1].y * rect.height) / 100
          ); // Điểm kết thúc
          context.stroke(); // Tiến hành vẽ

          // $('span').offset(function(index, coordinates) {
          //     if (index == 0) { //Chỉ tác động lên thành phần đầu tiên
          //         var x = coordinates.left - rect.left //+ 15 + 15;
          //         var y = coordinates.top - rect.top //+ 15 + 15 / 4;
          //         context.beginPath(); // Khai báo vẽ đường thẳng mới
          //         context.moveTo(x, y); // Điểm bắt đầu
          //     }
          //     if (index == 1) {
          //         var x = coordinates.left - rect.left //+ 15 + 15;
          //         var y = coordinates.top - rect.top //+ 15 + 15 / 4;
          //         context.lineTo(x, y); // Điểm kết thúc
          //         context.stroke(); // Tiến hành vẽ
          //     }
          //     return $(this).offset(coordinates);
          //     // Tiến hành vẽ
        }
      });
      //     })
      // });
    },
    writeMessage(canvas, message) {
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "18pt Calibri";
      context.fillStyle = "black";
      context.fillText(message, 10, 25);
    },

    getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    },
    canvasClick(event) {
      var canvas = document.getElementById("myCanvas");
      var rect = canvas.getBoundingClientRect();
      var mousePos = this.getMousePos(canvas, event);
      var top = ((mousePos.y - 15 / 2) / rect.height) * 100;
      var left = ((mousePos.x - 15 / 2) / rect.width) * 100;
      var message = "Node position| Top: " + top + "%, Left: " + left + "%";
      this.data.push({
        y: (mousePos.y / rect.height) * 100, //mousePos.x,
        x: (mousePos.x / rect.width) * 100, //mousePos.y
      });
      sessionStorage.setItem("dataNodes", JSON.stringify(this.data));
      // alert(this.data[0].x);
      var phantuchon = $(".map");
      phantuchon.append(
        '<span id="dot" class="dot" style="top:' +
          top +
          "%;left:" +
          left +
          '%"></span>'
      );
      // var them_vao_day = document.getElementById("map")
      // var span = document.createElement("span");
      // span.innerHTML = '<span id="dot" class="dot" style="top:' + top + '%;left:' + left + '%"></span>'
      // them_vao_day.appendChild(span)
      this.writeMessage(canvas, message);
    },
  },
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