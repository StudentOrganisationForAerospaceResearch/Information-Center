import { Component, OnInit } from '@angular/core';

import { SpreadSheetData } from '../spreadsheet-data.model';
import { HttpService } from '../http-service';

@Component({
  selector: 'app-roadblocks',
  templateUrl: './roadblocks.component.html',
  styleUrls: ['./roadblocks.component.scss']
})
export class RoadblocksComponent implements OnInit {
  roadblocks: SpreadSheetData[] = []
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.fetchSheetData().subscribe(sheetData => {
      sheetData.forEach(dataPoint => {
        if (dataPoint["Type of Update"] === "RoadBlock") {
          this.roadblocks.push({
            project: dataPoint["Project"],
            updateMessage: dataPoint["Update Message"],
            date: dataPoint["Date"],
            updateType: "Type of Update"
          })
        }
      })
    })
  }

}
