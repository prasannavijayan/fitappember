import Ember from 'ember';
import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({
  
  // host: 'https://www.googleapis.com',
  
  // headers: Ember.computed(function() {
  // 	if(this.get("session.isAuthenticated")) {
  // 		return { "Authorization": "Bearer " + localStorage.getItem('access_token') };
  // 	}
  // })

});