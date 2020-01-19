import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpreadSheetData } from './spreadsheet-data.model';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    data: SpreadSheetData[] = [];

    constructor(private http: HttpClient) {}

    fetchSheetData() {
        let url = 'https://sheet.best/api/sheets/46ffbfc5-f275-41e3-addf-0a6521cb706a'
        return this.http.get<SpreadSheetData[]>(url)
    }
}
