import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups/Meetups'
import Meetup from '@/components/Meetups/meetup'
import CreateMeetup from '@/components/Meetups/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },

    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },

    {
      path: '/meetup/:id',
      name: 'ViewMeetup',
      props: true,
      component: Meetup
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ],
  mode: 'history'
})
