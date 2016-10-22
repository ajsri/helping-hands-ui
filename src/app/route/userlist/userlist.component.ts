import { Component, OnInit, OnChanges } from '@angular/core';
import { UserlistService } from './userlist.service';

var mocks = require('../../mockdata/users.json');


@Component({
    selector: 'user-list',
    templateUrl: './userlist.component.pug',
    providers: [ UserlistService ]
})

export class UserList implements OnInit {
    data = mocks

    public constructor(private userListService: UserlistService){

    }

    userList: any[]
    ngOnInit() {
        this.userListService.getUserList().then(response => {
            this.buildUserList(response);
        })
    }

    public buildUserList(data: any[]) {
        this.userList = data;
    }
}
