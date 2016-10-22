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
        if(this.data && this.data.length > 1){
            this.noHistory = false
        }
        else {
            this.eeHistory = this.data;
        }
    }
}