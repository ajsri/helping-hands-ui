import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
    public constructor(private http: Http) { }

    public getUserDetails(id: any) {
        var userUrl = `http://52.87.121.117:8080/api/client/getClient?id=${id}`
        return this.http.get(userUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}