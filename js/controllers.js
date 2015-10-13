/**城市功能模块
 *在城市输入框内动态写入城市名称
 *完成后台城市数据的遍历，显示前端样式
 */
var CityModule = angular.module('CityModule', []);
CityModule.controller('citySyncCtrl', function($scope, $http, $state, $stateParams){

            $http.get('../data/citys.json')
                .success(function(data, status, headers, config) {
                        $scope.citys = data;
            });
 });

var UserModule = angular.module('UserModule', []);
UserModule.controller('UserSyncCtrl', function($scope, $http, $state, $stateParams){

            $http.get('../data/users.json')
            	.success(function(data, status, headers, config) {
            		$scope.user = data;
            });
});