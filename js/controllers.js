/**城市功能模块
 *在城市输入框内动态写入城市名称
 *完成后台城市数据的遍历，显示前端样式
 */
var CityModule = angular.module('CityModule', []);
CityModule.controller('citySyncCtrl', function($scope, $http, $state, $stateParams){
	// $scope.citys=[
	// {cityId:"1",cityName:"beijing"},
	// {cityId:"2",cityName:"tianjin"},
	// {cityId:"3",cityName:"shengyang"},
	// {cityId:"4",cityName:"changchun"},
	// {cityId:"5",cityName:"haerbin"},
	// {cityId:"6",cityName:"shenzhen"},
	// {cityId:"7",cityName:"shanghai"},
	// {cityId:"8",cityName:"guangzhou"}
	// ];
	// $scope.remove = function (index) {
 //            $scope.items.splice(index, 1);
 //        }
            $http.get('../data/citys.json')
                .success(function(data, status, headers, config) {
                        $scope = JSON.parse(data);
            }).error(function(data, status, headers, config) {
                  console.log("error");
            });
 });