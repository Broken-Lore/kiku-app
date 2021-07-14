<template>
  <div class="big-container">
    <img
      class="img-kitchen"
      v-if="state === false"
      src="../assets/img/kitchen.png"
      alt=""
    />
    <img
      class="img-kitchen"
      v-if="state === true"
      src="../assets/img/kitchen-dim.png"
      alt=""
    />

    <img
      class="img-clock"
      v-if="state === true"
      src="../assets/img/reloj-removebg-preview.png"
      alt=""
    />
    <!-- Sound object  -->
    <figure class="cat">
      <img
        @click="playCat"
        class="img-cat"
        v-if="state === true"
        src="../assets/img/cat.png"
      />
      <figcaption v-if="state === true" class="cat-name">
        A cat
      </figcaption>
    </figure>
    <!-- Sound object  -->

<!-- Sound object  -->
    <figure class="kettle">
      <img
        @click="playKettle"
        class="img-kettle"
        v-if="state === true"
        src="../assets/img/kettle.png"
      />
      <figcaption v-if="state === true" class="kettle-name">
        A kettle
      </figcaption>
    </figure>
    <!-- Sound object  -->

    <button
      v-if="state === false"
      @click="playMode"
      @mouseleave="stop"
      class="btn-play"
    >
      Play
    </button>
    <button
      v-if="state === true"
      @click="playMode"
      class="btn-back"
    >
      Back
    </button>
  </div>
</template>

<script>
import catSfx from "../assets/sound/kitty.wav";
import kettleSfx from "../assets/sound/kettle.mp3";

export default {
  data() {
    return {
      state: false,
    };
  },

  methods: {
    playMode() {
      this.state = !this.state;
      console.log(this.state);
    },
    playCat() {
      let cat = new Audio(catSfx);
      cat.play();
    },
     playKettle() {
      let kettle = new Audio(kettleSfx);
      kettle.play();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");

.big-container {
  font-family: "Amatic SC", cursive;
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
}

.img-kitchen {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.cat {
  position: absolute;
  bottom: -1vh;
  left: 19vw;
  min-width: 15vw;
  min-height: 15vw;
}

.img-cat {
  width: 12vw;
  height: 12vw;
}
.cat-name {
  font-family: Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 700;
}
.img-clock {
  z-index: 3;
  position: absolute;
  width: 7.8vw;
  height: auto;
  top: 22.5%;
  left: 32.5%;
}
.kettle {
  position: absolute;
  left: 38vw;
  top: 33vw;
  /* min-width: 15vw;
  min-height: 15vw; */
}
.img-kettle {
  width: 9vw;
  height: auto;
}
.btn-play {
  font-family: "Amatic SC", cursive;
  font-size: 5rem;
  font-weight: 400;
  width: 8rem;
  height: 7rem;
  border: none;
  background-color: red;
  box-shadow: 1px 1px 10px gray;
  border-radius: 10px;
  z-index: 2;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all ease 0.5s;
}
.btn-play:hover {
  background-color: rgb(255, 77, 77);
  filter: drop-shadow(1px 1px 10px rgb(241, 79, 79));
}
.btn-back {
  font-family: "Amatic SC", cursive;
  font-size: 2rem;
  font-weight: 400;
  width: 4rem;
  height: 3rem;
  border: none;
  background-color: red;
  box-shadow: 1px 1px 10px gray;
  border-radius: 10px;
  z-index: 2;
  position: absolute;
  bottom: 0%;
  left: 90%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all ease 0.5s;
}

.btn-back:hover {
  background-color: rgb(255, 77, 77);
  filter: drop-shadow(1px 1px 10px rgb(241, 79, 79));
}
</style>
