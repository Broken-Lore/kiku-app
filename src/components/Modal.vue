<template>
    <div class="modal" id="modal">
        <div class="modal-container">

            <div class="modal-header">
                <slot name="header">
                    How to play:
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body" class="body-title">
                    watch the video to see how play
                  <div>
                    <video width="700" height="450" controls class="video">
                      <source src="../assets/video/howplay.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-close-button" @click="hide()">
                        OK
                    </button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script >

export default {
    name: 'Modal',
    methods: {
        show(){
            const modal = document.getElementById('modal')
            modal.classList.add("show");
        },
        hide() {
            const modal = document.getElementById("modal");
            modal.classList.remove("show")
        },
    }
}
    
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.modal{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s easy-in-out, visibility 0.4s easy-in-out;
}
.modal.show{
    visibility: visible;
    opacity: 1;
}
.modal.show .modal-container{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.modal-container{
    background: #ffff;
    min-width: 370px;
    width: 800px;
    height: 600px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.modal-close-button{
    border: none;
    background: #fc4a1a;
    width: 35px;
    font-size: 15px;
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;
}
.modal-header{
    margin: 7px;
}
.modal-body{
    width: 750px;
    height: 500px;
    margin-left: 25px;
}
.body-title{
    display: flex;
    justify-content: center;
}

.modal-footer{
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  margin-right: 50px;
}

</style>