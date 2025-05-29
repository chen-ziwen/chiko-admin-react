import CryptoJS from 'crypto-js';

export class Crypto<T extends object> {
  private secret: string;
  constructor(secret: string) { 
    this.secret = secret;
  }

  encrypt(data: T): string {
    const jsonData = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonData, this.secret).toString();
  }

  decrypt(encryptedData: string) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secret);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(decryptedData) as T;
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  }
}