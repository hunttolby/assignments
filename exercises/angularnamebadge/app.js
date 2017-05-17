var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", function($scope){
    $scope.firstName
    
    
    $scope.button = function(){
        $scope.firstNameOut = $scope.firstName;
        $scope.lastNameOut = $scope.lastName;
        $scope.birthPlaceOut = $scope.birthPlace;
        $scope.emailOut = $scope.email;
        $scope.favFoodOut = $scope.favFood;
        $scope.phoneOut = $scope.phone;
        $scope.aboutMeOut = $scope.aboutMe;
        Materialize.toast('Created Badge!', 4000)
    }
        
        
        

}]);