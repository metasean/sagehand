var app = angular.module('sageHand');


app.factory('FirebaseService', function ($firebase) {
	var FBASE_URL = "https://stage-hand.firebaseio.com/";
	return {
		getSageEvents: function () {
			return $firebase(new Firebase(FBASE_URL + "events"))
		},
		getEvent: function (eventKey){
			console.log("FirebaseService.getEvent() fetching ... " + FBASE_URL + "events");

			return $firebase(new Firebase(FBASE_URL + "events/" + eventKey))
		},
		getActs: function (eventKey){
			console.log("FirebaseService.getActs(" + eventKey + ") fetching ... " + FBASE_URL + "events/" + eventKey + "/acts");

			return $firebase(new Firebase(FBASE_URL + "events/" + eventKey + "/acts"));
		},
		getAct: function (eventKey, actKey){
			console.log("FirebaseService.getAct(" + eventKey + " , " + actKey + ") fetching ... " + FBASE_URL + "events/" + eventKey + "/acts/" + actKey);

			return {
				act: $firebase(new Firebase(FBASE_URL + "events/" + eventKey + "/acts/" + actKey)),
				eventKey: eventKey
			};
		},
		updateActs: function (eventKey, params){

			var ref = new Firebase(FBASE_URL + "events/" + eventKey + "/acts");
			return ref.update(params, function(error) {
				var msg = error ? "There was an update error." : "Update successful";
				console.log(msg);
			});
		}
	};
});