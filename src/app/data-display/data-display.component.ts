import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HttpService } from '../http-service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() updateType: string

  info = [
    {
      project: 'Test Project',
      updateMessage: 'This is an update'
    }
  ]

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.fetchSheetData().subscribe(sheetData => {
    //   sheetData.forEach(dataPoint => {
    //     if (dataPoint.updateType == this.updateType) {
    //       this.info.push({
    //         project: dataPoint["Project"],
    //         updateMessage: dataPoint["Update Message"]
    //       })
    //     }
    //   })
    // })
  }

}
