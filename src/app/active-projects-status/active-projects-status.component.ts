import { Component, OnInit } from '@angular/core';

import { ProjectStatus } from '../project-data';

@Component({
  selector: 'app-active-projects-status',
  templateUrl: './active-projects-status.component.html',
  styleUrls: ['./active-projects-status.component.scss']
})
export class ActiveProjectsStatusComponent implements OnInit {
  activeProjects = [
    {"name": "Andromeda III", "status": ProjectStatus.DESIGN},
    {"name": "Ouroboros Engine", "status": ProjectStatus.MANUFACTURE}
  ]

  project_status_map = new Map<number, string>([
    [ProjectStatus.DESIGN, "Design"],
    [ProjectStatus.MANUFACTURE, "Manufacture"],
    [ProjectStatus.TEST, "Test"]
  ])

  constructor() { }

  ngOnInit() {
  }

}
