var app = angular.module("app", [])
.controller("TableController", ['$scope','$http', function($scope, $http){
	$scope.users = [];
	$scope.months = [];
	$scope.years = [];
	$scope.days = [];
	$scope.markers = new L.FeatureGroup();
	
    $scope.map = L.map('map').setView([0, 0], 2);    
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
        maxZoom: 30,
        minZoom: 1
    }).addTo($scope.map);

	for (var i = 1; i < 13; i++) {
		$scope.months.push(i);
	}
	for (var i = 1900; i < 2017; i++) {
		$scope.years.push(i);
	}
	for (var i = 1; i < 32; i++) {
		$scope.days.push(i);
	}

	$scope.init = function(){
		$http.get('getuser').success(function(data){
			$scope.users = data;
			$scope.refresh();
		});
	}

	$scope.addUser = function(){
		if(!$scope.name || !$scope.year || !$scope.month || !$scope.day || !$scope.address || !$scope.lat || !$scope.lng) {
			$("#myModal").modal({
				show: 'false'
			});
			return;
		}
		$http.post("insert?name="+$scope.name+"&birth="+$scope.year+"-"+$scope.month+"-"+$scope.day+"&address="+$scope.address+"&lat="+$scope.lat+"&lng="+$scope.lng).success(function(data){
			$scope.users = data;
			$scope.refresh();
		});
	}
	$scope.removeUser = function(index){
		$http.post('delete?id='+$scope.users[index].id).success(function(data){
			$scope.users = data;
			$scope.refresh();
		});		
	}
	$scope.refresh = function(){
		$scope.markers.clearLayers();
		for (var i in $scope.users) {
			$scope.marker = new L.marker(new L.LatLng($scope.users[i].lat, $scope.users[i].lng))
				.bindPopup($scope.users[i].name + ", " + $scope.users[i].birth + ", " + $scope.users[i].address);
			$scope.markers.addLayer($scope.marker);
		}				
		$scope.map.addLayer($scope.markers);
	}
	$scope.init();
}])
.directive("tableDirective", function() {
	// body...
	return {
		template: '<div class="content"><div class="col-md-4"><form class="form-horizontal text-left panel panel-success">'+
		'<div class="form-group"><label for="name" class="col-sm-3">Name:</label><div class="col-sm-9"><input type="text" ng-model="name" id="name" class="form-control"></input></div></div>'+
		'<div class="form-group form-inline"><label for="birth" class="col-sm-3">Birthday:</label><div class="col-sm-9"><select ng-model="year" class="form-control"><option ng-repeat="x in years">{{x}}</option></select><label>Y</label><select ng-model="month" class="form-control"><option ng-repeat="x in months">{{x}}</option></select><label>M</label><select ng-model="day" class="form-control"><option ng-repeat="x in days">{{x}}</option></select><label>D</label></div></div>'+
		'<div class="form-group"><label for="address" class="col-sm-3">Address:</label><div class="col-sm-9"><input type="text" ng-model="address" class="form-control" id="address"></input></div></div>'+
		'<div class="form-group"><label for="lat" class="col-sm-3">Lat:</label><div class="col-sm-9"><input type="number" ng-model="lat" placeholder="-90 to 90" min="-90" max="90" class="form-control" id="lat"></div></div>'+
		'<div class="form-group"><label for="lng" class="col-sm-3">Lng:</label><div class="col-sm-9"><input type="number" ng-model="lng" placeholder="-180 to 180" min="-180" max="180" class="form-control" id="lng"></div></div>'+
		'<div class="form-group"><input type="submit" value="Add" ng-click="addUser()" class="form-control btn btn-primary"></input></div></form></div>'+
		'<div class="col-md-8 table-responsive"><table class="panel panel-success table table-bordered table-hover table-striped"><thead><tr><th class="name">Name</th><th class="birth">birth</th><th class="address">Address</th><th class="lat">Lat</th><th class="lng">Lng</th><th class="option text-center">Delete</th></tr></thead><tr ng-repeat="x in users track by $index"><td class="name">{{x.name}}</td><td class="birth">{{x.birth}}</td><td class="address">{{x.address}}</td><td class="lat">{{x.lat}}</td><td class="lng">{{x.lng}}</td><td class="option text-center"><a ng-click="removeUser($index)"><span class="glyphicon glyphicon-remove"></span></a></td></tr></table></div></div>'
	};
});