import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	
	tagName: "",

	dateTime: Ember.computed(function() {
		return moment(new Date(parseInt(this.get("time")))).format("DD-MM-YYYY hh:ss A");
	})
});