'use strict';

// Register `signUpComponent` component, along with its associated controller and template
angular.
module('mainModule',[]).
component('signUpComponent', {
    templateUrl: '/src/profileApp/signup.component/signup.component.html',
    controller: [
        function signUpController() {

            var signUpVm = this;
            signUpVm.email = null;
            signUpVm.username = null;
            signUpVm.confirmPassword = null;
            signUpVm.password = null;
            signUpVm.isEmailExist = false;
            var isValidUser = false;


            // Methode to check password and confirmParswword Match.
            signUpVm.isPasswordMatch = function() {
                if (signUpVm.password === signUpVm.confirmPassword) {
                    return true;
                } else {
                    return false;
                }
            }

            //Method for user validation
            function userValidation() {
                if (signUpVm.email && signUpVm.username && signUpVm.confirmPassword && signUpVm.password) {
                    return signUpVm.isPasswordMatch();
                } else {
                    return false;
                }
            }

            //registerUser call the service and maintain the session of register user.
            signUpVm.registerUser = function() {
                // console.log("registerUser::::", registerUser);
                // if (userValidation()) {
                //     console.log(userService.registerUser(registerUser));
                // }
            }
          }
    ]
});