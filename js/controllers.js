/**城市功能模块
 *在城市输入框内动态写入城市名称
 *完成后台城市数据的遍历，显示前端样式
 */
var cityModule = angular.module('cityModule', []);
cityModule.controller('CitySyncController', function($scope, $http, $state, $stateParams){

            $http.get('../data/citys.json')
                .success(function(data, status, headers, config) {
                        $scope.citys = data;
            });
            $scope.showCity=function(t) {
              
              $scope.currentCity=t.cityName;
              console.log(t.cityName);
              // $scope.currentCity=data;
            }

 });

/**用户功能模块
 *
 */
var userModule = angular.module('userModule', []);
userModule.controller('UserSyncController', function($scope, $http, $state, $stateParams){

            $http.get('../data/users.json')
            	.success(function(data, status, headers, config) {
            		$scope.user = data;
                    console.log(user);
            });
});
