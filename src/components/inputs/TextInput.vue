<template>
  <label>
    {{label}}
    <input
      ref="input"
      type="text"
      v-model="inputValue"
      :maxlength="max"
      @keypress.enter="$emit('enter')"
    >
  </label>
</template>

<script>
import InputMixin from './mixins/input.mixin';

export default {
  mixins: [InputMixin],
  props: {
    max: Number
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    }
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
  margin-top: 3px;
  border: 1px solid #eee;
  cursor: pointer;
  padding: 8px 10px;
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
</style>

