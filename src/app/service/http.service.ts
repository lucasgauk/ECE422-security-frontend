import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient, // Client to make requests.
  ) {}

  getMany(queryParams: any, endPoint: string): Observable<any> {
    const apiUrl = `${environment.apiUrl}/${endPoint}`;
    return this.httpClient
      .get(apiUrl, {params: queryParams});
  }

}
