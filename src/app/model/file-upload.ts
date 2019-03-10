export class FileUpload {
    public bytes: string;
    public extension: string;
    public fileName: string;
    public path: string;

    constructor(bytes: string, extension: string, fileName: string, path: string) {
        this.bytes = bytes;
        this.extension = extension;
        this.fileName = fileName;
        this.path = path;
    }
}
