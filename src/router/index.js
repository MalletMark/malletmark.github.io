import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HelloWorld.vue'
import WeatherPage from './../components/WeatherPanel.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/weather', component: WeatherPage }
    ]
})
