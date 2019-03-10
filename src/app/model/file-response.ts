export class FileResponse {

    private _bytes: string;
    private _extension: string;
    private _createdAt: Date;
    private _modifiedAt: Date;

    constructor(bytes: string, extension: string, createdAt: Date, modifiedAt: Date) {
        this._bytes = bytes;
        this._extension = extension;
        this._createdAt = createdAt;
        this._createdAt.setMilliseconds(0);
        this._modifiedAt = modifiedAt;
        this._modifiedAt.setMilliseconds(0);
    }

    public static fromJson(json: any): FileResponse {
        return new FileResponse(
            json['bytes'],
            json['extension'],
            new Date(json['createdAt']),
            new Date(json['modifiedAt'])
        );
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
