import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SuccessesComponent } from './successes/successes.component';
import { ActiveProjectsStatusComponent } from './active-projects-status/active-projects-status.component';
import { GoalsComponent } from './goals/goals.component';
import { RoadblocksComponent } from './roadblocks/roadblocks.component';
import { BudgetComponent } from './budget/budget.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessesComponent,
    ActiveProjectsStatusComponent,
    GoalsComponent,
    RoadblocksComponent,
    BudgetComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
