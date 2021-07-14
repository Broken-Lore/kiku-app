<template>
  <figure class="clock">
    <img
        @click="playClock"
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

.clock {
  position: absolute;
  bottom: 59vh;
  left: 19vw;
  min-width: 15vw;
  min-height: 15vw;
}

.img-clock {
  width: 7.8vw;
  height: auto;
}
</style>