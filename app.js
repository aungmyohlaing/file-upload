var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'uploadFileController'
    })
       
});


myApp.controller('uploadFileController',['$scope', '$log', 'fileUpload', function($scope, $log, fileUpload){
     //$scope.myFile = [];
     $scope.uploadFileFunction = function(){
       
       var file = $scope.myFile;
       

       //console.log('file is ' );
       //console.dir(file);
      
       var uploadUrl = "upload.php";
         
        for (var i= 0; i < file.length ; i++ )
        {
           
            fileUpload.uploadFileToUrl(file[i], uploadUrl);
            
        }
       
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