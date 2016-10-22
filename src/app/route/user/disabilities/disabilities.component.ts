import { Component, Input } from '@angular/core'

@Component({
    selector: 'disabilities',
    templateUrl: './disabilities.component.pug'
})

export class DisabilitiesComponent {
    @Input() data: any[];
    noHistory: boolean;
    tableHidden: boolean = true;
    disabilityTypes = {
        5: 'Physical Disability',
        6: 'Developmental Disability',
        7: 'Chronic Health Condition',
        8: 'HIV/AIDS',
        9: 'Mental Health Problem',
        10: 'Substance Abuse'
    }
    disabilityResponse = {
        0: 'No',
        1: 'Alcohol Abuse',
        2: 'Drug abuse',
        3: 'Both alcohol and drug abuse',
        8: 'Client doesn’t know',
        9: 'Client refused'
    }
    dataCollectionStage = {
        1: 'Project Entry',
        2: 'Update',
        3: 'Project Exit',
        5: 'Annual Assessment'
    }
    toggleTable() {
        this.tableHidden = !this.tableHidden;
    }
    constructor(){
    }
    ngOnInit() {
        if(this.data && this.data.length > 0) {
            this.noHistory = false
        }
        else {
            this.noHistory = true;
        }
    }
}