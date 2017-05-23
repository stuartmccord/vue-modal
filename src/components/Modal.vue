<template>
    <div class="modal-mask" @click="show = false" v-show="show" transition="modal">
        <div class="modal-wrapper">
            <div class="modal-container" @click.stop><slot></slot></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: true,
                twoWay: true
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        max-width: 800px;
        max-height: calc(100vh - 20px);
        width: 80%;
        margin: 10px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    .modal-header h3 {
        margin-top: 0;
        margin-bottom: 0;
    }
    .modal-body {
        margin: 5px 0;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .modal-footer {
        position: relative;
        top: -12px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .modal-default-button {
        float: right;
        margin-left: 10px;
    }
    /*
     * the following styles are auto-applied to elements with
     * v-transition="modal" when their visiblity is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */
    .modal-enter, .modal-leave {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>