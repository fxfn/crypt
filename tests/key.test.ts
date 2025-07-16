import { describe, expect, it } from "vitest"
import { createKey } from "../src/lib/key"

describe('createKey', () => {
  it('should create a buffer of a key', () => {
    const passphrase = '123456'
    const salt = '123456'
    const key = createKey(passphrase, salt, 1000, 32, 'sha1')
    expect(key).toEqual(Buffer.from([0x9d, 0x50, 0x68, 0x73]))
  })
})
