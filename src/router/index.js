import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contact.vue")
    },
    {
        path: "/services/vps",
        name: "vps",
        component: () => import("../views/Vps.vue")
    },
    {
        path: "/services/vpn",
        name: "vpn",
        component: () => import("../views/Vpn.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/about.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import("../views/Signup.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: () => import("../views/404.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !authenticatedUser) {
        next("login");
    } else {
        next();
    }
});

export default router;
