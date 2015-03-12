import { ButtonController } from './ButtonController';

export const name = 'appButton';
export function fn() {
    return {
        controller: ButtonController,
        controllerAs: 'button',
        templateUrl: 'components/button/buttonView.html'
    };
}
