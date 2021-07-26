<template>
    <div class="modal" type="text/x-template" id="modal-template">
        <transition name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button class="modal-default-button" @click="$emit('close')">OK</button>
                    </slot>
                </div>
            </div>
            </div>
            </div>
        </transition>
    </div>
</template>

<script >
export default {
    name: 'modal',
    data: {
        showModal: false
    }
}
    
</script>