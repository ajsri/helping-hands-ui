import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
var mockdata = require('../../mockdata/users.json')

@Component({
    selector: 'user',
    templateUrl: './user.component.pug'
})

export class UserComponent implements OnInit {

    constructor(public route: ActivatedRoute, public router: Router) {

    }

    mockdata = mockdata.clients
    client: any
    results: any
    sub: any
    uuid: any

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.uuid = params['id']
        })
        this.results = this.mockdata.filter((client: any) => {
            return client.UUID == this.uuid;
        })

        this.client = this.results[0]
    }


}