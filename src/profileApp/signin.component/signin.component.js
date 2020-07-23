'use strict';

// Register `signUpComponent` component, along with its associated controller and template
export default angular.
module('mainModule').
component('signInComponent', {
    templateUrl: '/src/profileApp/signin.component/signin.component.html',
    controller: [
        function signInController() {
            var signInVm = this;
            signInVm.isSignInVisibile = true; 

           signInVm.visibleSignInModal = function (isSignInView) {
             signInVm.isSignInVisibile = isSignInView;
           }

        }
    ]
});