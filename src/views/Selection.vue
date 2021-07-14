<template>
  <div class="container">
    <div class="scenesgrid">
      <div class="scenes">
        <h2 class="sceneName">kitchen</h2> 
      </div>
    </div>
      <p class="selectTxt">Select your favorite scene</p>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

.container {
  background-color:#4ABDAC;
  width: 100vw;
  height: 100vh;
  padding: 11%;
  max-width: 77vw;
  max-height: 66vh;
}

.scenes {

  background-color: #cd9af0;
  width: 20vw;
  height: 23vh;
  border-radius:20px;
  box-shadow:  12px 17px 60px 1px rgb(110, 107, 107) ;
  display:flex;
  align-items: center;
  justify-content: center;

}

.sceneName {
  font-size: 3rem;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}

.selectTxt{
  font-size: 5rem;
  display:flex;
  justify-content: center;
  align-items:baseline
  
}
</style>

