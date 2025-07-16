import { createDecipheriv } from "node:crypto"

export function createDecryptor(key: Buffer, iv: string, algorithm: string = 'aes-256-cbc') {

  const decryptor = createDecipheriv(algorithm, key, iv)

  return (input: string) => {
    const encryptedBytes = Buffer.from(input, 'base64')
    let decrypted = decryptor.update(encryptedBytes)
    return Buffer.concat([decrypted, decryptor.final()]).toString()
  }
}