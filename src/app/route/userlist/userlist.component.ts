import { Component, OnInit, Input } from '@angular/core';
import { UserlistService } from './userlist.service';

var mocks = require('../../mockdata/users.json');


@Component({
    selector: 'user-list',
    templateUrl: './userlist.component.pug',
    providers: [ UserlistService ]
})

export class UserList implements OnInit {
    @Input() data: any[] = [];
    _loading: boolean;

    public constructor(private userListService: UserlistService){
        this.data.length < 1 ? this._loading = true : this._loading = false;
    }

    userList: any[]
    ngOnInit() {
        this.userListService.getUserList().then(response => {
            this.buildUserList(response);
        })
    }

    public buildUserList(data: any[]) {
        this.data = data;
        this._loading = false;
    }
}
