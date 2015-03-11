import { ButtonController } from './ButtonController';

export const buttonDirectiveName = 'appButton';
export function buttonDirectiveFunction() {
    return {
        controller: ButtonController,
        controllerAs: 'button',
        templateUrl: 'components/button/buttonView.html'
    };
}