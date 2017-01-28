import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

	actions: {
		signIn() {
			this.get("session").authenticate("authenticator:torii", 'google-oauth2-bearer');
		},

		signOut() {
			localStorage.setItem("access_token", null);
			this.get("session").invalidate();
		}

	}
});