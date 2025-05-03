declare module "@salesforce/apex/DatatableController.getData" {
  export default function getData(param: {month: any, year: any}): Promise<any>;
}
declare module "@salesforce/apex/DatatableController.saveData" {
  export default function saveData(param: {data: any}): Promise<any>;
}
declare module "@salesforce/apex/DatatableController.saveEnergyBillAmountToCustomSetting" {
  export default function saveEnergyBillAmountToCustomSetting(param: {energyBillAmount: any}): Promise<any>;
}
