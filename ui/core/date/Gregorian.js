/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

import UniversalDate from './UniversalDate';
import CalendarType from '../CalendarType';

// Provides class sap.ui.core.date.Gregorian


	/**
	 * The Gregorian date class
	 *
	 * @class
	 *
	 * @private
	 * @alias sap.ui.core.date.Gregorian
	 * @extends sap.ui.core.date.UniversalDate
	 */
	var Gregorian = UniversalDate.extend("sap.ui.core.date.Gregorian", /** @lends sap.ui.core.date.Gregorian.prototype */ {
		constructor: function() {
			this.oDate = this.createDate(Date, arguments);
			this.sCalendarType = CalendarType.Gregorian;
		}
	});

	Gregorian.UTC = function() {
		return Date.UTC.apply(Date, arguments);
	};

	Gregorian.now = function() {
		return Date.now();
	};

	export default Gregorian;