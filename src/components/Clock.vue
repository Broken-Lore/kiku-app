<template>
  <figure class="clock">
    <img
        class="img-clock"
        v-if="state === true"
        src="../assets/img/clock.png"
        @click="playClock"
    />
    <figcaption v-if="state === true" class="clock-name">
      A clock
    </figcaption>
  </figure>
</template>

<script>

import clockSfx from "@/assets/sound/clock.mp3";

export default {
  name: 'Clock',

  methods: {
     playMode() {
      this.state = !this.state;
      console.log(this.state);
    },
    playClock(){
      let clock = new Audio(clockSfx)
      clock.play()
    }
  }
}

</script>

<style scoped>
.img-clock {
  z-index: 3;
  position: absolute;
  width: 7.8vw;
  height: auto;
  top: 22.5%;
  left: 32.5%;
}
</style>