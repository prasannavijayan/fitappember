import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

	tokenValidate: Ember.inject.service(),
	profileData: Ember.inject.service(),

	model() {
		let that = this;
		return Ember.$.ajax({
			url: "https://www.googleapis.com/plus/v1/people/me",
			headers: { "Authorization": "Bearer "+ localStorage.getItem("access_token") },
			success() {
				that.get("profileData").loadFitDataSource();
				// that.get("profileData").loadFitDataSet();
				that.get("profileData").loadFitDataSession();
			},
			error(error) {
				// HINT: Need to Show Why it failed.
				// Need to add to persist the token as long as possible
				that.get("tokenValidate").logOut();
			}
		});
	},

	setupController(controller, models) {
		this._super(controller, models);
		controller.set("profile", models);
	}
});