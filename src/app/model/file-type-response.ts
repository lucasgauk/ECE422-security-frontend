import {EncryptUtil} from '../util/encrypt-util';
import {environment} from '../../environments/environment';

export class FileTypeResponse {

    private _id: number;
    private _path: string;
    private _fileType: string;
    private _createdAt: Date;
    private _modifiedAt: Date;


    constructor(id: number, path: string, fileType: string, createdAt: Date, modifiedAt: Date) {
        this._id = id;
        this._path = path;
        this._fileType = fileType;
        this._createdAt = createdAt;
        this._createdAt.setMilliseconds(0);
        this._modifiedAt = modifiedAt;
        this._modifiedAt.setMilliseconds(0);
    }

    public static fromJson(json: any): FileTypeResponse {
        const path: string = json['path'];
        return new FileTypeResponse(
            json['id'],
            EncryptUtil.decryptString(EncryptUtil.deSanitizeString(path.substring(0, path.lastIndexOf('.'))), environment.encryptCode),
            json['fileType'],
            new Date(json['createdAt']),
            new Date(json['modifiedAt'])
        );
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }

    get fileType(): string {
        return this._fileType;
    }

    set fileType(value: string) {
        this._fileType = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get modifiedAt(): Date {
        return this._modifiedAt;
    }

    set modifiedAt(value: Date) {
        this._modifiedAt = value;
    }
}
