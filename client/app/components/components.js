import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Signin from './Signin/Signin';
import Post from './posts/posts';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Signin,
  Post
])

.name;

export default componentModule;
