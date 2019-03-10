export class FileTypeResponse {

    private _path: string;
    private _fileType: string;
    private _createdAt: Date;
    private _modifiedAt: Date;


    constructor(path: string, fileType: string, createdAt: Date, modifiedAt: Date) {
        this._path = path;
        this._fileType = fileType;
        this._createdAt = createdAt;
        this._createdAt.setMilliseconds(0);
        this._modifiedAt = modifiedAt;
        this._modifiedAt.setMilliseconds(0);
    }

    public static fromJson(json:any): FileTypeResponse {
        return new FileTypeResponse(
            json['path'],
            json['fileType'],
            new Date(json['createdAt']),
            new Date(json['modifiedAt'])
        )
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