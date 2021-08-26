<template>
  <div class="container">
    <h1>Mimi's Dashboard</h1>
    <!-- <DashBoardSounds />
        <DashBoardScenes /> -->
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
  name: "DashBoard",
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
.container {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: black;
}
</style>
