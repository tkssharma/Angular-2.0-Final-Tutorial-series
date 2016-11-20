import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: `<h1>Hello {{ name }}!</h1>`,
    styles : `[css-class1,css-class2]`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}