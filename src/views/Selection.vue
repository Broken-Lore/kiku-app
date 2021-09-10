<template>
  <div class="box">
   
    <div class="button-content">
      <button @click="openModal()" class="modal-button">how to play</button>
    </div>
    <Modal ref="modal"> </Modal>
 
    <div class="container">
      <router-link to="/kitchen" class="tap">
        <div class="scenes kitchen">
          <h2 class="sceneName">Kitchen</h2>
        </div>
      </router-link>

      <router-link to="" class="tap">
        <div class="scenes house">
          <h2 class="sceneName">In my House</h2>
        </div>
      </router-link>

      <router-link to="" class="tap">
        <div class="scenes park">
          <h2 class="sceneName">Playing in the Park</h2>
        </div>
      </router-link>

      <router-link to="" class="tap">
        <div class="scenes city">
          <h2 class="sceneName">Transport</h2>
        </div>
      </router-link>

      <router-link to="" class="tap">
        <div class="scenes farm">
          <h2 class="sceneName">farm</h2>
        </div>
      </router-link>

      <router-link to="" class="tap">
        <div class="scenes mas">
          <h2 class="sceneName">...</h2>
        </div>
      </router-link>
      <p class="selectTxt">Select your favorite scene</p>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "Selection",
  components: {
    Modal,
    
    
  },
  methods: {
    openModal() {
      const modal = document.getElementById("modal");
      modal.classList.add("show");
    },
  },
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
  background-image: url(../assets/img/salon.png);
}
.park {
  background-image: url(../assets/img/parque.png);
}
.city {
  background-image: url(../assets/img/streetTransport.png);
}
.farm {
  background-image: url(../assets/img/granja.png);
}
.mas {
  background-color: rgb(146, 143, 143);
}
.sceneName {
  font-size: 3rem;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  cursor: pointer;
}
.selectTxt {
  font-size: 5rem;
  display: flex;
  position: absolute;
  justify-content: center;
  font-weight: 600;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
.button-content {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  background-color: none;
}

.modal-button {
  text-decoration: none;
  border: none;
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  background: none;
  padding: 3px;
  width: 10rem;
  margin-top: 2rem;
  margin-right: 3rem;
  border-radius: 10px;
  font-family: "Amatic SC", cursive;
  position: absolute;
  z-index: 10;
}
.tap {
  text-decoration: none;
}
.user {
  position: absolute;
  color: #ffff;
  text-decoration: none;
  font-size: 2rem;
  width: 4rem;
  height: 3rem;
  top: 4%;
  right: 90%;
  font-weight: 700;
  z-index: 10;
}

</style>
