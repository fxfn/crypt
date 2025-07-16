import { createEncryptor } from "../lib/encryptor"
import { createDecryptor } from "../lib/decryptor"
import { createKey } from "../lib/key"
import { ICryptConfig } from "../interfaces/config"
import { CryptSettingsError } from "../lib/errors"
import { ICryptService } from "../interfaces/crypt"

export class CryptService implements ICryptService {
  #config!: ICryptConfig

  constructor() {

    if (!process.env.CRYPT_IV || !process.env.CRYPT_PASSPHRASE || !process.env.CRYPT_SALT) {
      console.warn('[CRYPT] Missing required environment variables for crypt. This will produce an error in production.')
      console.warn('[CRYPT] Please set the following environment variables: CRYPT_IV, CRYPT_PASSPHRASE, CRYPT_SALT')
      
      if (process.env.NODE_ENV === 'production') {
        throw new CryptSettingsError('CRYPT_SETTINGS_MISSING')
      }
    }
    
    this.#config = {
      algorithm: 'aes-256-cbc',
      digest: 'sha1',
      iv: process.env.CRYPT_IV || 'xxxxxxxxxxxxxxxx',
      passphrase: process.env.CRYPT_PASSPHRASE || 'xxxxxxxxxxxxxxxx',
      salt: process.env.CRYPT_SALT || 'xxxxxxxx',
      keySize: 256,
      iterations: 1000
    }
  }

  get key() {
    return createKey(
      this.#config.passphrase,
      this.#config.salt,
      this.#config.iterations,
      this.#config.keySize,
      this.#config.digest
    )
  }

  encrypt(value: string) {
    return createEncryptor(this.key, this.#config.iv, this.#config.algorithm)(value)
  }

  decrypt(value: string) {
    return createDecryptor(this.key, this.#config.iv, this.#config.algorithm)(value)
  }
}