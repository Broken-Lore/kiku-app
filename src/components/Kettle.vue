<template>
  <figure class="kettle">
    <img
      @click="playKettle"
      class="img-kettle"
      src="../assets/img/kettle.png"
    />
    <figcaption class="kettle-name">
      A kettle
    </figcaption>
  </figure>
</template>

<script>
import kettleSfx from "@/assets/sound/kettle.mp3";

export default {
  name: "Kettle",

  methods: {
    playKettle() {
      let kettle = new Audio(kettleSfx);
      kettle.play();
      this.$emit('scoreMounter')
    },
  },
};
</script>

<style scoped>
.kettle {
  position: absolute;
  left: 38vw;
  top: 33vw;
}
.img-kettle {
  width: 9vw;
  height: auto;
}
</style>
