<template>
    <div class="big-container">

        <img class="img-kitchen" v-if="state===false" src="../assets/img/vistaCocina.png" alt="">
        <img class="img-kitchen" v-if="state===true" src="../assets/img/KitchenViewDull.png" alt="">
        
        <button @click="playMode" class="btn-play">Play</button>
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
    .big-container{
        position:relative;
        width: 100vw;
        height: 100vh;
    }

    .img-kitchen{
        width: 100vw;
        height: auto;
    }

    .btn-play{
        font-size: 1.5rem;
        width: 4rem;
        height: 4rem;
        border: none;
        background-color: red;
        z-index: 2;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        
    }
</style>