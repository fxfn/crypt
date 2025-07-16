import { createCipheriv, pbkdf2Sync } from "node:crypto"

export function createEncryptor(key: Buffer, iv: string, algorithm: string = 'aes-256-cbc') {

  const encryptor = createCipheriv(algorithm, key, iv)

  return (input: string) => {
    let encrypted = encryptor.update(input, 'ascii', 'base64')
    encrypted += encryptor.final('base64')
    return encrypted
  }
}