app.directive('wordItem', function() {
    return {
        restrict: 'E',
        scope: {
            word: '='
        },
        templateUrl: 'js/directive/wordItem.html'
    };
});