<template>
  <figure :class="objectName">
    <img
      @click="
        playSound();
        scoreMount();
      "
      :class="imgClass"
      :src="images[objectName]"
    />
    <figcaption class="name">A {{ objectName }}</figcaption>
  </figure>
</template>

<script>
import catSfx from "@/assets/sound/cat.wav";
import clockSfx from "@/assets/sound/clock.mp3";
import dogSfx from "@/assets/sound/dog.mp3";
import kettleSfx from "@/assets/sound/kettle.mp3";
import mixerSfx from "@/assets/sound/mixer.mp3";
import panSfx from "@/assets/sound/pan.mp3";

import catImg from "@/assets/img/cat.png";
import clockImg from "@/assets/img/clock.png";
import dogImg from "@/assets/img/dog.png";
import kettleImg from "@/assets/img/kettle.png";
import mixerImg from "@/assets/img/mixer.png";
import panImg from "@/assets/img/pan.png";

export default {
  name: "SoundObject",
  data: function () {
    return {
      sound: null,
      clicked: 0,
      sounds: {
        cat: catSfx,
        clock: clockSfx,
        dog: dogSfx,
        kettle: kettleSfx,
        mixer: mixerSfx,
        pan: panSfx,
      },
      images: {
        cat: catImg,
        clock: clockImg,
        dog: dogImg,
        kettle: kettleImg,
        mixer: mixerImg,
        pan: panImg,
      },
    };
  },
  props: {
    objectName: String,
  },
  computed: {
    imgClass: function () {
      return "img-" + this.objectName;
    },
    imgName: function () {
      return "";
    },
  },
  methods: {
    playSound() {
      if (!this.sound) return;
      this.sound.paused ? this.sound.play() : this.sound.pause();
    },
    scoreMount() {
      this.$emit("scoreMounter", this.clicked);
      this.clicked += 1;
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
      font-size: 2rem;
      font-weight: 700;
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
.clock {
  position: absolute;
  bottom: 55vh;
  left: 25vw;
}

.img-clock {
  width: 9.8vw;
  height: auto;
}
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
.pan {
  position: absolute;
  bottom: 32.5vh;
  right: 1vh;
  min-width: 15vw;
  min-height: 15vw;
}
.img-pan {
  width: 7.8vw;
  height: auto;
}
.kettle {
  position: absolute;
  left: 38vw;
  top: 33vw;
}
.img-kettle {
  width: 9vw;
  height: auto;
}
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