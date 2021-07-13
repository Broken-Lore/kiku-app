<template>
    <div class="big-container">
        <img class="img-kitchen" src="../assets/img/vistaCocina.png" alt="">
        <button class="btn-play">play</button>
    </div>

</template>

<script>
export default {
    setup() {
        
    },
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
        width: 4rem;
        height: 4rem;
        border: none;
        background-color: red;
        z-index: 2;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
</style>