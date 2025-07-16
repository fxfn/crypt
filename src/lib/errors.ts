export class CryptSettingsError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CryptSettingsError'
  }
}