// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import album from './pages/album'
import profile from './pages/profile'
import live from './pages/live'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('swiper/dist/css/swiper.css')
Vue.use(VRouter)
Vue.use(VueAwesomeSwiper)


let router = new VRouter({
   mode:'history',
   routes:[
     {
       path:'/',
       component:profile
     },
     {
       path:'/discography',
       component:album
     },
     {
       path:'/live',
       component:live
     }
   ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
