import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient, // Client to make requests.
  ) {}

  getMany(queryParams: any, endPoint: string, username: string, password: string): Observable<any> {
    const apiUrl = `${environment.apiUrl}/${endPoint}`;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(`${username}:${password}`)});
    return this.httpClient
      .get(apiUrl, {headers: headers, params: queryParams});
  }

  postTo(queryParams: any, endPoint: string, username: string, password: string): Observable<any> {
    const apiUrl = `${environment.apiUrl}/${endPoint}`;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(`${username}:${password}`)});
    return this.httpClient
        .post(apiUrl, queryParams, {headers: headers});
  }

}
