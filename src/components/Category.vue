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
          pathIcon: require('../assets/img/nhaxe.png'),
          pathCate: "tra-cuu-map",
        },
        {
          cate: "Dẫn đường",
          pathIcon: require('../assets/img/direct.png'),
          pathCate: "dan-duong",
        },
        {
          cate: "Tra cứu thông tin học phần",
          pathIcon: require('../assets/img/subject.png'),
          pathCate: "hoc-phan",
        },
        {
          cate: "Tra cứu thông tin sự kiện",
          pathIcon: require('../assets/img/event.png'),
          pathCate: "su-kien",
        },
        {
          cate: "Hướng dẫn sử dụng",
          pathIcon: require('../assets/img/instruction.png'),
          pathCate: "huong-dan",
        },
        {
          cate: "Về chúng tôi",
          pathIcon: require('../assets/img/aboutus.png'),
          pathCate: "chung-toi",
        },
        {
          cate: "Góp ý",
          pathIcon: require('../assets/img/advice.png'),
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