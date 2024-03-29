/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

		/**
		 * @classdesc
		 * A dummy implementation that does not really utilize the cache. Can be used when one wants to switch-off
		 * the cache without changing its code
		 * @private
		 * @experimental
		 * @since 1.37.0
		 * @namespace
		 * @alias sap.ui.core.cache.CacheManagerNOP
		 */
		var CacheManagerNOP = {
			name: "CacheManagerNOP",
			set: function () {
				return Promise.resolve();
			},
			get: function () {
				return Promise.resolve(undefined);
			},
			has: function () {
				return Promise.resolve(false);
			},
			del: function () {
				return Promise.resolve();
			},
			reset: function () {
				return Promise.resolve();
			},
			init: function() {
				return Promise.resolve(this);
			},
			_db: {
				close: function () {
				}
			},
			_getCount: function () {
				return Promise.resolve(0);
			},
			_destroy: function () {
			}
		};

		export default CacheManagerNOP;

