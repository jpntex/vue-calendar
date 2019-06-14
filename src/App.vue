<template>
  <div id="app">
    <Calendar/>
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

<style>
#app {
  margin-top: 40px;
  padding: 30px;
}
</style>
