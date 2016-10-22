import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
    public constructor(private http: Http) { }

    public getUserDetails() {
        var userUrl = 'placeholder'
        return this.http.get(userUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}