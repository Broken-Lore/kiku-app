<template>
  <div id="dashBoardScenes" class="dashBoardScenes">
    <h1>Scenes details</h1>
  </div>
</template>

<script>
export default {
  name: "DashBoardScenes",
  methods: {
    openScenes() {
      const dashBoardScenes = document.getElementById("dashBoardScenes");
      dashBoardScenes.classList.add("show");
    },
    hide() {
      const dashBoardScenes = document.getElementById("dashBoardScenes");
      dashBoardScenes.classList.remove("show");
    },
  },
};
</script>

<style scoped>
.dashBoardScenes {
  position: fixed;
  background-color: red;
  inset: 0;
  visibility: hidden;
}
.show {
  visibility: visible;
  opacity: 1;
}
</style>
