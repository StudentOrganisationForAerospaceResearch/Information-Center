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
        let url = 'https://sheet.best/api/sheets/4f88bc31-a0c9-451e-8ecd-7fa2b667563d'
        return this.http.get<SpreadSheetData[]>(url)
    }
}
