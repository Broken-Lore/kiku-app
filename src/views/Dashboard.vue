<template>
   <div class="home">
    
    <h1 class="title">welcome to kiku</h1>
    <img src="../assets/img/logo.png" alt="" class="logoApp" />

    <div class="button-content">
      <button @click="openScenes()" class="modal-button">Scenes</button>
      <DashBoardScenes ref="dashBoardScenes"> </DashBoardScenes>
      <button @click="openSounds()" class="modal-button">Sounds</button>
      <DashBoardSounds ref="dashBoardSounds"> </DashBoardSounds>
    </div>
    <router-link to="/" class="tap">Back</router-link>
  </div>
</template>
<script>
import DashBoardScenes from "../components/DashBoardScenes.vue";
import DashBoardSounds from "../components/DashBoardSounds.vue";

export default {
  name: 'DashBoard',
  components: { DashBoardSounds, DashBoardScenes },
  methods: {
    openScenes() {
      const dashBoardScenes = document.getElementById("dashBoardScenes");
      dashBoardScenes.classList.add("show");
      console.log('scenes buttonski works!')
    },
    openSounds() {
      const dashBoardSounds = document.getElementById("dashBoardSounds");
      dashBoardSounds.classList.add("show");
      console.log('sounds buttonski works!')
    },
  },
};
</script>

<style scoped>

@media (min-width: 1024px){
  .logoApp {
    width: 15rem;
    height: 15rem;
    margin-left: 20px;
    margin-top: 30px;
  }
}



</style>
