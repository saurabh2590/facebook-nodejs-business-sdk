/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdAccountAdVolume
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdVolume extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor_id: 'actor_id',
      has_hit_total_live_ads_limit: 'has_hit_total_live_ads_limit',
      live_ads_quota_left: 'live_ads_quota_left',
      total_live_ads: 'total_live_ads',
      total_live_ads_in_current_account: 'total_live_ads_in_current_account',
      total_live_ads_limit: 'total_live_ads_limit',
    });
  }

}
