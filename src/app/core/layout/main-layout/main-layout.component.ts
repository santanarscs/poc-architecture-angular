import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  sideBarOpen = true

  constructor() {}

  ngOnInit(): void {}
  sideBarToggler(event: boolean): void {
    this.sideBarOpen = !this.sideBarOpen
  }
}
