<template>
  <div class="modal" v-if="isVisible" @keyup.esc="hide">
    <div class="modal-body">
      <Icon class="icon" icon="close" @click.native="hide"/>
      <slot></slot>
    </div>
    <div class="modal-backdrop" @click="hide"></div>
  </div>
</template>

<script>
import Icon from './Icon';

export default {
  components: {
    Icon
  },
  props: {
    visible: Boolean
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal-backdrop {
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-body {
  z-index: 1;
  position: relative;
  background-color: #fefefe;
  margin: 10% auto;
  padding: 18px;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
