import { MyButtonController } from 'MyButtonController';

angular.module('App.MyButton').directive('thMyButton', myButtonDirective);

function myButtonDirective() {
    return {
        controller: MyButtonController,
        templateUrl: 'Widgets/MyButton/MyButtonView.html'
    };
}