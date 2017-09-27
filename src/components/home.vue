<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex>
				<v-carousel>
				  <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click="viewMeetup(meetup.id)" style="cursor: pointer">
				  	 <div class="title">{{meetup.title}}</div>
				  </v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>

		<v-layout>
			<v-flex text-md-center mt-2>
				<v-btn large router to="/meetups">Explore Meetups</v-btn>
				<v-btn large router to="/meetup/new">Organize Meetup</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
	  computed: {
	    meetups () {
	      return this.$store.getters.featuredMeetups
	    }
	  },

	  methods: {
	    viewMeetup (id) {
	      this.$router.push('/meetup/' + id)
	    }
	  }
	}
</script>

<style scoped>
	.title {
		position:absolute;
		bottom:50px;
		background-color: rgba(0,0,0,0.5);
		padding:20px;
		color: white;
		font-size: 2em;
	}
</style>