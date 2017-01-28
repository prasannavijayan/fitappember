import DS from 'ember-data';
import { v4 } from "ember-uuid";

export default DS.JSONSerializer.extend({
	// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	// 	let mydata = null;
	// 	id = 1;
	// 	if(payload.kind === "plus#person") {
	// 		// mydata = normalizePerson(payload)
	// 		console.log(id);
	// 		mydata = { "data": { "id": 1, "type": "people", "attributes": { "nick-name": payload.nickname } } };
	// 	}
	// 	debugger;
	// 	return this._super(store, primaryModelClass, mydata, id, requestType);
	// }
});