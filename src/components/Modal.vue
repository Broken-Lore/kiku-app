<template>
    <div class="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            How to play:
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Tap the element to hear his sound
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-close-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >

export default {
    name: 'Modal',

    data() {
        return {
            modal: false
        }
    },

    /* methods: {
    openModal() {
      this.modal = !this.modal;
      console.log(this.showModal);
    },
    closeModal() {
      this.modal = !this.modal;
      console.log(this.modal);
    },
    } */
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
    transition: opacity 0.4s easy-in-out, tranform 0.4s easy-in-out;
}

.modal-container{
    background: #ffff;
    min-width: 370px;
    width: 500px;
    height: 200px;
    color: black;
    font-size: 30px;
    font-weight: bold;
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

.modal-footer{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 10px;
    
}
</style>