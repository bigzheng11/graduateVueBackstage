import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Login from "../views/I";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/",
        name: "Login",
        component: Login,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
