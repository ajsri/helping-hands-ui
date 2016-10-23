import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

var shelters = require('../../mockdata/services.json');

@Component({
    selector: 'shelter',
    providers: [],
    templateUrl: './shelter.component.pug'
})

export class ShelterComponent implements OnInit{

    constructor(public route: ActivatedRoute, public router: Router) {
    }
    shelters = shelters;
    shelter: any;
    shelterId: any;
    sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.shelterId = params['id']
        });
        this.shelter = this.shelters.filter((shelter: any) => {
            return parseInt(this.shelterId) == shelter.id;
        })[0];
        this.shelter.url = 'http://' + this.shelter.url;

        console.log(this.shelter)
    }
}