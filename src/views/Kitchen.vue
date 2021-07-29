<template>
  <div class="big-container">
    <img
      v-if="gameOn === false"
      class="img-kitchen"
      src="../assets/img/kitchen.png"
      alt="illustration of a kitchen with its appliances, a cat, a dog and a cook"
    />
    <img
      v-if="gameOn === true"
      class="img-kitchen"
      src="../assets/img/kitchen-dim.png"
      alt="illustration of a kitchen with its appliances, a cat, a dog and a cook"
    />
    <div v-if="gameOn === true">
      <SoundObject objectName="cat" @scoreMounter="scoreMount" ref="cat"/>
      <SoundObject objectName="clock" @scoreMounter="scoreMount" />
      <SoundObject objectName="dog" @scoreMounter="scoreMount" />
      <SoundObject objectName="kettle" @scoreMounter="scoreMount" />
      <SoundObject objectName="mixer" @scoreMounter="scoreMount" />
      <SoundObject objectName="pan" @scoreMounter="scoreMount" />
    </div>

    <p v-if="gameOn === true" class="score"> score : {{ scoreCounter }} </p>

    <button
      v-if="gameOn === false"
      @click="playMode"
      class="btn-play"
    >
      Play
    </button>

    <button v-if="gameOn === true" @click="playMode" class="btn-back">
      Back
    </button>

    <button v-if="gameOn === true" @click="playMode" class="btn-back">
      Back
    </button>
  </div>
</template>

<script>

import SoundObject from "../components/SoundObject.vue";

export default {
  name: "Kitchen",
  components: {
    SoundObject
  },
  data() {
    return {
      gameOn: false,
      scoreCounter: 0,
      scores: [10, 5, 3, 1],
    };
  },
  methods: {
    playMode() {
      this.gameOn = !this.gameOn;
      return this.gameOn;
    },
    scoreMount(clickCount) {
      console.log(clickCount);
      this.scoreCounter += this.scores[clickCount] || 0;
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
  bottom: 0;
  left: 90%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all ease 0.5s;
}
.btn-back:hover {
  background-color: rgb(255, 77, 77);
  filter: drop-shadow(1px 1px 10px rgb(241, 79, 79));
}
.score {
  position: absolute;
  font-size: 2.5rem;
  font-weight: 600;
  top: 0rem;
  margin: 1rem 0;
  right: 2rem;
}
</style>
