export class FileTypeResponse {

    private _path: string;
    private _fileType: string;

    constructor(path: string, fileType: string) {
        this._path = path;
        this._fileType = fileType;
    }

    public static fromJson(json:any): FileTypeResponse {
        return new FileTypeResponse(
            json['path'],
            json['fileType']
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
}