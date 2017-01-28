import Ember from 'ember';

export default Ember.Component.extend({
	
	// Email Computed Value
	email: Ember.computed(function() {
		return this.get("profile.emails")[0].value.toString();
	}),

	imageURL: Ember.computed(function() {
		return this.get("profile.image.url");
	})

});
