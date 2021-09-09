<template>
  <div class="home">
    <router-link to="/dashboard" class="user">User</router-link>
    <h1 class="title">welcome to kiku</h1>
    <img src="../assets/img/logo.png" alt="" class="logoApp" />
  </div>
  <router-link to="/selection" class="tap">Tap to play together</router-link>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  height: 80%;
  z-index: 0;
  display: flex;
}
.title {
  width: 30%;
  margin: 0;
  font-size: 150px;
  color: #ffff;
  position: absolute;
  margin-left: 40px;
  margin-top: 40px;
  letter-spacing: 15px;
}
.logoApp {
  width: 35rem;
  height: 35rem;
  margin-left: 400px;
  margin-top: 40px;
}
.tap,
.user {
  /* font-family: "Amatic SC", cursive; */
  color: #ffff;
  text-decoration: none;
  font-size: 40px;
  
}
@media (min-width: 1024px) {
  .home {
    display: flex;
    align-items: center;
    margin-left: 130px;
    margin-bottom: 20px;
  }
  .title {
    position: relative;
    margin-left: 130px;
    font-size: 100px;
  }
  .logoApp {
    width: 25rem;
    height: 25rem;
    margin-left: 20px;
    margin-top: 60px;
  }
  .tap {
    position: relative;
    margin-top: 50px;
    font-size: 40px;
  }
  .user {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
}
</style>