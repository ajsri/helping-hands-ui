import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service'

var mockdata = require('../../mockdata/users.json');
var mockemployment = require('../../mockdata/ee.json');
var mockdisabilities = require('../../mockdata/disabilities.json');

@Component({
    selector: 'user',
    templateUrl: './user.component.pug',
    providers: [ UserService ]
})

export class UserComponent implements OnInit {

    constructor(public route: ActivatedRoute, public router: Router, private userService: UserService) {

    }

    //get mock data, employment, disabilities
    mockdata = mockdata.clients;
    mockemployment = mockemployment;
    mockdisabilities = mockdisabilities;
    client: any;
    employmentInfo: any;
    disabilityInfo: any;
    sub: any;
    uuid: any;

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
        this.disabilityInfo = this.mockdisabilities.filter((client: any) => {
            return client.PersonalID.toString() == this.uuid;
        })
    }


}