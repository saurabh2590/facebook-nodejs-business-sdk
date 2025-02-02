/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * MediaFingerprint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaFingerprint extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      duration_in_sec: 'duration_in_sec',
      fingerprint_content_type: 'fingerprint_content_type',
      fingerprint_type: 'fingerprint_type',
      id: 'id',
      metadata: 'metadata',
      title: 'title',
      universal_content_id: 'universal_content_id',
    });
  }

  static get FingerprintContentType (): Object {
    return Object.freeze({
      am_songtrack: 'AM_SONGTRACK',
      episode: 'EPISODE',
      movie: 'MOVIE',
      other: 'OTHER',
      songtrack: 'SONGTRACK',
    });
  }
  static get FingerprintValidity (): Object {
    return Object.freeze({
      expired: 'EXPIRED',
      expiring: 'EXPIRING',
      valid: 'VALID',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): MediaFingerprint {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): MediaFingerprint {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
