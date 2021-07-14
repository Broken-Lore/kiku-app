<template>
  <figure class="hotPan">
    <img
        @click="playHotPan"
        class="img-hotPan"
        src="../assets/img/hotPanImg.png"
    />
    <figcaption class="hotPan-name">
      A Hot Pan
    </figcaption>
  </figure>
</template>

<script>

import hotPanSfx from "@/assets/sound/hotPan.mp3";

export default {
  name: 'HotPan',

  methods: {
     
    playHotPan(){
      let hotPlan = new Audio(hotPanSfx)
      hotPlan.play()
    }
  }
}

</script>

<style scoped>

.hotPan {
  position: absolute;
  bottom: 59vh;
  left: 19vw;
  min-width: 15vw;
  min-height: 15vw;
}

.img-hotPan {
  width: 7.8vw;
  height: auto;
}
</style>