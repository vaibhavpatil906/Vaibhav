declare module "@salesforce/apex/ElectricityBillCalculator.getPreviousReading" {
  export default function getPreviousReading(param: {ruId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElectricityBillCalculator.saveRentalEntries" {
  export default function saveRentalEntries(param: {ruId: any, prevReading: any, curReading: any, month: any, year: any, waterbill: any}): Promise<any>;
}
declare module "@salesforce/apex/ElectricityBillCalculator.saveNewAgreement" {
  export default function saveNewAgreement(param: {ruId: any, agreeName: any, deposit: any, mRent: any, renter: any}): Promise<any>;
}
declare module "@salesforce/apex/ElectricityBillCalculator.getStatement" {
  export default function getStatement(param: {ruId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElectricityBillCalculator.savePayment" {
  export default function savePayment(param: {ruId: any, amount: any}): Promise<any>;
}
