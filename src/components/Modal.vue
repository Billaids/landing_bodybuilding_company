<template>
  <transition name="modal">
    <div v-if="open" class="modal-mask" @click="onClose">
      <div class="modal-box">
        <div class="modal-container" @click.stop="">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean;
  onClose: () => void;
}>();
</script>

<style>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 15%);
  z-index: 8000;
}

.modal-box {
  max-width: 600px;
  width: 100%;
  margin: 0 16px;
  height: 80%;
  background: #fff;
  border-radius: 8px;
  z-index: 8001;
  overflow: hidden;
}

.modal-container {
  overflow: auto;
  height: 100%;
}

/* width */
.modal-container::-webkit-scrollbar {
  width: 10px;
  overflow: hidden;
}

/* Track */
.modal-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  overflow: hidden;
}

/* Handle */
.modal-container::-webkit-scrollbar-thumb {
  border-radius: 8px;
  padding: 2px;
  border: 2px solid #f1f1f1;
  background: #888;
  overflow: hidden;
}

.modal-enter-active {
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
