import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

// firebase.initializeApp({
//   apiKey: "AIzaSyAqpbi1pJEOZqHCRbZzm3WDYcZRz7bnfPs",
//   authDomain: "vue-calendar-edb63.firebaseapp.com",
//   projectId: "vue-calendar-edb63",
//   storageBucket: "vue-calendar-edb63.appspot.com",
//   messagingSenderId: "308904066627",
//   appId: "1:308904066627:web:912e4f626d542de6bedef6"
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
