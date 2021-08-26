<template>
  <div id="dashBoardSounds" class="dashBoardSounds">
    <h1>Sounds Details</h1>
  </div>
</template>

<script>
export default {
  name: "DashBoardSounds",
  methods: {
    hide() {
      const dashBoardSounds = document.getElementById("dashboardSounds");
      dashBoardSounds.classList.remove("show");
    },
  },
};
</script>
   
<style scoped>
.dashBoardSounds {
  visibility: hidden;
}
.dashBoardSounds .show {
  visibility: visible;
  opacity: 1;
  background-color: blue;
}
</style>
