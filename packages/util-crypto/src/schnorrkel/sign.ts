// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types';

import { assert, u8aToU8a } from '@polkadot/util';
import { sr25519Sign } from '@polkadot/wasm-crypto';

/**
 * @name schnorrkelSign
 * @description Returns message signature of `message`, using the supplied pair
 */
export function schnorrkelSign (message: Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  assert(publicKey?.length === 32, 'Expected a valid publicKey, 32-bytes');
  assert(secretKey?.length === 64, 'Expected a valid secretKey, 64-bytes');

  const messageU8a = u8aToU8a(message);

  return sr25519Sign(publicKey, secretKey, messageU8a);
}
