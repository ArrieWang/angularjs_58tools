 var app = angular.module('myApp',[])
//run方法相当于java中的main方法
.run(function($rootScope){
	$rootScope.name="Ari Lerner";
})
.controller('MyController',function($scope){
	$scope.person={
		age:12
	}
})
//利用$apply调用$digest循环watcher($watch函数)监听数据model、view的改变，以进行数据的双向绑定
.controller('MessageController', function($scope) {  
      
      $scope.getMessage = function() {  
        setTimeout(function() {
        $scope.$apply(function(){
        	$scope.message = 'Fetched after 3 seconds';  
        	console.log('message:'+$scope.message);  
        })  
        }, 2000);  
      }  
        
      $scope.getMessage();  
      
    })
.controller('TestFormModule',function($scope){
  $scope.user={
    userName:'arrie',
    password:''
  };
  $scope.save=function(){
    alert("保存数据");
  };
});
 //$http提供强大的ajax支持，支持各种传递方式、各种数据的传输
 // $http({  
 // 	method: 'JSONP',  
 // 	url: 'http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK'}).success(function(data, status, headers, config) { 
 // 	 // data contains the response  // status is the HTTP status  // headers is the header getter function  // config is the object that was used to create the HTTP request}).error(function(data, status, headers, config) {});