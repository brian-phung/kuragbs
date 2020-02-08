/// <reference types="google-apps-script" />
declare type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
declare type Spread = GoogleAppsScript.Spreadsheet.Spreadsheet;
export declare namespace KuraGBS.GSuite {
    class ActiveSpreadApp {
        id: string | undefined;
        spread: Spread;
        currentSheet: Sheet | undefined;
        constructor();
        onGetActiveSpread(): Spread;
        onGetSheetValues(sheetName: string, sheetRange: string): any[][];
        onGetSheetValuesAndFormulas(sheetName: string, sheetRange: string): any[][][];
    }
}
export {};
