import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyD7CHpvJHIQrgY7nPWIAeNaW4s9fscac3U",
  authDomain: "vue-reminders.firebaseapp.com",
  databaseURL: "https://vue-reminders.firebaseio.com",
  projectId: "vue-reminders",
  storageBucket: "vue-reminders.appspot.com",
  messagingSenderId: "900406633769",
  appId: "1:900406633769:web:4313500dd713e29f"
};

firebase.initializeApp(config);

Vue.prototype.$firebase = firebase;

export const db = firebase.firestore();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
