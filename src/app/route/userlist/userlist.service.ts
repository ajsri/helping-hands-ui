import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserlistService {
    public constructor(private http: Http) { }

    public getUserList() {
        return this.http.get('http://52.87.121.117:8080/api/client/getClientList')
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}