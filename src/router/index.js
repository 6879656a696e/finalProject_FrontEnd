import Vue from "vue";
import VueRouter from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts
import Index from "@/views/Index.vue";
import Profile from "@/views/Profile.vue";
import List from "@/views/List.vue";
import List2 from "@/views/List2.vue";
import List3 from "@/views/List3.vue";
import Write from "@/views/Write.vue";


Vue.use(VueRouter);

// routes
const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/list2",
    component: List2,
  },
  {
    path: "/list3",
    component: List3,
  },
  {
    path: "/write",
    component: Write,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
