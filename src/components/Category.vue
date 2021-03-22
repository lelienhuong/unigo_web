<template>
<div>
  <SideBar :CateData="CateData" :name="name"></SideBar>
</div>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
  name: "Category",
  components: { SideBar },
  data() {
    return {
      name: "Feature",
      CateData: {
        data:[{
          cate: "Tra cứu map",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "tra-cuu-map",
        },
        {
          cate: "Dẫn đường",
          pathIcon: "/img/direct.png",
          pathCate: "dan-duong",
        },
        {
          cate: "Tra cứu thông tin học phần",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "hoc-phan",
        },
        {
          cate: "Tra cứu thông tin sự kiện",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "su-kien",
        },
        {
          cate: "Hướng dẫn sử dụng",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "huong-dan",
        },
        {
          cate: "Về chúng tôi",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "chung-toi",
        },
        {
          cate: "Góp ý",
          pathIcon: "/img/Vector.70e926dd.svg",
          pathCate: "gop-y",
        },
        ]
      },
    };
  },

  //   methods: {
  //     pushRouterLink(cate) {
  //       this.$router.push({ name: "Feature", params: { cate: cate } });
  //     }
  //   }
};
</script>

<style scoped>
/* .category--wrapper {
  width: 16%;
  height: auto;
}
.category__item--container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  border-right: 1px solid blue;
}
.category__item--container:hover {
  background-color: rgb(52, 154, 255);
} */
</style>