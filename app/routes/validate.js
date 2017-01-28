import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

	tokenValidate: Ember.inject.service(),
	
	beforeModel() {
		let access_token = this.get("session.session.content.authenticated.authorizationToken.access_token");
		
		if(access_token) {
			localStorage.setItem("access_token", access_token);
			this.get("tokenValidate").load(access_token).then(() => {
				if(this.get("tokenValidate.tokenObject").constructor === Object) {
					this.transitionTo('profile');
				}
			});
		}

		if(localStorage.getItem("access_token")) {
			this.transitionTo('profile');
		} 
	}
});