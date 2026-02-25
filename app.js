(function() {
    'use strict';
    angular.module("LunchCheck", [])
        .controller('LunchCheckController', control);
    control.$inject = ["$scope"];
    
    function control($scope) {
        $scope.items = "";
        $scope.message = "";
		$scope.message_color = "";
		
        $scope.check = function() {
			
            var array = $scope.items.split(',');
            var counter = 0;
            array.forEach((items) => {
                if (items != false) {
                    counter++;
                }
            });
            if (counter > 0 && counter < 4) {
                $scope.message = "Enjoy!";
				$scope.message_color = "greenMessage";
            } else if (counter >= 4) {
                $scope.message = "Too much!";
				$scope.message_color = "greenMessage";
            } else {
                $scope.message = "Please enter the data first";
				$scope.message_color = "redMessage";
            }
        }
    }
})();