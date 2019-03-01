import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {FileResponse} from '../model/file-response';
import {FileTypeResponse} from '../model/file-type-response';
import {FileUpload} from '../model/file-upload';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpService: HttpService) {}

  verifyUser(username: string, password: string): Observable<User> {
    const qp = {};
    qp['username'] = username;
    qp['password'] = password;
    return this.httpService.getMany(qp, 'user/login');
  }

    getFiles(path?: string): Observable<FileTypeResponse[]> {
        const qp = {};
        if (path) {
          qp['path'] = path;
        }
        return this.httpService.getMany(qp, 'file');
    }

    getBytes(path: string): Observable<FileResponse> {
      const qp = {};
      qp['path'] = path;
      return this.httpService.getMany(qp, 'file/bytes');
    }

    uploadFile(uploadRequest: FileUpload): Observable<any> {
      return this.httpService.postTo(uploadRequest, 'file');
    }
}


