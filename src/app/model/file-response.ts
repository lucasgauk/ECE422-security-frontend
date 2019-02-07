export class FileResponse {

    private _bytes: string;
    private _extension: string;

    constructor(bytes: string, extension: string) {
        this._bytes = bytes;
        this._extension = extension;
    }

    public static fromJson(json: any): FileResponse {
        return new FileResponse(
            json['bytes'],
            json['extension']
        )
    }

    get bytes(): string {
        return this._bytes;
    }

    set bytes(value: string) {
        this._bytes = value;
    }

    get extension(): string {
        return this._extension;
    }

    set extension(value: string) {
        this._extension = value;
    }
}