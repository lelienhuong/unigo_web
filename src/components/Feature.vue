<template>
  <SideBar :CateData="Feature" :name="name"></SideBar>
</template>

<script>
import SideBar from './SideBar.vue';
export default {
  components: { SideBar },
  name: "Feature",
  data() {
    return {
      name:"Sector",
      FeatureData: {
      data:[
        {
          cate: "tra-cuu-map",
          features: {
          data:[
            { cate: "Khu giảng đường", pathIcon: require('../assets/img/giangduong.png'),pathCate: "tra-cuu-map/giang-duong", },
            { cate: "Phòng chức năng", pathIcon: require('../assets/img/chucnang.png'),pathCate: "tra-cuu-map/chuc-nang", },
            { cate: "Khoa,trung tâm nghiên cứu", pathIcon: require('../assets/img/trungtam.png'),pathCate: "tra-cuu-map/nghien-cuu", },
            { cate: "Khu tự học", pathIcon: require('../assets/img/tuhoc.png'),pathCate: "tra-cuu-map/tu-hoc", },
            { cate: "Nhà xe", pathIcon: require('../assets/img/nhaxe.png'),pathCate: "tra-cuu-map/nha-xe", },
            { cate: "Căn tin", pathIcon: require('../assets/img/cantin.png'),pathCate: "tra-cuu-map/can-tin", },
            { cate: "Địa điểm khác", pathIcon: require('../assets/img/diadiemkhac.png'),pathCate: "tra-cuu-map/khac", },
          ]},
        },
        {
          cate: "dan-duong",
          features:{ 
          data:[
            { cate: "Khu giảng đường", pathIcon: "" },
            { cate: "Phòng chức năng", pathIcon: "" },
            { cate: "Khoa,trung tâm nghiên cứu", pathIcon: "" },
            { cate: "Khu tự học", pathIcon: "" },
            { cate: "Nhà xe", pathIcon: "" },
            { cate: "Căn tin", pathIcon: "" },
            { cate: "Địa điểm khác", pathIcon: "" },
          ]},
        },
      ]},
      Feature:[],
    };
  },
  created() {
      this.FeatureData.data.forEach((cateItem)=>{
          if(cateItem.cate == this.$route.params.cate){
              this.Feature = cateItem.features;
          }
      })
      }
};
</script>

<style>
</style>