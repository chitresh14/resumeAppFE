/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appConfig;
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
function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
  $routeProvider.when('/signin', {
    template: '<main-app></main-app>'
  }).otherwise('/signin');
}
appConfig.$inject = ['$routeProvider', '$locationProvider'];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (angular.module('mainModule', []));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
 // Register mainApp component, along with its associated controller and template.

/* unused harmony default export */ var _unused_webpack_default_export = (angular.module('mainModule').component('mainApp', {
  template: './src/profileApp/profile_main.html',
  controller: [function mainAppController() {
    var mainAppVm = this;
    mainAppVm.screenHeight = window.screen.height;
  }]
}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Register `mainApp` component, along with its associated controller and template

angular.module('mainModule').component('signInComponent', {
  templateUrl: '/src/profileApp/signin.component/signin.component.html',
  controller: [function signInController() {
    var signInVm = this;
    signInVm.isSignInVisibile = true;

    signInVm.visibleSignInModal = function (isSignInView) {
      signInVm.isSignInVisibile = isSignInView;
    };
  }]
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Register `mainApp` component, along with its associated controller and template

angular.module('mainModule', []).component('signUpComponent', {
  templateUrl: '/src/profileApp/signup.component/signup.component.html',
  controller: [function signUpController() {
    console.log(registerUser);
    var signUpVm = this;
    signUpVm.email = null;
    signUpVm.username = null;
    signUpVm.confirmPassword = null;
    signUpVm.password = null;
    signUpVm.isEmailExist = false;
    var isValidUser = false; // Methode to check password and confirmParswword Match.

    signUpVm.isPasswordMatch = function () {
      if (signUpVm.password === signUpVm.confirmPassword) {
        return true;
      } else {
        return false;
      }
    }; //Method for user validation


    function userValidation() {
      if (signUpVm.email && signUpVm.username && signUpVm.confirmPassword && signUpVm.password) {
        return signUpVm.isPasswordMatch();
      } else {
        return false;
      }
    } //registerUser call the service and maintain the session of register user.


    signUpVm.registerUser = function () {// console.log("registerUser::::", registerUser);
      // if (userValidation()) {
      //     console.log(userService.registerUser(registerUser));
      // }
    };
  }]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_route_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_profileApp_main_module_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_profileApp_profile_main_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_profileApp_signin_component_signin_component_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_profileApp_signin_component_signin_component_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_profileApp_signin_component_signin_component_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_profileApp_signup_component_signup_component_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_profileApp_signup_component_signup_component_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_profileApp_signup_component_signup_component_js__);
 // //*********************Application dependent imports*******************************
// import jquery from './assets/bootstrap-4.5.0-dist/jquery/jquery_3.5.1.js';
// import bootstrapMin from './assets/bootstrap-4.5.0-dist/js/bootstrap.min.js';
// import bootstrap from './assets/bootstrap-4.5.0-dist/js/bootstrap.js';
// import angularjs from './assets/angularjs/angular.min.js';
// import angularRoute from './assets/angularjs/angular-route.min.js';
// import angularResource from './assets/angularjs/angular-resource.min.js';
// import angularSantize from './assets/angularjs/angular-sanitize.min.js';
//***************Custom imports *************************





 //Define the starting module of application.

console.log(__WEBPACK_IMPORTED_MODULE_1__src_profileApp_main_module_js__["a" /* default */]);
angular.module('profileApp', ['ngRoute', 'mainModule']).config(__WEBPACK_IMPORTED_MODULE_0__app_route_js__["a" /* default */]);

/***/ })
/******/ ]);