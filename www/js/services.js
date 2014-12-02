var app = angular.module('sageHand');


app.service('FirebaseService', function ($firebase) {
	var firebaseEndpoint = "https://stage-hand.firebaseio.com/";
	return {
		getSageEvents: function () {
			return $firebase(new Firebase(firebaseEndpoint + "events"))
		},
		getEvent: function (eventKey){
			return $firebase(new Firebase(firebaseEndpoint + "events/" + eventKey))
		},
		getActs: function (eventKey){
			console.log("getActs(" + eventKey + ")")
			console.log("fetching ... " + firebaseEndpoint + "events/" + eventKey + "/acts");
			return $firebase(new Firebase(firebaseEndpoint + "events/" + eventKey + "/acts"));
		},
		getAct: function (eventKey, actKey){
			console.log("FirebaseService.getAct(" + eventKey + " , " + actKey + ")")
			console.log("fetching ... " + firebaseEndpoint + "events/" + eventKey + "/acts/" + actKey);
			//return $firebase(new Firebase(firebaseEndpoint + "events/" + eventKey + "/acts/" + actKey));
			var ref = new Firebase(firebaseEndpoint + "events/" + eventKey + "/acts/" + actKey);
			return $firebase(ref).$asObject();
		}
	};
});