'use strict';

// Register mainApp component, along with its associated controller and template.
export default angular.
  module('mainModule').
  component('mainApp', {
    template: './src/profileApp/profile_main.html',
    controller: [
      function mainAppController() {
      	var mainAppVm = this;
      	mainAppVm.screenHeight = window.screen.height;
      	
      }
    ]
  });
