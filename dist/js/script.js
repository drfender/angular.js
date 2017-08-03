var app = angular.module('myApp', []);
app.controller('firstCtrl', function ($scope){
	$scope.comment = [1,2,3];
	$scope.addItem = function () {
		if (!$scope.Item) {
			return
		}
		if ($scope.comment.indexOf($scope.Item) == -1) {
			$scope.comment.push($scope.Item);
			$scope.Item = "";
		}
		else {
			return
		}
		
	}
	$scope.remoteItem = function (index) {
		$scope.comment.splice(index,1)
	}
});