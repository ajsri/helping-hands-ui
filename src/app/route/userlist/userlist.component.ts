import { Component } from '@angular/core';
var mocks = require('../../mockdata/users.json');


@Component({
    selector: 'user-list',
    templateUrl: './userlist.component.pug'
})

export class UserList {
    data = mocks
    debug(uid: any) {
        console.log(uid)
    }
    public constructor(){

    }
}