import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'
import dateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyChjgODKTPiHY4y88GZFyfr0HxofjAtOuw',
            authDomain: 'meetup-52cdb.firebaseapp.com',
            databaseURL: 'https://meetup-52cdb.firebaseio.com',
            projectId: 'meetup-52cdb',
            storageBucket: ''
        })
    }
})