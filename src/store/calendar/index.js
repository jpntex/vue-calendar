import XDate from '../../utils/date';
import { db } from '../../main';

const state = {
  month: 0,
  reminders: []
};

const getters = {
  reminders: (state) => {
    const currentMonth = (new XDate()).addMonths(state.month).format('YYYY-MM');
    return state.reminders.filter(reminder => reminder.date.substr(0, 7) === currentMonth);
  }
};

const mutations = {
  setReminders(state, reminders) {
    state.reminders = reminders;
  },
  nextMonth(state) {
    state.month++;
  },
  prevMonth(state) {
    state.month--;
  }
};

const actions = {
  setReminders({ commit }) {
    let reminders = [];

    db.collection('reminders').onSnapshot((snapshot) => {
      reminders = [];
      snapshot.forEach((doc) => {
        reminders.push({ id: doc.id, ...doc.data() });
      });

      commit('setReminders', reminders);
    });
  },
  deleteReminder(_, reminder) {
    return db.collection('reminders').doc(reminder.id).delete();
  },
  saveReminder(_, reminder) {
    const { id, date, time, color, message } = reminder;

    if (id) {
      return db.collection('reminders').doc(id).set({
        date, time, color, message
      });
    } else {
      return db.collection('reminders').add({
        date, time, color, message
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
