import * as CryptoJS from 'crypto-js';

export class EncryptUtil {

    public static encryptString(stringToEncrypt: string, password: string) {
        return CryptoJS.AES.encrypt(stringToEncrypt, password).toString();
    }

    public static decryptString(stringToDecrypt: string, password: string) {
        let decryptedString = CryptoJS.AES.decrypt(stringToDecrypt, password).toString(CryptoJS.enc.Utf8);
        if (decryptedString === '') { decryptedString = 'Could not decrypt with your key.'; }
        return decryptedString;
    }

    public static sanitizeString(text: string): string {
        return text.replace('/', 'fwd')
            .replace('\\', 'bck')
            .replace(':', 'col')
            .replace('*', 'str')
            .replace('\"', 'quo')
            .replace('<', 'sml')
            .replace('>', 'grt')
            .replace('+', 'plu')
            .replace('|', 'bar');
    }

    public static deSanitizeString(text: string): string {
        return text
            .replace('fwd', '/')
            .replace('bck', '\\')
            .replace('col', ':')
            .replace('str', '*')
            .replace('quo', '\"')
            .replace('sml', '<')
            .replace('grt', '>')
            .replace('plu', '+')
            .replace('bar', '|');
    }
}
