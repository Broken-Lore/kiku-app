 <template>
    <figure class="dog">
      <img
        @click="playDog"
        class="img-dog"
       src="../assets/img/dog-removebg-preview.png"
      />
      
    </figure> 
 </template>

 <script>
 export default {
     name:"Dog",

methods:{
 playDog(){

      let dog = new Audio(dogSfx)

dog.play()
    },
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

 </style>