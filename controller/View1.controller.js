sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("wipro.pmschaltfeld.controller.View1", {

		onInit: function() {
			// var oModel = new sap.ui.model.json.JSONModel();
			// oModel.setData({
			// 	"productData": {
			// 		"PRODUCT_ID": "9889327716"
			// 	}
			// });

			// 	this.getView().setModel(oModel, "shashank");
			// 
		},

		onSubmit: function()
		{
			var floc = this.getView().byId("floc");
			var iflow = floc.getValue();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{
				ip_fval : iflow
			});

		},
		oFragFilter: null,
		oFragCity: null,
		inpField: null,

		onF4Help: function(oEvent) {
		
			this.inpField = oEvent.getSource();
			var lastValue = this.inpField.getValue();
		
			if (!this.oFragCity) {
				this.oFragCity = new sap.ui.xmlfragment("idFilter",
					"wipro.pmschaltfeld.fragments.popup", this);

				this.getView().addDependent(this.oFragCity);
     
				this.oFragCity.bindAggregation("items", {
					path: '/searchHelpSet',
					template: new sap.m.DisplayListItem({
						label: "{TPLNR}",
						value: "{PLTXT}"
					})
				});

			}
			this.oFragCity.setMultiSelect(false);
			this.oFragCity.open();
		},

		onItemSel: function(oEvent) {

			var sellItemTitle = oEvent.getParameter("selectedItem").getLabel();
			this.inpField.setValue(sellItemTitle);

		},
		
		onSearchPop :function(oEvent)
		{
			var searchVal = oEvent.getParameter("query");

			if (!searchVal)
			{
				 searchVal = oEvent.getParameter("newValue");
			}
			var oFilter = new sap.ui.model.Filter("TPLNR",sap.ui.model.FilterOperator.EQ,searchVal);
			// var oCat = new sap.ui.model.Filter("mstat",sap.ui.model.FilterOperator.Contains,searchVal);
			// var oKombi = new sap.ui.model.Filter(
			// 	{
			// 		filters: [oFilter,oCat],
			// 		and : false
			// 	});
			var aFilter = [oFilter];
		
			var oList = this.getView().byId("idFilter--pop");
			oList.getBinding("items").filter(aFilter);
		}

	});
});