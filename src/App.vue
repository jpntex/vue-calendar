<template>
  <div id="app">
    <h1>Calendar Reminders</h1>
    <Calendar class="calendar"/>
  </div>
</template>

<script>
import Calendar from './components/calendar/Calendar.vue';

export default {
  name: 'app',
  components: {
    Calendar
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 20px;
  padding: 20px;

  h1 {
    margin-bottom: 30px;
  }

  .calendar {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
