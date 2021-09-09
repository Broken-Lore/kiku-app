<template>
  <div class="page-loader">
    <breeding-rhombus-spinner 
      :animation-duration="2000"
      :size="65"
      :color="'#fc4a1a'"
    />
  </div>
</template>

<script>

import { BreedingRhombusSpinner } from "epic-spinners";
export default {

  components: {
      BreedingRhombusSpinner,
  },
};
</script>

<style scoped>
  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    background-color: #4abdac;
  }
</style>
