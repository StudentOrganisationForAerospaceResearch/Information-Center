import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http-service';
import { SpreadSheetData } from '../spreadsheet-data.model';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: SpreadSheetData[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.fetchSheetData().subscribe(sheetData => {
      sheetData.forEach(dataPoint => {
        if (dataPoint["Type of Update"] === "Goal") {
          this.goals.push({
            project: dataPoint["Project"],
            date: dataPoint["Date"],
            updateType: dataPoint["Type of Update"],
            updateMessage: dataPoint["Update Message"]
          })
        }
      })
    })
  }

}
