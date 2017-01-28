import Ember from 'ember';

export default Ember.Service.extend({
	dataSources: null,
	profile: null,

	setProfile(data) {
		this.set("profile", data);
	}, 

	setDataSource(data) {
		this.set("dataSource", data);
	}
});