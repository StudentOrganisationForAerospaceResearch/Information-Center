import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http-service';
import { SpreadSheetData } from '../spreadsheet-data.model';

@Component({
  selector: 'app-successes',
  templateUrl: './successes.component.html',
  styleUrls: ['./successes.component.scss']
})
export class SuccessesComponent implements OnInit {
  successes: SpreadSheetData[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.fetchSheetData().subscribe(sheetData => {
        sheetData.forEach(dataPoint => {
        if (dataPoint["Type of Update"] === "Success") {
          this.successes.push({
            project: dataPoint["Project"],
            date: dataPoint["Date"],
            updateMessage: dataPoint["Update Message"],
            updateType: dataPoint["Type of Update"]
          })
        }
      })
    })
  }

}
