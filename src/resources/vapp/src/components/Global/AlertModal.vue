<template>
  <teleport to="body">
    <transition name="modal">
      <div class="modal" @click.stop="closeModal" v-if="isActive">
        <div id="modalBox" @click.stop="blankEvent">
          <div id="title"><slot name="title"></slot></div>
          <div id="body"><slot name="default"></slot></div>
          <div>
            <button v-if="isModalActive" @click.stop="confirmModal">
              <slot name="yesButton">OK</slot>
            </button>
            <button v-if="isModalActive" @click.stop="closeModal">
              <slot name="cancelButton">CANCEL</slot>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["isActive"],

  methods: {
    closeModal() {
      this.$store.commit("modal/modalResponse", { response: false });
    },
    confirmModal() {
      this.$store.commit("modal/modalResponse", { response: true });
    },
    blankEvent() {
      return;
    },
  },
  computed: {
    isModalActive() {
      return this.isActive;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

div #modalBox {
  z-index: 100;
  width: 450px;
  min-height: 250px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  overflow: hidden;
}

div #title {
  font-size: 25px;
  width: 100%;
  text-align: center;
  background: #d13838;
  color: white;
  padding: 20px;
}
div #body {
  margin: 25px 0px;
  font-size:18px;
  text-align: center;
  padding:0px 5px 0px 5px;
}

button {
  border: none;
  width: 150px;
  background: #d13838;
  color: white;
  font-size: 20px;
  margin: 0px 10px;
  border-radius: 4px;
  transition: background-color 1s;
}

button:hover {
  background: black;
}

.modal-enter-active {
  animation: modal 0.2s ease-in;
}

.modal-leave-active {
  animation: modal 0.2s ease-out reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.3);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
