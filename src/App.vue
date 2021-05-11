<template>
  <div id="app">
    <h1>LSBN Weather Forecast</h1>
    <WeatherPanel time="2:30 PM" temp="60" weather="Windy" icon="https://images.vexels.com/media/users/3/136212/isolated/preview/7747f9f7a1dce4184897316278a76181-hurricane-wind-storm-by-vexels.png" />
  </div>
</template>

<script>
import WeatherPanel from './components/WeatherPanel.vue'

export default {
  name: 'App',
  components: {
    WeatherPanel
  }
}
</script>

<style>
#app {
  font-family: "Bebas Neue", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
