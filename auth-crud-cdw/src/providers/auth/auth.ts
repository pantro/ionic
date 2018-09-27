import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public isLoggedIn: boolean = false;
  private api: string = "https://a3f5f22c.ngrok.io/api-rest-users-mysql"

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  public login(user) {
    return this.http.post(`${this.api}/login`, user).map(
      (res: Response) => {
        return res.json();
      }
    )
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
