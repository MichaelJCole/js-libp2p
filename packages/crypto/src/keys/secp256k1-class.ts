import { CodeError } from '@libp2p/interface'
import { sha256 } from 'multiformats/hashes/sha2'
import { equals as uint8ArrayEquals } from 'uint8arrays/equals'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import { isPromise } from '../util.js'
import { exporter } from './exporter.js'
import * as keysProtobuf from './keys.js'
import * as crypto from './secp256k1.js'
import type { PublicKey, PrivateKey } from '@libp2p/interface'
import type { Multibase } from 'multiformats'
import type { Uint8ArrayList } from 'uint8arraylist'

export class Secp256k1PublicKey implements PublicKey<'secp256k1'> {
  private readonly _key: Uint8Array

  constructor (key: Uint8Array) {
    crypto.validatePublicKey(key)
    this._key = key
  }

  verify (data: Uint8Array | Uint8ArrayList, sig: Uint8Array): boolean {
    return crypto.hashAndVerify(this._key, sig, data)
  }

  marshal (): Uint8Array {
    return crypto.compressPublicKey(this._key)
  }

  get bytes (): Uint8Array {
    return keysProtobuf.PublicKey.encode({
      Type: keysProtobuf.KeyType.Secp256k1,
      Data: this.marshal()
    }).subarray()
  }

  equals (key: any): boolean {
    return uint8ArrayEquals(this.bytes, key.bytes)
  }

  async hash (): Promise<Uint8Array> {
    const p = sha256.digest(this.bytes)
    let bytes: Uint8Array

    if (isPromise(p)) {
      ({ bytes } = await p)
    } else {
      bytes = p.bytes
    }

    return bytes
  }
}

export class Secp256k1PrivateKey implements PrivateKey<'secp256k1'> {
  private readonly _key: Uint8Array
  private readonly _publicKey: Uint8Array

  constructor (key: Uint8Array, publicKey?: Uint8Array) {
    this._key = key
    this._publicKey = publicKey ?? crypto.computePublicKey(key)
    crypto.validatePrivateKey(this._key)
    crypto.validatePublicKey(this._publicKey)
  }

  sign (message: Uint8Array | Uint8ArrayList): Uint8Array | Promise<Uint8Array> {
    return crypto.hashAndSign(this._key, message)
  }

  get public (): Secp256k1PublicKey {
    return new Secp256k1PublicKey(this._publicKey)
  }

  marshal (): Uint8Array {
    return this._key
  }

  get bytes (): Uint8Array {
    return keysProtobuf.PrivateKey.encode({
      Type: keysProtobuf.KeyType.Secp256k1,
      Data: this.marshal()
    }).subarray()
  }

  equals (key: any): boolean {
    return uint8ArrayEquals(this.bytes, key.bytes)
  }

  hash (): Uint8Array | Promise<Uint8Array> {
    const p = sha256.digest(this.bytes)

    if (isPromise(p)) {
      return p.then(({ bytes }) => bytes)
    }

    return p.bytes
  }

  /**
   * Gets the ID of the key.
   *
   * The key id is the base58 encoding of the SHA-256 multihash of its public key.
   * The public key is a protobuf encoding containing a type and the DER encoding
   * of the PKCS SubjectPublicKeyInfo.
   */
  async id (): Promise<string> {
    const hash = await this.public.hash()
    return uint8ArrayToString(hash, 'base58btc')
  }

  /**
   * Exports the key into a password protected `format`
   */
  async export (password: string, format = 'libp2p-key'): Promise<Multibase<'m'>> {
    if (format === 'libp2p-key') {
      return exporter(this.bytes, password)
    } else {
      throw new CodeError(`export format '${format}' is not supported`, 'ERR_INVALID_EXPORT_FORMAT')
    }
  }
}

export function unmarshalSecp256k1PrivateKey (bytes: Uint8Array): Secp256k1PrivateKey {
  return new Secp256k1PrivateKey(bytes)
}

export function unmarshalSecp256k1PublicKey (bytes: Uint8Array): Secp256k1PublicKey {
  return new Secp256k1PublicKey(bytes)
}

export async function generateKeyPair (): Promise<Secp256k1PrivateKey> {
  const privateKeyBytes = crypto.generateKey()
  return new Secp256k1PrivateKey(privateKeyBytes)
}
