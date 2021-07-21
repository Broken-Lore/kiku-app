<template>
  <div class="">
    <div class="container">
      <router-link to="/kitchen" class="tap">
        <div class="scenes kitchen">
          <h2 class="sceneName">kitchen</h2>
        </div>
      </router-link>

      <router-link to="/clip-path" class="tap">
        <div class="scenes house">
          <h2 class="sceneName">In my House</h2>
        </div>
        </router-link>

      <div class="scenes park">
        <h2 class="sceneName">Playing in the Park</h2>
      </div>

      <div class="scenes city">
        <h2 class="sceneName">Walking on the city</h2>
      </div>

      <div class="scenes travelling">
        <h2 class="sceneName">Travelling</h2>
      </div>

      <div class="scenes mas">
        <h2 class="sceneName">...</h2>
      </div>
      <p class="selectTxt">Select your favorite scene</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  max-width: 92vw;
  max-height: 85vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  position: relative;
  padding: 3%;
  align-items: center;
  justify-items: center;
}

.scenes {
  background-size: cover;
  background-position: center;
  width: 22vw;
  height: 24vh;
  border-radius: 20px;
  box-shadow: 12px 17px 60px 1px rgb(110, 107, 107);
  display: flex;
  align-items: center;
  justify-content: center;
}

.kitchen {
  background-image: url(../assets/img/kitchen.png);
}

.house {
  background-image: url(../assets/img/vistacalle.png);
}

.park {
  background-image: url(../assets/img/kitchen.png);
}
.city {
  background-image: url(../assets/img/vistacalle.png);
}
.travelling {
  background-image: url(../assets/img/kitchen.png);
}
.mas {
  background-image: url(../assets/img/kitchen.png);
}

.sceneName {
  font-size: 3rem;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff,
    0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff,
    1px -1px 0 #fff, -1px 1px 0 #fff;
}

.selectTxt {
  font-size: 5rem;
  display: flex;
  position: absolute;
  justify-content: center;
  font-weight: 600;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff,
    0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff,
    1px -1px 0 #fff, -1px 1px 0 #fff;
}
</style>
