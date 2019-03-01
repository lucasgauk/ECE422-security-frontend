export class FileUtil {

    public static makeBlob(bytes: string): Blob {
        const byteChars = atob(bytes);
        const byteNumbers = new Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) {
            byteNumbers[i] = byteChars.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        return new Blob([byteArray], {type: 'application/octet-stream'});
    }

    public static saveAs(blob: Blob, fileName: string, extension: string) {
        const url = window.URL.createObjectURL(blob);

        const anchorElem = document.createElement('a');
        anchorElem.href = url;
        anchorElem.download = fileName + '.' + extension;

        document.body.appendChild(anchorElem);
        anchorElem.click();

        document.body.removeChild(anchorElem);

        setTimeout(function() {
            window.URL.revokeObjectURL(url);
        }, 1000);
    }

    public static getFileName(path: string) {
        return path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    }

}
