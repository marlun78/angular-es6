// User.js
import { Person } from '../Person/Person.js';

export class User extends Person {
    constructor() {
        super();
        console.log('User');
    }

    static create() {
        console.log('creating...');
    }
}