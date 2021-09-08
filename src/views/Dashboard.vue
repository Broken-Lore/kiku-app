<template>
  <div class="home">
    <h1 class="title" v-if="authenticated">{{ user.name }}'s Dashboard</h1>
    <img src="../assets/img/logo.png" alt="" class="logoApp" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  name: "Dashboard",
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

.tap {
  font-family: "Amatic SC", cursive;
  color: #ffff;
  font-size: 50px;
  text-decoration: none;
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
    display: flex;
    justify-content: center;
  }
}
</style>