<template>
  <label>
    {{label}}
    <flat-pickr :config="config" v-model="inputValue" placeholder="Select date" name="date"></flat-pickr>
  </label>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import InputMixin from './mixins/input.mixin';

export default {
  mixins: [InputMixin],
  components: {
    flatPickr
  },
  data() {
    return {
      config: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true
      }
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

