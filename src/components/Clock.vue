<template>
  <figure class="clock">
    <img
      @click="playClock(); scoreMount() "
      class="img-clock"
      src="../assets/img/clock.png"
    />
    <figcaption class="clock-name">
      A clock
    </figcaption>
  </figure>
</template>

<script>
import clockSfx from "@/assets/sound/clock.mp3";

export default {
  name: "Clock",

  methods: {
    playMode() {
      this.state = !this.state;
      console.log(this.state);
    },
    playClock() {
      let clock = new Audio(clockSfx);
      clock.play();
      
    },

    scoreMount(){
       this.$emit('scoreMounter')
    }
  },
};
</script>

<style scoped>

</style>
