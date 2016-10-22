import { Component, Input } from '@angular/core'

@Component({
    selector: 'healthanddv',
    templateUrl: './healthanddv.component.pug'
})

export class HealthandDVComponent {
    @Input() data: any[];
    tableHidden: boolean = true;
    toggleTable() {
        this.tableHidden = !this.tableHidden;
    }
}