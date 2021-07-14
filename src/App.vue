<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/kitchen">Kitchen</router-link>
  </div>
  <router-view/>
</template>

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
