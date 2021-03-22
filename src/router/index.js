import Vue from "vue";
import VueRouter from "vue-router";
//import SideBar from "../components/SideBar.vue";
import Category from "../components/Category.vue";
import Sector from "../components/Sector.vue";
import Room from "../components/Room.vue";
import Feature from "../components/Feature.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Category",
        component: Category,
        // children: [
        //     { path: '', component: UserHome },
        // ]
    },
    {
        path: "/:cate",
        name: "Feature",
        component: Feature,
        // children: [
        //     { path: '/:feature', component: Sector },
        // ]
    },
    {
        path: "/:cate/:feature",
        name: "Sector",
        component: Sector,
        // children: [
        //     { path: '/:feature', component: Sector },
        // ]
    },
    {
        path: "/:cate/:feature/:sector",
        name: "Room",
        component: Room,
        // children: [
        //     { path: '/:feature', component: Sector },
        // ]
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;