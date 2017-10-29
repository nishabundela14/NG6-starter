import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsComponent from './posts.component';
import newpostComponent from './new-post/new-post.component';
import editPostComponent from './editPost/editPost.component';

let postsModule = angular.module('posts', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
  .state('app.posts',{
    url:'/posts',
    component: 'posts'
  })
  
  .state('app.new',{
    url:'/new',
    component: 'new'
  })
  .state('app.edit',{
    url:'/edit/:id',
    component: 'edit'
  });
})

.component('posts', postsComponent)
.component('new', newpostComponent)
.component('edit', editPostComponent)

.name;

export default postsModule;
