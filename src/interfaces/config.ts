export interface ICryptConfig {
  algorithm: string
  iv: string
  digest: string
  passphrase: string
  salt: string
  keySize?: number
  iterations?: number
}