<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-card>
					<v-flex>
						<v-card-title>
							<h5>{{meetup.title}}</h5>
						</v-card-title>
					</v-flex>

					<v-flex>
						<v-card-media :src="meetup.imageUrl" height="400px"></v-card-media>
					</v-flex>

					<v-flex>
						<v-card-text>
							<div class="info--text">{{meetup.date | date}} - {{meetup.location}}</div>
							<div>
								{{meetup.description}}
							</div>
						</v-card-text>
					</v-flex>

					<v-flex>
						<v-card-actions>
						<v-spacer></v-spacer>
							<v-btn class="blue darken-1 white--text">
								Register
							</v-btn>
						</v-card-actions>
					</v-flex>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>