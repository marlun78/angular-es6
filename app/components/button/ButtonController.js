export class ButtonController {
    constructor() {
        console.log('Button controller');
        this.title = 'My Button!';
    }

    onClick() {
        console.log(this.title, 'was clicked');
    }
}