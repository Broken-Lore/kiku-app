<template>
  <div class="about">
    <div class="flex justify-center">
      <Button
        @click="play"
        @mouseleave="stop"
        label="Trumpet"
      >
        🐈
      </Button>
    </div>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import catSfx from "../assets/cat.wav";
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
  setup() {
    const { play, stop } = useSound(catSfx);

    return {
      play,
      stop,
    };
  },
};
</script>
