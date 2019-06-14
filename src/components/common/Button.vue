<template>
  <button @click="$emit('click')" :class="{ 'primary': primary, 'danger': danger }">
    <Icon v-if="icon" :icon="icon"/>
    {{ label }}
  </button>
</template>

<script>
import Icon from './Icon';

export default {
  components: {
    Icon
  },
  props: {
    icon: String,
    label: String,
    danger: Boolean,
    primary: Boolean
  }
};
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s linear;
  text-align: center;
  white-space: nowrap;
  color: #5c6670;
  border: 0 none;
  border-radius: 3px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;

  &:hover {
    background-color: darken(#fff, 5%);
  }

  &:active {
    opacity: 0.75;
  }

  &:focus {
    outline: 0;
  }

  &.primary {
    background-color: #5c6670;
    color: #fff;
  }

  &.danger {
    background-color: #ff7675;
    color: #fff;
  }
}
</style>

