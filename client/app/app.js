import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import angular from 'angular';
import toastr from 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
import 'angular-messages';
import 'angular-animate';
import 'angular-touch';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';

import 'normalize.css';

const moduleList = [
  'ngTouch',
  'ngMessages',
  'ngAnimate',
  toastr,
  uiRouter,
  Common,
  Components
];


angular.module('app', moduleList)
.component('app', AppComponent)
.constant('AppConstants', AppConstants)
.config(AppConfig)
.run(AppRun);

  //moved to app.config file
  // .config(($locationProvider) => {
  //   "ngInject";
  //   // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  //   // #how-to-configure-your-server-to-work-with-html5mode
  //   $locationProvider.html5Mode(true).hashPrefix('!');
  // })

 // .component('app', AppComponent);
