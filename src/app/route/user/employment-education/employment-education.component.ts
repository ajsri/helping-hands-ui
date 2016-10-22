import { Component, Input } from '@angular/core';

@Component({
    selector: 'employment-education',
    templateUrl: './employment-education.component.pug'
})

export class EmploymentEducationComponent {
    @Input() data: any[];
    noHistory: boolean;
    tableHidden: boolean = false;
    toggleTable() {
        this.tableHidden = !this.tableHidden
    }
    eeHistory: any[];
    ngOnInit() {
        if(this.data && this.data.length > 0){
            this.noHistory = false;
        }
        else {
            this.noHistory = true;
        }
    }
}