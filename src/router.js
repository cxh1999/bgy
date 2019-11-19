import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/xm/Login.vue'
import St from './components/xm/St.vue'
import Gd from './components/xm/Gd.vue'
import End from './components/xm/End.vue'
import Kf from './components/xm/Kf.vue'
import Cssl from './components/xm/Cssl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Login',component:Login },
    { path: '/St',component:St },
    {path:'/Gd',component:Gd},
    {path:'/End',component:End},
    { path: '/Kf',component:Kf},
    { path: '/Cssl',component:Cssl},
    
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
})
