sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"wipro/pmschaltfeld/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("wipro.pmschaltfeld.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this);
		
     			var oRouter = this.getRouter();
     			oRouter.initialize();
     

			// set the device model
			// this.setModel(models.createDeviceModel(), "device");
			
		}
		// createContent: function()
  //   		{
  //   	     var oView = sap.ui.view("idRoot", 
  //                	{
    	
  //  		viewName: "wipro.pmschaltfeld.view.App",
  //  		type: sap.ui.core.mvc.ViewType.XML
  //                   	});
                     	
  //                   	return oView;
    	
  //   		}
	
	});
});