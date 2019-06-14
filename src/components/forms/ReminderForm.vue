<template>
  <div class="form">
    <div class="form-input">
      <text-input
        ref="messageInput"
        label="Reminder message"
        v-model="message"
        @enter="submit"
        :max="30"
      />
      <div class="error" v-if="error">{{error}}</div>
    </div>

    <div class="form-input">
      <datetime-input v-model="datetime" label="When"/>
    </div>

    <div class="form-input">
      <color-input v-model="color" label="Color"/>
    </div>

    <div class="form-actions">
      <Button label="Remove" danger @click="remove" v-if="id"/>
      <div v-else></div>
      <Button label="Save" primary @click="submit"/>
    </div>
  </div>
</template>

<script>
// components
import DatetimeInput from '../inputs/DatetimeInput';
import ColorInput from '../inputs/ColorInput';
import TextInput from '../inputs/TextInput';
import Button from '../common/Button';

export default {
  components: {
    ColorInput,
    DatetimeInput,
    TextInput,
    Button
  },
  props: {
    reminder: Object
  },
  data() {
    const { id, color, date, time, message } = {
      id: null,
      ...this.reminder
    };

    return {
      error: null,
      id,
      color,
      message,
      datetime: date + ' ' + time
    };
  },
  mounted() {
    this.$refs.messageInput.focus();
  },
  methods: {
    submit() {
      this.error = null;

      if (!this.message) {
        this.error = 'Please fill the message field.';
      } else {
        const { id, color, datetime, message } = this;
        const { 0: date, 1: time } = datetime.split(' ');

        this.$emit('submit', {
          id,
          message,
          color,
          date,
          time
        });
      }
    },
    remove() {
      this.$emit('remove', { id: this.id });
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  .form-input {
    margin-bottom: 16px;

    .error {
      color: red;
      font-size: 0.8rem;
      margin-top: 2px;
    }
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 28px;
    text-align: right;
  }
}
</style>
