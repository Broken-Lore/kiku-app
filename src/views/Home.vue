<template>
  <div class="home">
    <h1 class="title">welcome to kiku</h1>
    <img src="../assets/img/logo.png" alt="" class="logoApp">
  </div>
  <router-link to="/selection" class="tap">Tap to play together</router-link>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
.home{
  height: 80%;
  z-index: 0;
  display: flex;
}

.title{
  width: 30%;
  margin: 0;
  font-size :150px;
  color: #ffff;
  position: absolute;
  margin-left: 40px;
  margin-top: 40px;
  letter-spacing: 15px;
}

.logoApp{
  width: 35rem;
  height: 35rem;
  margin-left: 400px;
  margin-top: 40px;
}

.tap{
  font-family: 'Amatic SC', cursive;
  color: #ffff;
  font-size: 50px;
  text-decoration: none;
  background-color: #4abdac;
}
</style>