export default {
  props: {
    value: String,
    label: String
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    inputValue: function (val) {
      this.$emit('input', val);
    }
  }
}
