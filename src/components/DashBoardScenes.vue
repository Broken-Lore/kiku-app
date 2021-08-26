<template>
  <div id="dashBoardScenes">
    <h1>Scenes details</h1>
  </div>
</template>

<script>
export default {
  name: "DashBoardScenes",
  methods: {
    hide() {
      const dashBoardScenes = document.getElementById("dashBoardScenes");
      dashBoardScenes.classList.remove("show");
    },
  },
};
</script>

<style scoped>
</style>
