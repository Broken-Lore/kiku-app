<template>
  <figure class="pan">
    <img
      @click="playHotPan(); scoreMount()"
      class="img-hotPan"
      src="../assets/img/pan.png"
    />
    <figcaption class="hotPan-name">
      A Hot Pan
    </figcaption>
  </figure>
</template>

<script>
import panSfx from "@/assets/sound/pan.mp3";

export default {
  name: "Pan",
  methods: {
    playHotPan() {
      let hotPlan = new Audio(panSfx);
      pan.play();
 
    },

    scoreMount(){
       this.$emit('scoreMounter')
    }
  },
};
</script>

<style scoped>

</style>
