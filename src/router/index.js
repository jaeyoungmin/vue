import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      path: '/',
      component: () => import('../views/Gallery.vue'),
    },
    {
      path:'/Following',
      name: 'Following',
      component: ()=> import('../views/Following.vue')
    }
  ]
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
