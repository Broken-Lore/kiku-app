<template>
  <figure class="cat">
    <img
        @click="playCat"
        class="img-cat"
        src="../assets/img/cat.png"
    />
    <figcaption class="cat-name">
      A cat
    </figcaption>
  </figure>
</template>

<script>

import catSfx from "@/assets/sound/cat.wav";

export default {
  name: 'Cat',

  methods: {
    playCat(){
      let cat = new Audio(catSfx)
      cat.play()
    }
  }
}

</script>


<style scoped>

.cat {
  position: absolute;
  bottom: -1vh;
  left: 19vw;
  min-width: 15vw;
  min-height: 15vw;
}

.img-cat{
  width: 12vw;
  height: 12vw;
}
.cat-name {
  font-family: Cambria, Cochin, Georgia, Times,
  "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 700;
}
</style>