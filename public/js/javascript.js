var app = angular.module('myApp', ['btford.socket-io']).
    factory('mySocket', function (socketFactory) {
        return socketFactory();
    }).
    controller('ArduController', function ($scope,mySocket) {
        temp=0;
        $scope.sala = function () {
            
            if(temp%2==0){
                mySocket.emit('salaOn');
                console.log('salaOn');
                temp++;
                console.log(temp);
            }
            else{
                mySocket.emit('salaOff');
                console.log('salaOff');
                temp++;
                console.log(temp);

            }
            
        };


        $scope.cuarto = function () {
            
            if(temp%2==0){
                mySocket.emit('cuartoOn');
                console.log('cuartoOn');
                temp++;
                console.log(temp);
            }
            else{
                mySocket.emit('cuartoOff');
                console.log('cuartoOff');
                temp++;
                console.log(temp);
            }
            
        };    
});