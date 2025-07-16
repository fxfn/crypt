import { describe, it, expect } from "vitest"
import { createDecryptor } from "../src/lib/decryptor"
import { createKey } from "../src/lib/key"

describe('createDecryptor', () => {

  it('should return a function', () => {
    const key = createKey(
      '123456',
      '123456'
    )

    const iv = '0123456789123456'

    const decryptor = createDecryptor(key, iv, 'aes-256-cbc')
    expect(decryptor).toBeDefined()
  })

  it('decryptor should decrypt a value correctly', () => {
    const key = createKey(
      '123456',
      '123456'
    )

    const iv = '0123456789123456'

    const decryptor = createDecryptor(key, iv, 'aes-256-cbc')
    const decrypted = decryptor("pRGqL6MxbABuWwhWnV3ShA==")
    expect(decrypted).toBe("MySuperSecret")
  })
})