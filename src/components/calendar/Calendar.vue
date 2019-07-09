<template>
  <div class="calendar">
    <div class="calendar-header">
      <Button icon="chevron_left" @click="prevMonth" />
      <div class="calendar-header__title">{{getHeaderText(month)}}</div>
      <Button icon="chevron_right" @click="nextMonth" />
    </div>

    <div class="calendar-week">
      <div class="calendar-weekday" v-for="weekday in weekdays" :key="weekday">{{weekday}}</div>
    </div>

    <div class="calendar-month">
      <div
        v-for="(day, index) in days"
        :key="index"
        @click="addReminder(day)"
        class="calendar-day"
        :class="{
          'calendar-day--today': day.isToday,
          'calendar-day--disabled': day.isDisabled
        }"
      >
        <div class="calendar-day__date">{{day.date}}</div>
        <div class="calendar-reminders" v-if="day.reminders">
          <div
            v-for="reminder in day.reminders"
            :key="reminder.id"
            @click="editReminder(reminder)"
            class="reminder"
            :style="`background-color: ${reminder.color}; color: ${isLightColor(reminder.color) ? '#333' : '#fff'}`"
          >
            <span class="reminder-date">{{reminder.time}}</span>
            <span class="reminder-message">{{reminder.message}}</span>
          </div>
        </div>
      </div>
    </div>

    <Modal ref="modal">
      <reminder-form :reminder="reminder" @submit="submitReminder" @remove="removeReminder"></reminder-form>
    </Modal>
  </div>
</template>

<script>
// helpers
import { XDate, weekdays } from '../../utils/date';
import isLight from '../../utils/color';

// components
import ReminderForm from '../forms/ReminderForm';
import Button from '../common/Button';
import Modal from '../common/Modal';

// vuex
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    ReminderForm,
    Button,
    Modal
  },
  data() {
    return {
      today: new XDate(),
      weekdays,
      reminder: null
    };
  },
  computed: {
    ...mapGetters({
      reminders: 'calendar/reminders'
    }),
    month() {
      return this.$store.state.calendar.month;
    },
    days() {
      return this.buildCalendar(this.month, this.reminders);
    }
  },
  created() {
    this.setReminders();
  },
  methods: {
    ...mapMutations({
      nextMonth: 'calendar/nextMonth',
      prevMonth: 'calendar/prevMonth'
    }),
    ...mapActions({
      setReminders: 'calendar/setReminders',
      saveReminder: 'calendar/saveReminder',
      deleteReminder: 'calendar/deleteReminder'
    }),
    addReminder(day) {
      if (!day.isDisabled) {
        this.reminder = {
          id: null,
          date: day._date.format('YYYY-MM-DD'),
          time: '12:00',
          message: '',
          color: '#333333'
        };

        this.$refs.modal.show();
      }
    },
    editReminder(reminder) {
      this.reminder = reminder;
      this.$refs.modal.show();
    },
    submitReminder(reminder) {
      this.saveReminder(reminder);
      this.$refs.modal.hide();
    },
    removeReminder(reminder) {
      this.deleteReminder(reminder);
      this.$refs.modal.hide();
    },
    isLightColor(color) {
      return isLight(color);
    },
    getHeaderText(month) {
      return new XDate().addMonths(month).format('MMMM YYYY');
    },
    buildCalendar(month) {
      const date = new XDate().addMonths(month);
      const daysInMonth = date.daysInMonth;
      const firstDay = new XDate(date.monthFirstDate);
      const lastDay = new XDate(date.monthLastDate);
      const days = [];

      // previous month days
      for (let i = firstDay.weekday; i > 0; i--) {
        days.push({
          isDisabled: true,
          date: new XDate(firstDay).addDays(-i).date
        });
      }

      // build current month days
      for (let i = 0; i < daysInMonth; i++) {
        const _date = new XDate(firstDay).addDays(i);

        days.push({
          _date,
          isToday: this.today.isToday(_date),
          date: _date.date,
          reminders: this.reminders
            .filter(o => o.date === _date.format('YYYY-MM-DD'))
            .sort((a, b) => {
              const aDate = +new Date(`${a.date} ${a.time}`);
              const bDate = +new Date(`${b.date} ${b.time}`);

              if (aDate > bDate) {
                return 1;
              }

              if (aDate < bDate) {
                return -1;
              }

              return 0;
            })
        });
      }

      // next month days
      let postDays = 6 - lastDay.weekday;

      if (days.length <= 35) postDays = postDays + 7;

      for (let i = 0; i < postDays; i++) {
        days.push({
          isDisabled: true,
          date: new XDate(lastDay).addDays(i + 1).date
        });
      }

      return days;
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #5c6670;
  border-top: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;

  &-header,
  &-week,
  &-day {
    border-bottom: 1px solid #f1f1f1;
    border-right: 1px solid #f1f1f1;
  }

  &-header {
    width: 100%;
    padding: 8px;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &__title {
      margin: 0 10px;
      min-width: 140px;
    }
  }

  &-week {
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  &-weekday {
    width: calc(100% / 7);
    padding: 8px;
    font-size: 0.8rem;
  }

  &-month {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &-day {
    cursor: pointer;
    position: relative;
    min-height: 80px;
    padding: 32px 8px;
    font-size: 0.8rem;
    font-weight: 300;
    width: calc(100% / 7);
    flex-shrink: 0;

    &:hover {
      background-color: #fafcfe;
    }

    &__date {
      top: 2px;
      left: 2px;
      position: absolute;
      padding: 4px;
      font-weight: 600;
      border-radius: 100%;
    }

    &--today {
      .calendar-day__date {
        background-color: #3969a3;
        color: #fff;
        width: 24px;
        height: 24px;
        text-align: center;
      }
    }

    &--disabled {
      cursor: initial;
      background-color: #fcfcfc !important;

      .calendar-day__date {
        color: #d9d9d9;
      }
    }
  }

  &-reminders {
    .reminder {
      padding: 4px;
      margin-bottom: 8px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0);
      transition: all 0.3s ease-in-out;
      background-color: #333;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;

      &:last-of-type {
        margin-bottom: 0;
      }

      &:hover {
        box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
        transform: scale(1.05);
      }

      &-date {
        font-size: 0.9em;
      }

      &-message {
        margin-left: 4px;
        font-weight: normal;
      }
    }
  }
}
</style>

