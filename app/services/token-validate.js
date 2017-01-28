import Ember from 'ember';

export default Ember.Service.extend({

	tokenObject: null,

	session: Ember.inject.service(),

	load(access_token) {
		let URL = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=";
		let that = this;
		return Ember.$.ajax({
			url: URL + access_token,
			success(data) {
				that.set("tokenObject", data);
			}, failure(data) {
				that.set("tokenObject", "error");
			}
		});
	},

	logOut() {
		if(this.get("session.isAuthenticated")) {
			this.get("session").invalidate();
		}
	}
});