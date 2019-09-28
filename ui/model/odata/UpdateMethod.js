/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */


	/**
	 * Different methods for update operations.
	 *
	 * @enum {string}
	 * @public
	 * @alias sap.ui.model.odata.UpdateMethod
	 */
	var UpdateMethod = {
		/**
		 * Update requests will be send with HTTP method <code>MERGE</code>.
		 *
		 * @public
		 */
		Merge: "MERGE",

		/**
		 * Update requests will be send with HTTP method <code>PUT</code>.
		 * @public
		 */
		Put: "PUT"
	};

	export default UpdateMethod;
