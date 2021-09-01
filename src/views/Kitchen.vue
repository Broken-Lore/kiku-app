<template>
  <div class="big-container">
    <div v-if="loading">
      <BreedingRhombusSpinner />
    </div>
    <div class="image-container">
      <img
        v-if="gameOn === false"
        class="base"
        src="../assets/img/kitchen-back.png"
        alt="illustration of a kitchen with its appliances, a cat, a dog and a cook"
      />
      <img
        v-if="gameOn === true"
        class="base filter"
        src="../assets/img/kitchen-back.png"
        alt="illustration of a kitchen with its appliances, a cat, a dog and a cook"
      />
      <div v-if="gameOn === false">
        <div v-for="soundObject in soundObjects" v-bind:key="soundObject">
          <SoundObject
            :objectName="soundObject.name"
            v-bind:key="soundObject.name"
            :soundObject="soundObject"
          />
        </div>
      </div>
      <div v-if="gameOn === true">
        <div v-for="soundObject in soundObjects" v-bind:key="soundObject">
          <SoundObject
            :objectName="soundObject.name"
            v-bind:key="soundObject.name"
            :soundObject="soundObject"
            :gameOn="gameOn"
            @scoreMounter="scoreMount"
            @click="compareSounds(soundObject.id)"
          />
        </div>
      </div>

      <p v-if="gameOn === true" class="score">score : {{ scoreCounter }}</p>

      <button v-if="gameOn === false" @click="playMode" class="btn-play">
        Play
      </button>

      <button v-if="gameOn === true" @click="playMode" class="btn-back">
        Back
      </button>

      <router-link to="/selection">
        <button v-if="gameOn === false" @click="stopGame" class="btn-back">
          Back
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import SoundObject from "../components/SoundObject.vue";
import BreedingRhombusSpinner from "../components/BreedingRhombusSpinner.vue";
import { sceneService } from "../services/sceneService.js";
import { gameService } from "../services/gameService";

export default {
  name: "Kitchen",
  components: {
    SoundObject,
    BreedingRhombusSpinner,
  },
  mounted() {
    this.getSounds();
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
  },
  data() {
    return {
      isLoaded: false,
      loading: false,
      gameOn: false,
      scoreCounter: 0,
      scores: [10, 5, 3, 1],
      soundObjects: [],
      sceneId: 1,
      randomObject: [],
      randomSound: null,
      assertion: null,
    };
  },
  methods: {
    playMode() {
      this.gameOn = !this.gameOn;
      this.getRandomSound();
      return this.gameOn;
    },
    playSound() {
      if (!this.randomSound) return;
      this.randomSound.paused
        ? this.randomSound.play()
        : this.randomSound.pause();
    },
    async getSounds() {
      this.loading = true;
      let response = await sceneService.getSoundsbyScene(this.sceneId);
      this.soundObjects = response.data;
      console.log(this.soundObjects);
      let soundName = this.soundObjects[1];
      this.loading = false;
      console.log(soundName.name);
    },
    async getRandomSound() {
      if (this.gameOn) {
        let response = await gameService.randomSound(this.sceneId);
        this.randomObject = response.data;
        console.log(this.randomObject.id);
        this.randomSound = new Audio(this.randomObject.audio);
        console.log(this.randomSound);
        this.playSound();
      }
    },
    async compareSounds(clickedSoundId) {
      let data = {
        randomSoundId: this.randomObject.id,
        clickedSoundId: clickedSoundId,
      };
      if (!this.randomSound.ended) {
        window.alert("Please, wait for the sound to finish");
      } else {
        let response = await gameService.compareSounds(data);

        this.assertion = response.data.assertion;
        if (this.assertion) {
          window.alert("YAAAY! YOU GOT IT!");
          setTimeout(this.getRandomSound(), 300000);
        } else {
          this.randomSound.pause();
          window.alert("OOOPS! TRY IT AGAIN... ;)");
          this.playSound();
        }
      }
    },
    scoreMount(clickCount) {
      if (!this.assertion) return;
      console.log(clickCount);
      this.scoreCounter += this.scores[clickCount] || 0;
    },
    stopGame() {
      this.randomSound = null;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");
body {
  margin: 0px;
}

.big-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
.image-container {
  max-width: 100vw;
  position: relative;
}
.base {
  width: 100vw;
  position: relative;
  z-index: 0;
}
.filter {
  filter: blur(3.4px) sepia(0.38) grayscale(0.22) brightness(0.6);
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
