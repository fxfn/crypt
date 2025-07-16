import { describe, it, expect } from "vitest"
import { createEncryptor } from "../src/lib/encryptor"
import { createKey } from "../src/lib/key"

describe('createEncryptor', () => {

  it('should return a function', () => {
    const key = createKey(
      '123456',
      '123456'
    )

    const iv = '0123456789123456'

    const encryptor = createEncryptor(key, iv, 'aes-256-cbc')
    expect(encryptor).toBeDefined()
  })

  it('encryptor should encrypt a value correctly', () => {
    const key = createKey(
      '123456',
      '123456'
    )

    const iv = '0123456789123456'

    const encryptor = createEncryptor(key, iv, 'aes-256-cbc')
    const encrypted = encryptor("MySuperSecret")
    expect(encrypted).toBe("pRGqL6MxbABuWwhWnV3ShA==")
  })
})