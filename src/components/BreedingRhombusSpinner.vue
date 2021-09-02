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
// To use minified css and js files instead of .vue single file components:
// import 'epic-spinners/dist/lib/epic-spinners.min.css'
// import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'

import { BreedingRhombusSpinner } from "epic-spinners";
export default {
  /* data: () => {
    return {
      isLoaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete" ) {
        this.isLoaded = true;
      }
    };
  }, */
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
