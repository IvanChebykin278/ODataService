/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration sap.ui.model.FilterOperator


	/**
	* Binding type definitions.
	*
	* @enum {string}
	* @public
	* @alias sap.ui.model.BindingMode
	*/
	var BindingMode = {

			/**
			 * BindingMode default means that the binding mode of the model is used
			 * @public
			 */
			Default: "Default",

			/**
			 * BindingMode one time means value is only read from the model once
			 * @public
			 */
			OneTime: "OneTime",

			/**
			 * BindingMode one way means from model to view
			 * @public
			 */
			OneWay: "OneWay",

			/**
			 * BindingMode two way means from model to view and vice versa
			 * @public
			 */
			TwoWay: "TwoWay"

	};

	export default BindingMode;
