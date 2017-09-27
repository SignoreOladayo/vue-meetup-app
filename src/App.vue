<template>
  <v-app>
  <v-navigation-drawer temporary v-model="sideNav">
    <v-list>
      <v-list-tile v-for="menuItem in menuItems" :key="menuItem.title" router :to="menuItem.link">
        <v-list-tile-action><v-icon>{{menuItem.icon}}</v-icon></v-list-tile-action>
        <v-list-tile-content><v-list-tile-title>{{menuItem.title}}</v-list-tile-title></v-list-tile-content>
      </v-list-tile>
    </v-list>
    
  </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        DevMeetup
      </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-for="menuItem in menuItems" :key="menuItem.title">
        <v-btn flat router :to="menuItem.link">
          <v-icon left>{{menuItem.icon}}</v-icon>
          {{menuItem.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: null
      }
    },

    computed: {
      menuItems () {
         let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
       if (this.userIsAuthenticated) {
         menuItems = [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'}
         ]
       }
       return menuItems
      },

      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
      }
    }
</script>
