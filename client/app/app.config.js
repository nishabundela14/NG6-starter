function AppConfig($logProvider, toastrConfig, $httpProvider, $stateProvider, 
    $locationProvider, $urlRouterProvider) {
"ngInject";

//Enable log
$logProvider.debugEnabled(true);

//hashbang routing
$locationProvider.html5Mode(true).hashPrefix('!');

//routing
$stateProvider.state('app',{
    abstract: true,
    component: 'app'
});

$urlRouterProvider.otherwise('/');
}

export default AppConfig;