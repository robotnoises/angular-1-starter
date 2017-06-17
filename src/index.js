require('./shared.scss');

const angular = require('angular');
require('angular-route');
require('angular-resource');

angular.module('app', ['ngRoute', 'ngResource'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/home', { template: '<home-page/>' })
            .otherwise('/home');
    });

require('./services');
require('./controllers');
require('./components');