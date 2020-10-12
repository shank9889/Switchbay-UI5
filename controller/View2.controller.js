sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV"
	// "sap/m/PDFViewer"
	
], function(Controller, MessageBox,  Export, exportCSV) {
	"use strict";

	return Controller.extend("wipro.pmschaltfeld.controller.View2", {

		onInit: function() {

			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
		},
        lvFloc:null,
		herculis: function(oEvent) {
			this.lvFloc = oEvent.getParameter("arguments").ip_fval;
	      
			var filters = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Tplnr", sap.ui.model.FilterOperator.EQ, this.lvFloc)]
			});

			var binding = this.byId("suppTab").getBinding("items");
			binding.filter(filters);

			var oTable = this.byId("suppTab");
			oTable.setMode(sap.m.ListMode.MultiSelect);
		},

		onBack: function()

		{
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("master");
		},
		onExcel: function() {

			// getting model into oModel variable.
			// var lvFloc = '1010';
			var oFilter = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Tplnr", sap.ui.model.FilterOperator.EQ, this.lvFloc)]
			});
	
			var oModel = this.getView().getModel();
			var oExport = new Export({
				exportType: new exportCSV({
					// for xls....
					fileExtension: "xls",
					separatorChar: "\t",
					charset: "utf-8",
					mimeType: "application/vnd.ms-excel"

					// for CSV....
					/* charset: "utf-8",
					fileExtension:"csv",
					separatorChar:",",
					mimeType:"application/csv" */
				}),
				models: oModel,

				rows: {
					path: "/flocEquiSet",
					filters: oFilter 
					 //"{path: 'Tpnr', operator: 'EQ', value1: '1010'}"
		
				},
				columns: [{
					name: "Order",
					template: {
						content: "{Order}"
					}
				}, {
					name: "Functional Location",
					template: {
						content: "{Tplnr}"
					}
				}, {
					name: "Class",
					template: {
						content: "{Klasse}"
					}
				}, {
					name: "Descrition",
					template: {
						content: "{Pltxt}"
					}
				}]
			});
			oExport.saveFile().catch(function(oError) {
				sap.m.MessageToast.show("Generate is not possible beause no model was set");
			}).then(function() {
				oExport.destroy();
			});

		},
		onPdf: function(oEvent){
			
	// var opdfViewer = new PDFViewer();
	// this.getView().addDependent(opdfViewer);
	var sServiceURL = this.getView().getModel().sServiceUrl;
	var sSource = sServiceURL + "/DOCUMENTSet('" + this.lvFloc + "')/$value";
	// opdfViewer.setSource(sSource);
 //   opdfViewer.setTitle("Scahltfeld Report");
 //   opdfViewer.open();
			
	// var URL = "https://www.sapfioritrial.com/sap/opu/odata/sap/HCM_MY_PAYSTUBS_SRV/PDFPaystubs(SEQUENCENUMBER=1694,PersonnelAssignment='00100226')/$value";
        sap.m.URLHelper.redirect( sSource , true );
		}
	});

});