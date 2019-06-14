<template>
  <div>
    <label>
      {{label}}
      <input type="color" v-model="inputValue">
    </label>
    <div class="selection">
      <div
        v-for="color in selection"
        class="color"
        :key="color"
        @click="inputValue = color"
        :style="`background-color: ${color};`"
      ></div>
    </div>
  </div>
</template>

<script>
import InputMixin from './mixins/input.mixin';

export default {
  mixins: [InputMixin],
  data() {
    return {
      selection: [
        '#55efc4',
        '#81ecec',
        '#74b9ff',
        '#a29bfe',
        '#ffeaa7',
        '#fab1a0',
        '#ff7675',
        '#2d3436'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 0.9em;
  margin: 0;
}

input {
  width: 100%;
  height: 32px;
  margin-top: 3px;
  border: 1px solid #eee;
  cursor: pointer;
  transition: all 0.1s linear;
  white-space: nowrap;
  color: #5c6670;
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
}

.selection {
  display: flex;
  margin-top: 4px;

  .color {
    border-radius: 3px;
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }
}
</style>

