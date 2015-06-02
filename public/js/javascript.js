var app = angular.module('myApp', ['btford.socket-io']).
    factory('mySocket', function (socketFactory) {
        return socketFactory();
    }).
    controller('ArduController', function ($scope,mySocket) {

        $scope.ledOn = function () {

            mySocket.emit('led:on');
            console.log('LED ON');
        };


        $scope.ledOff = function () {

            mySocket.emit('led:off');
            console.log('LED OFF');  
        };    
});