import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-projects-status',
  templateUrl: './active-projects-status.component.html',
  styleUrls: ['./active-projects-status.component.scss']
})
export class ActiveProjectsStatusComponent implements OnInit {
  activeProjects = [
    {name: "Andromeda III", status: "Design"},
    {name: "Ouroboros Engine", status: "Manufacturing"}
  ]

  project_status_map = new Map<string, string>([
    ["Design", "20%"],
    ["Manufacturing", "50%"],
    ["Testing", "80%"]
  ])

  constructor() { }

  ngOnInit() {
  }

}
