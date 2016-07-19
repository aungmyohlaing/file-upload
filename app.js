var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'uploadFileController'
    })
    
});


myApp.controller('uploadFileController',['$scope', '$log', 'fileUpload', function($scope, $log, fileUpload){
    
     $scope.uploadFileFunction = function(){
       var file = $scope.myFile;

       console.log('file is ' );
       console.dir(file);

       var uploadUrl = "/fileUpload";
       fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);


myApp.directive("fileModel", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/file-upload.html',
       replace: true,
       scope: {
           fileUploadImage: "=",
           uploadFileFunction: "&"
       }
       
   }
});