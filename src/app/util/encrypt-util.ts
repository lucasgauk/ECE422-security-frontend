import * as CryptoJS from 'crypto-js';

export class EncryptUtil {

    public static encryptString(stringToEncrypt: string, password: string) {
        return CryptoJS.AES.encrypt(stringToEncrypt, password).toString();
    }

    public static decryptString(stringToDecrypt: string, password: string) {
        return CryptoJS.AES.decrypt(stringToDecrypt, password).toString(CryptoJS.enc.Utf8);
    }
}