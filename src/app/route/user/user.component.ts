import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
var mockdata = require('../../mockdata/users.json');
var mockemployment = require('../../mockdata/ee.json');

@Component({
    selector: 'user',
    templateUrl: './user.component.pug'
})

export class UserComponent implements OnInit {

    constructor(public route: ActivatedRoute, public router: Router) {

    }

    mockdata = mockdata.clients
    mockemployment = mockemployment
    client: any
    employmentInfo: any
    sub: any
    uuid: any

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.uuid = params['id']
        })
        this.client = this.mockdata.filter((client: any) => {
            return client.UUID == this.uuid;
        })[0]
        this.employmentInfo = this.mockemployment.filter((client: any) => {
            return client.PersonalID.toString() == this.uuid
        })
    }


}