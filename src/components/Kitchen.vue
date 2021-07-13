<template>
    <div class="big-container">

        <img class="img-kitchen" v-if="state===false" src="../assets/img/vistaCocina.png" alt="">
        <img class="img-kitchen" v-if="state===true" src="../assets/img/KitchenViewDull.png" alt="">

         <img class="img-clock" v-if="state===true" src="../assets/img/reloj-removebg-preview.png" alt="">
        
        <button v-if="state===false" @click="playMode" class="btn-play">Play</button>
        <button v-if="state===true" @click="playMode" class="btn-back">Back</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            state: false
        }
        
    },
    methods: {
        playMode(){
            this.state = !this.state
            console.log(this.state)
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

    .big-container{
        font-family: 'Amatic SC', cursive;
        position:relative;
        width: 100vw;
        height: 100vh;
    }

    .img-kitchen{
        width: 100vw;
        height: auto;
    }

    .img-clock{
        z-index: 3;
        position: absolute;
        width: 7.8vw;
        height: auto;
        top:22.5%;
        left: 32.5%;






    }

    .btn-play{
        font-family: 'Amatic SC', cursive;
        font-size: 5rem;
        font-weight: 400;
        width: 8rem;
        height: 7rem;
        border: none;
        background-color: red;
        box-shadow: 1px 1px 10px gray ;
        border-radius: 10px;
        z-index: 2;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all ease 0.5s;
    }
    .btn-play:hover{
        background-color: rgb(255, 77, 77);
        filter: drop-shadow(1px 1px 10px rgb(241, 79, 79));
    }
    .btn-back{
        font-family: 'Amatic SC', cursive;
        font-size: 3rem;
        font-weight: 400;
        width: 6rem;
        height: 5rem;
        border: none;
        background-color: red;
        box-shadow: 1px 1px 10px gray ;
        border-radius: 10px;
        z-index: 2;
        position: absolute;
        bottom: -10%;
        left: 90%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all ease 0.5s;
    }

    
    .btn-back:hover{
        background-color: rgb(255, 77, 77);
        filter: drop-shadow(1px 1px 10px rgb(241, 79, 79));
    }
</style>