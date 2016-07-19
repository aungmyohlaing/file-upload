/*
myApp.directive('uploadModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.uploadModel);
          var modelSetter = model.assign;

          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);
 */

myApp.directive('uploadModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.uploadModel);
          var isMultiple = attrs.multiple;
          var modelSetter = model.assign;

          element.bind('change', function(){
             var values = [];
              var selectedfilename = [];
                angular.forEach(element[0].files, function (item) {
                    /*var value = {
                       // File Name 
                        name: item.name,
                        //File Size 
                        size: item.size,
                        //File URL to view 
                        url: URL.createObjectURL(item),
                        // File Input Value 
                        _file: item
                    };*/ 
                    var filename = { name: item.name};
                    values.push(item);
                    selectedfilename.push(filename);
                });
              
                scope.$apply(function () {
                    scope.filename = selectedfilename;  
                    if (isMultiple) {                                             
                        modelSetter(scope, values);                       
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
       }
    };
 }]);

      
 myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
      
        
       var fd = new FormData();
       fd.append('file_upload', file);       
       $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })

       .success(function(){
       })

       .error(function(){
       });
    }
 }]);
      