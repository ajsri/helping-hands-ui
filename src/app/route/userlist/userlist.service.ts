import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserlistService {
    public constructor(private http: Http) { }

    public getUserList() {
        return this.http.get('placeholder')
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}