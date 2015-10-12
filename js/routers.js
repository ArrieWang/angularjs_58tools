var routerApp = angular.module('routerApp', ['ui.router','CityModule']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('', '/index');
    $stateProvider
        // .state('index', {
        //     url: '/index',
        //     views: {
        //         '': {
        //             templateUrl: 'tpls/home.html'
        //         },
        //         'main@index': {
        //             templateUrl: 'tpls/login.html'
        //         }
        //     }
        // })
        .state('index', {
            url: '',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        })
        .state('home', {
            url: '/home',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@home': {
                    templateUrl: 'tpls/header.html'
                },
                'main1@home': {
                    templateUrl: 'tpls/content.html'
                }
                //city应该排列在content中
            }
        })
        // .state('content',{
        //     url:'/content',
        //     controller:'js/controllers.js',
        //     // views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
        //     //     '': {
        //             templateUrl: 'tpls/content.html'
        //         // },
        //         // 'city@content': {
        //         //     templateUrl: 'tpls/city.html'
        //         // },
        //         // '@content':{
        //         //     templateUrl:'tpls/refresh.html'
        //         // }
        //     }
        // })       
        .state('home.page1',{
            url:'/refresh',
            templateUrl:'tpls/refresh.html'
        })
        .state('home.page2',{
            url:'/settop',
            templateUrl:'tpls/settop.html'
        })
        .state('home.page3',{
            url:'/carsInfo',
            templateUrl:'tpls/carsInfo.html'
        })
        .state('city',{
            url:'/city',
            templateUrl:'tpls/city.html'
        })
})