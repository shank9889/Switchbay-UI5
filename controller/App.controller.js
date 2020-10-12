sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"wipro/pmschaltfeld/model/models"
], function(Controller,myModel) {
	"use strict";

	return Controller.extend("wipro.pmschaltfeld.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf wipro.pmschaltfeld.view.App
		 */
		// onInit: function() {
		// 	var oView1 = new sap.ui.view("idView1", {
		// 		viewName: "wipro.pmschaltfeld.view.View1",
		// 		type: sap.ui.core.mvc.ViewType.XML
		// 	});

		// 	var oView2 = new sap.ui.view("idView2", {
		// 		viewName: "wipro.pmschaltfeld.view.View2",
		// 		type: sap.ui.core.mvc.ViewType.XML
		// 	});

		// 	var oApp = this.getView().byId("myApp");
			
		                        

		// 	oApp.addPage(oView1).addPage(oView2);
			
		// 	 var oJSONModel = myModel.createDeviceModel();
  //              this.getView().setModel(oJSONModel);

		// }

	});
});