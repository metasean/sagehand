angular.module('sageHand')


	.service('FirebaseService', function ($firebase) {
	var firebaseEndpoint = "https://stage-hand.firebaseio.com";
	return {
		getSageEvents: function () {
			return $firebase(new Firebase(firebaseEndpoint + "/events"))
		},
		getEvent: function (eventKey){
			return $firebase(new Firebase(firebaseEndpoint + "/events" + eventKey))
		},
		getActs: function (eventKey){
			console.log('khg');
			return $firebase(new Firebase(firebaseEndpoint + "/events" + eventKey + "acts"))
		},
		getAct: function (eventKey, actKey){ // because Firebase array
			return $firebase(new Firebase(firebaseEndpoint + "/events" + eventKey + "acts" + actKey))
		}
	};
})