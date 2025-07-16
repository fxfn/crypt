export abstract class ICryptService {
  abstract encrypt(value: string): string
  abstract decrypt(value: string): string
}