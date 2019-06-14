import XDate from '../../utils/date';

const REMINDERS = 'reminders';

const getId = () => '_' + Math.random().toString(36).substr(2, 9);
const getReminders = () => {
  try {
    return JSON.parse(localStorage.getItem(REMINDERS)) || [];
  } catch (e) {
    return [];
  }
}
const storeReminders = (reminders) => {
  try {
    return localStorage.setItem(REMINDERS, JSON.stringify(reminders));
  } catch (e) {
    return e;
  }
}

const state = {
  month: 0,
  reminders: getReminders()
};

const getters = {
  reminders: (state) => {
    const currentMonth = (new XDate()).addMonths(state.month).format('YYYY-MM');
    return state.reminders.filter(reminder => reminder.date.substr(0, 7) === currentMonth);
  }
};

const mutations = {
  nextMonth(state) {
    state.month++;
  },
  prevMonth(state) {
    state.month--;
  },
  deleteReminder(state, reminder) {
    const index = state.reminders.findIndex(o => o.id === reminder.id);
    if (index !== -1) {
      state.reminders.splice(index, 1);

      storeReminders(state.reminders);
    }
  },
  saveReminder(state, reminder) {
    const { id, date, time, color, message } = reminder;

    if (reminder.id) {
      const index = state.reminders.findIndex(o => o.id === reminder.id);

      if (index !== -1) {
        Object.assign(state.reminders[index], {
          id, date, time, color, message
        });
      }
    } else {
      state.reminders.push({
        id: getId(), date, time, color, message
      });
    }

    storeReminders(state.reminders);
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
