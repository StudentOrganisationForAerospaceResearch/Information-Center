import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  // Pie
  public pieChartLabels:string[] = [
    'Ground Systems',
    'Proplusion',
    'Avionics',
    'Payload',
    'Recovery',
    'Airframe'
  ];
  public pieChartData:number[] = [30, 20, 20, 10, 10, 10];
  public pieChartType:string = 'pie';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
