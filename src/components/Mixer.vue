<template>
  <figure class="mixer">
    <img
      @click="playMixer"
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
  },
};
</script>

<style scoped>
.mixer {
  position: absolute;
  bottom: 38.5vh;
  left: 25.2vw;
  width: 9vw;
}
.img-mixer {
  width: 13vw;
  height: 13vw;
}
</style>
