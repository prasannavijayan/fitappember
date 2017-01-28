import Ember from 'ember';

export default Ember.Service.extend({

	userDataSource: null,
	userDataSets: null,
	userSession: null,

	// init() {
	// 	this.loadFitDataSource();
	// },

	loadFitDataSource() {
		let that = this;
		Ember.$.ajax({
			url: "https://www.googleapis.com/fitness/v1/users/me/dataSources",
			type: "GET",
			headers: { "Authorization": "Bearer "+ localStorage.getItem("access_token") },
			success(data) {
				that.set("userDataSource", data.dataSource);
			}
		});
	},

	loadFitDataSet() {
		let that = this;
		Ember.$.ajax({
			url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
			type: "POST",
			headers: { "Authorization": "Bearer "+ localStorage.getItem("access_token") },
			success(data) {
				that.set("userDataSource", data.dataSource);
			}
		});
	},

	loadFitDataSession() {
		let that = this;
		Ember.$.ajax({
			url: "https://www.googleapis.com/fitness/v1/users/me/sessions",
			type: "GET",
			headers: { "Authorization": "Bearer "+ localStorage.getItem("access_token") },
			success(data) {
				that.set("userSession", data.session);
			}
		});
	}

});