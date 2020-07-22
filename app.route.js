// 'use strict';

// angular.
// module('profileApp').
// config(['$routeProvider', '$locationProvider',
//     function config($routeProvider, $locationProvider) {
//         $locationProvider.html5Mode(true).hashPrefix('*');
//         $routeProvider.
//         when('/signin', {
//             template: '<main-app></main-app>'
//         }).
//         when('/masterAdmin', {
//             template: '<master-admin-component style="background-color: #f5f5f5;"></master-admin-component>'
//         }).
//         when('/avatarUpload', {
//             template: '<avatar-upload-component></avatar-upload-component>'
//         }).
//         otherwise('/signin');
//     }
// ]);

export default function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
        $routeProvider.
        when('/signin', {
            template: '<main-app></main-app>'
        }).
        otherwise('/signin');
}

appConfig.$inject = ['$routeProvider', '$locationProvider'];