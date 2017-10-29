import * as visual from '@uirouter/visualizer';

function AppRun($rootScope, $state, $trace, $uiRouter, $transitions){
    "ngInject";
    //route trace
    $trace.enable('TRANSITION');

    visual.visualizer($uiRouter);
}

export default AppRun;