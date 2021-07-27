<template>
  <figure class="mixer">
    <img
      @click="playMixer(); scoreMount()"
      class="img-mixer"
      src="../assets/img/mixer.png"
    />
  </figure>
</template>

<script>
import mixerSfx from "@/assets/sound/mixer.mp3";

export default {
  name: "Mixer",

  methods: {
    playMode() {
      this.state = !this.state;
      console.log(this.state);
    },
    playMixer() {
      let mixer = new Audio(mixerSfx);
      mixer.play();
  
    },

    scoreMount(){
       this.$emit('scoreMounter')
    }
  },
};
</script>

<style scoped>

</style>
