import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
    mode:"history",
    {
        path: "/",
        name: "Login",
        component: Login,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
