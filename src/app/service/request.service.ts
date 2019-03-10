import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {FileResponse} from '../model/file-response';
import {FileTypeResponse} from '../model/file-type-response';
import {FileUpload} from '../model/file-upload';
import {FileDelete} from "../model/file-delete";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

    private _username: string;
    private _password: string;

  constructor(private httpService: HttpService) {}

    verifyUser(username: string, password: string): Observable<User> {
    const qp = {};
    qp['username'] = this._username = username;
    qp['password'] = this._password = password;
    return this.httpService.getMany(qp, 'user/login', this._username, this._password);
  }

    getFiles(path?: string): Observable<FileTypeResponse[]> {
        const qp = {};
        if (path) {
          qp['path'] = path;
        }
        return this.httpService.getMany(qp, 'file', this._username, this._password);
    }

    getBytes(path: string): Observable<FileResponse> {
      const qp = {};
      qp['path'] = path;
      return this.httpService.getMany(qp, 'file/bytes', this._username, this._password);
    }

    uploadFile(uploadRequest: FileUpload): Observable<any> {
      return this.httpService.postTo(uploadRequest, 'file', this._username, this._password);
    }

    deleteFile(path: string): Observable<any> {
      return this.httpService.postTo(new FileDelete(path), 'file/delete', this._username, this._password);
    }
}


