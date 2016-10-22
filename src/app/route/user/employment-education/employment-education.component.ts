import { Component, Input } from '@angular/core';

@Component({
    selector: 'employment-education',
    templateUrl: './employment-education.component.pug'
})

export class EmploymentEducationComponent {
    @Input() data: any[];
    noHistory: boolean;
    eeHistory: any[];
    constructor() {
        if(this.data == null){
            this.noHistory = true;
        }
        else {
            this.noHistory = false;
            this.eeHistory = this.data;
        }
    }
}