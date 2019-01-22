var app = angular.module('app', ['ngSanitize']).

app.controller('mainCtrl', function ($scope, $sce) {
    $scope.showIt = '<iframe src="http://www.anything.com"></iframe>';
    $scope.htmlSafe = function (data) {
        return $sce.trustAsHtml(data);
    }
}).
filter('toTrusted', function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    };
});