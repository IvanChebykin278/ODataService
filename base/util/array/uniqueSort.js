/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

 import assert from '../../assert';

	/**
	 * Sorts the given array in-place and removes any duplicates (identified by "===").
	 *
	 * Use <code>jQuery.unique()</code> for arrays of DOMElements.
	 *
	 * @function
	 * @since 1.58
	 * @param {any[]} aArray An Array of any type
	 * @alias module:sap/base/util/array/uniqueSort
	 * @return {any[]} Same array as given (for chaining)
	 * @public
	 */
	var fnUniqueSort = function(aArray) {
		assert(aArray instanceof Array, "uniqueSort: input parameter must be an Array");
		var l = aArray.length;
		if ( l > 1 ) {
			aArray.sort();
			var j = 0;
			for (var i = 1; i < l; i++) {
				// invariant: i is the entry to check, j is the last unique entry known so far
				if ( aArray[i] !== aArray[j] ) {
					aArray[++j] = aArray[i];
				}
			}
			// cut off the rest - if any
			if ( ++j < l ) {
				aArray.splice(j, l - j);
			}
		}
		return aArray;
	};
	export default fnUniqueSort;