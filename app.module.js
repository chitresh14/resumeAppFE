'use strict';

// //*********************Application dependent imports*******************************
// import jquery from './assets/bootstrap-4.5.0-dist/jquery/jquery_3.5.1.js';
// import bootstrapMin from './assets/bootstrap-4.5.0-dist/js/bootstrap.min.js';
// import bootstrap from './assets/bootstrap-4.5.0-dist/js/bootstrap.js';
// import angularjs from './assets/angularjs/angular.min.js';
// import angularRoute from './assets/angularjs/angular-route.min.js';
// import angularResource from './assets/angularjs/angular-resource.min.js';
// import angularSantize from './assets/angularjs/angular-sanitize.min.js';
//***************Custom imports *************************
import routeConfig from './app.route.js';
import mainModule from './src/profileApp/main.module.js';
import mainApp from './src/profileApp/profile_main.js';
import signIn from './src/profileApp/signin.component/signin.component.js';
import signUp from './src/profileApp/signup.component/signup.component.js';

//Define the starting module of application.
console.log(mainModule)
angular.module('profileApp', [
    'ngRoute',
    'mainModule'
]).config(routeConfig);
	