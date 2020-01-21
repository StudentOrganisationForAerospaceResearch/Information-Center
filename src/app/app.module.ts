import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveProjectsStatusComponent } from './active-projects-status/active-projects-status.component';
import { BudgetComponent } from './budget/budget.component';
import { EventsComponent } from './events/events.component';
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveProjectsStatusComponent,
    BudgetComponent,
    EventsComponent,
    DataDisplayComponent
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
