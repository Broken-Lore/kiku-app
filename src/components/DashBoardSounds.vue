<template>
  <div id="dashBoardSounds" class="dashBoardSounds">
    <h1>Sounds Details</h1>
  </div>
</template>

<script>
export default {
  name: "DashBoardSounds",
  methods: {
    openSounds() {
      const dashBoardSounds = document.getElementById("dashBoardSounds");
      dashBoardSounds.classList.add("show");
    },
    hide() {
      const dashBoardSounds = document.getElementById("dashboardSounds");
      dashBoardSounds.classList.remove("show");
    },
  },
};
</script>
   
<style scoped>
.dashBoardSounds {
  position: fixed;
  background-color: red;
  inset: 0;
  visibility: hidden;
}
.show {
  visibility: visible;
  opacity: 1;
  background-color: blue;
}
</style>
