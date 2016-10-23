import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service'

var mockdata = require('../../mockdata/users.json');
var mockemployment = require('../../mockdata/ee.json');
var mockdisabilities = require('../../mockdata/disabilities.json');
var mockhealth = require('../../mockdata/health.json');

@Component({
    selector: 'user',
    templateUrl: './user.component.pug',
    providers: [ UserService ]
})

export class UserComponent implements OnInit {

    constructor(public route: ActivatedRoute, public router: Router, private userService: UserService) {
       this.loading = true;
    }

    @Input() client: Object = {};
    loading: boolean = true;
    disabilityInfo: any;
    sub: any;
    uuid: any;

    buildUserPage(response: any) {
        this.client = response;
        this.loading = false;
        console.log(this.client);
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.uuid = params['id']
        });
        this.userService.getUserDetails(this.uuid).then(response => {
            this.buildUserPage(response)
        });
    }


}