<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');


#app {
  font-family: 'Amatic SC', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #4abdac;
  padding: 0;
  margin: 0;
  height: 100vh;
}

#nav {
  padding: 30px;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffff;
}
</style>
