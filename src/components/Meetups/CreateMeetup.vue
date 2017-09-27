<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<h4>Create a new meetup</h4>
			</v-flex>
		</v-layout>

		<v-layout>
		<v-flex>
		<form @submit.prevent="onCreateMeetup">
		<v-layout row>
			<v-flex xs12>
			
					<v-layout>
						<v-text-field
							name = "title"
							label = "Title"
							id = "title"
							v-model = "title"
							required
						></v-text-field>
					</v-layout>
				
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12>
				
					<v-layout>
						<v-text-field
							name = "location"
							label = "Location"
							id = "location"
							v-model = "location"
							required
						></v-text-field>
					</v-layout>
				
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12>
			
					<v-layout>
						<v-text-field
							name = "imageUrl"
							label = "Image URL"
							id = "imageUrl"
							v-model = "imageUrl"
							required
						></v-text-field>
					</v-layout>
			
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12>
				<img :src="imageUrl" height="150px">
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12>
					<v-layout>
						<v-text-field
							name = "description"
							label = "Description"
							id = "description"
							v-model = "description"
							multi-line
							required
						></v-text-field>
					</v-layout>
			</v-flex>
		</v-layout>

		<v-layout row>
			
			<v-flex xs12>
				<h4>Choose a date</h4>
				<v-date-picker v-model="date"></v-date-picker>
				{{date}}
			</v-flex>

		</v-layout>

			<v-layout row>
			
			<v-flex xs12>
				<h4>Pick a time</h4>
				<v-time-picker v-model="time" format="24hr"></v-time-picker>
				{{ time }}
			</v-flex>

		</v-layout>

		<v-layout row>
			<v-flex xs12>
				<v-spacer></v-spacer>
				<v-btn type="submit" :disabled = "!formIsValid">Register</v-btn>
			</v-flex>
		</v-layout>
	</form>
	</v-flex>
	</v-layout>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
				date: new Date(),
				time: new Date()
      }
    },

    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      },

	  submittableDateTime () {
		  const date = new Date(this.date)
		  if (typeof this.time === 'string') {
			  const hours = this.time.match(/^(\d+)/)[1]
			  const minutes = this.time.match(/:(\d+)/)[1]
			  date.setHours(hours)
			  date.setMinutes(minutes)
		  } else {
			  date.setHours(this.time.getHours())
			  date.setMinutes(this.time.getMinutes())
		  }
		  return date
	  }
		},
		methods: {
			onCreateMeetup () {
        const meetupData = {
					title: this.title,
					location: this.location,
					imageUrl: this.imageUrl,
					description: this.description,
					date: this.submittableDateTime
				}
				this.$store.dispatch('createMeetup', meetupData)
				this.$router.push('/meetups')
			}
		}
  }
</script>