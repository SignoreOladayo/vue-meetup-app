import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/10/lagos-skyline-02.jpg',
                id: 'item1',
                title: 'Meetup in Abuja',
                description: 'This is a dev meetup in Abuja!',
                location: 'Abuja',
                date: new Date()
            },

            {
                imageUrl: 'https://news.bbcimg.co.uk/news/special/shorthands/36505/media/lagos1920street-l-mr_eexujmu.jpg',
                id: 'item2',
                title: 'Meetup in lagos',
                description: 'This is a dev meetup in lagos!',
                location: 'Lagos',
                date: new Date()
            }
        ],

        user: null,
        loading: false,
        errors: null
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },

        createUser(state, payload) {
            state.user = payload
        },

        setLoading(state, payload) {
            state.loading = payload
        },

        setError(state, payload) {
            state.errors = payload
        },

        clearError(state) {
            state.errors = null
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'fasdjkfskf'
            }

            commit('createMeetup', meetup)
        },

        setNewUser({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('createUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },

        signInUser({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('createUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('clearError')
                        console.log(error)
                    }
                )
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },

        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },

        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },

        user(state) {
            return state.user
        },

        authError(state) {
            return state.error
        }
    }
})