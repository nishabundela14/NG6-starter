import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SigninComponent from './Signin.component';

let SigninModule = angular.module('Signin', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider.state('signin',{
    url:'/signin',
    component: 'signin'
  });
})

.component('signin', SigninComponent)

.name;

export default SigninModule;
