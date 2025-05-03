declare module "@salesforce/apex/fetchStatement.getStatement" {
  export default function getStatement(param: {ruId: any, month: any, year: any}): Promise<any>;
}
declare module "@salesforce/apex/fetchStatement.getStatementByDate" {
  export default function getStatementByDate(param: {month: any, year: any}): Promise<any>;
}
