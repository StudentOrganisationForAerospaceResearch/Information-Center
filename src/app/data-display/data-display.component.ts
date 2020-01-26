import { Component, Input } from '@angular/core';

import { SpreadSheetData } from '../spreadsheet-data.model';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent {
  @Input() title: string;
  @Input() updateType: string;
  @Input() spreadSheetData: SpreadSheetData[] = [];

}
