import { pbkdf2Sync } from "node:crypto";

export function createKey(passphrase: string, salt: string, iterations: number = 1000, keySize: number = 256, digest: string = 'sha1') {
  return Buffer.from(
    pbkdf2Sync(
      passphrase,
      salt,
      iterations,
      keySize / 8,
      digest
    )
  )
}