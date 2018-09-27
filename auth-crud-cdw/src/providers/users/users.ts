import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  private api: string = "https://a3f5f22c.ngrok.io/api-rest-users-mysql"

  constructor(public http: Http) {}

  public all(): Observable<any> {
    return this.http.get(this.api).map(this.extractData).catch(this.handleError);
  }

  public add(user): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.post(this.api, user).subscribe(() => {
        resolve(true);
      })
    });
  }

  public update(user): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.put(`${this.api}/${user.id}`, user).subscribe(() => {
        resolve(true);
      })
    })
  }

  public delete(id): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.delete(`${this.api}/${id}`).subscribe(() => {
        resolve(true);
      })
    })
  }

  public find(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
