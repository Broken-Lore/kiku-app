<template>
  <figure class="dog">
    <img
      @click="playDog"
      class="img-dog"
      src="../assets/img/dog-removebg-preview.png"
    />
  </figure>
</template>

<script>
import dogSfx from "@/assets/sound/dog.mp3";
export default {
  name: "Dog",
  methods: {
    playMode() {
      this.state = !this.state;
      console.log(this.state);
    },
    playDog() {
      let dog = new Audio(dogSfx);
      dog.play();
    },
  },
};
</script>

<style scoped>
.dog {
  position: absolute;
  bottom: 11vh;
  left: 31vw;
  width: 9vw;
}
.img-dog {
  width: 16vw;
  height: 16vw;
}
</style>
