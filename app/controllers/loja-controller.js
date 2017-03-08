(function () {
  var myApp = angular.module('myApp');

    var SlideController = function () {
        var mv = this;
        mv.products = [{
            img: 'images/camisa_got.jpg',
            product: 'Camisa GAME OF THRONES',
            price: 42.00,
            description: 'Camisa 100% algodão'
        }, {
            img: 'images/camisa_ninja_code.jpg',
            product: 'Camisa NINJA CODE FIRE',
            price: 29.99,
            description: 'Camisa 100% algodão'
        }, {
            img: 'images/camisa_saymycode.jpg',
            product: 'Camisa BREAKING BAD',
            price: 39.99,
            description: 'Camisa 100% algodão'
        }, {
            img: 'images/camisa_PROGRAMMER_JAVA.jpg',
            product: 'Camisa PROGRAMADOR JAVA',
            price: 39.99,
            description: 'Camisa 100% algodão'
        }
        ]
    };



    myApp.controller('SliderController', SlideController);
})();
