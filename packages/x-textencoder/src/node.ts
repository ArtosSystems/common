// Copyright 2017-2021 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import util from 'util';

class NodeFallback {
  #encoder: util.TextEncoder;

  constructor () {
    this.#encoder = new util.TextEncoder();
  }

  // For a Jest 26.0.1 environment, Buffer !== Uint8Array
  encode (value: string): Uint8Array {
    const encoded = this.#encoder.encode(value);

    return Uint8Array.from(encoded);
  }
}

export const TextEncoder = typeof global.TextEncoder === 'undefined'
  ? NodeFallback as unknown as typeof global.TextEncoder
  : global.TextEncoder;
