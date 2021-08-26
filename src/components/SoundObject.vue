<template>
  <div class="floater" :class="objectName">
    <img
      @click="
        playSound();
        scoreMount();
      "
      @mouseleave="stopSound"
      :disabled="true"
      :class="imgClass"
      :src="images[objectName]"
    />
    <p class="name">{{ soundObject.name }}</p>
  </div>
</template>

<script>
import catSfx from "@/assets/sound/cat.wav";
import clockSfx from "@/assets/sound/clock.mp3";
import dogSfx from "@/assets/sound/dog.mp3";
import kettleSfx from "@/assets/sound/kettle.mp3";
import mixerSfx from "@/assets/sound/mixer.mp3";
import panSfx from "@/assets/sound/pan.mp3";
import fridgeSfx from "@/assets/sound/fridge.mp3";

import catImg from "@/assets/img/cat.png";
import clockImg from "@/assets/img/clock.png";
import dogImg from "@/assets/img/dog.png";
import kettleImg from "@/assets/img/kettle.png";
import mixerImg from "@/assets/img/mixer.png";
import panImg from "@/assets/img/pan.png";
import fridgeImg from "@/assets/img/fridge.png";

export default {
  name: "SoundObject",
  data: function () {
    return {
      sound: null,
      listened: 0,
      sounds: {
        cat: catSfx,
        clock: clockSfx,
        dog: dogSfx,
        fridge: fridgeSfx,
        kettle: kettleSfx,
        mixer: mixerSfx,
        pan: panSfx,
      },
      images: {
        cat: catImg,
        clock: clockImg,
        dog: dogImg,
        fridge: fridgeImg,
        kettle: kettleImg,
        mixer: mixerImg,
        pan: panImg,
      },
    };
  },
  props: [
    "objectName",
    "soundObject",
  ],
  computed: {
    imgClass: function () {
      return "img-" + this.objectName;
    },
  },
  methods: {
    playSound() {
      if (!this.sound) return;
      this.sound.paused ? this.sound.play() : this.sound.pause();
    },
    stopSound() {
      this.sound.pause();
    },
    scoreMount() {
      this.$emit("scoreMounter", this.listened);
      if (!this.sound) return;
      return (this.listened += 1);
    },
  },
  mounted: function () {
    this.sound = new Audio(this.sounds[this.objectName]);
  },
};
</script>

<style scoped>
.name {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 700;
}
.floater {
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s ease;
}
.floater img {
  width: 100%;
}
.floater:hover {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
.cat {
  left: 40%;
  top: 76%;
  width: 10%;
}
.clock {
  left: 34%;
  top: 27%;
  width: 7%;
}
.dog {
  left: 52%;
  top: 62%;
  width: 14%;
}
.fridge {
  left: 13%;
  top: 34%;
  width: 18%;
}
.pan {
  left: 79%;
  top: 45%;
  width: 7%;
}
.kettle {
  left: 43%;
  top: 47%;
  width: 7%;
}
.mixer {
  left: 33%;
  top: 43%;
  width: 10%;
}
</style>