import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SpreadSheetData } from './spreadsheet-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'soar-information-center';
  sheetData: SpreadSheetData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = "https://sheet.best/api/sheets/4f88bc31-a0c9-451e-8ecd-7fa2b667563d";
    this.http.get<SpreadSheetData[]>(url).subscribe(sheetData => {
      sheetData.forEach(dataPoint => {
        this.sheetData.push({
          project: dataPoint["Project"],
          date: dataPoint["Date"],
          updateType: dataPoint["Type of Update"],
          updateMessage: dataPoint["Update Message"]
        })
      })
    })
  }
}
