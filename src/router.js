import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RouteTwo from "./views/RouteTwo/RouteTwo"
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:"/route", //文件夹名
      name:"route", //vue文件名
      component: () =>
          import ("./views/Route/Route.vue")
    },
    {
      //嵌套式路由  方法二
      path:"/routethree", // 子路由
      component: Home,   //父路由
      children:[
        {
          path:"",
          name:"routethree",    // 子路由
          component:() => import("./views/RouteThree/RouteThree.vue")
        }
      ]
    },
    {
      //嵌套式路由  方法二
      path:"/routefour", // 子路由
      component: Home,   //父路由
      children:[
        {
          path:"",
          name:"routefour",    // 子路由
          component:() => import("./views/RouteFour/RouteFour.vue")
        }
      ]
    },
    {
      path:"/routeone/:name/:id", //文件夹名
      name:"routeone", //vue文件名
      component: () =>
          import ("./views/RouteOne/RouteOne.vue")
    },
    {
      path:"/routetwo", //文件夹名
        name:"routetwo", //vue文件名
        component: () =>
            import ("./views/RouteTwo/RouteTwo.vue"),
    },
    //    //嵌套式路由  方法一
    // {
    //   path:"/routetwo", //文件夹名
    //   name:"routetwo", //vue文件名
    //   component: () =>
    //       import ("./views/RouteTwo/RouteTwo.vue"),
    //   children:[
    //     {
    //       path: "/routethree",
    //       name: "routethree",
    //       component:() => import("./views/RouteThree/RouteThree.vue")
    //     }
    //   ]
    // },
    {
       //嵌套式路由  方法二
      path:"/routethree", // 子路由
      component: RouteTwo,   //父路由
      children:[
        {
          path:"",
          name:"routethree",    // 子路由
          component:() => import("./views/RouteThree/RouteThree.vue")
        }
      ]
    },
    {
      path:"/routethree", //文件夹名
      name:"routethree", //vue文件名
      component: () =>
          import ("./views/RouteThree/RouteThree.vue")
    },
    ,
    {
      path:"/routefour", //文件夹名
      name:"routefour", //vue文件名
      component: () =>
          import ("./views/RouteFour/RouteFour.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About/About.vue")
    },
    {
      path: "*",
      component: () =>
          import(/* webpackChunkName: "about" */ "./views/Error/Error.vue")
    }
  ]
});
export  default router;
