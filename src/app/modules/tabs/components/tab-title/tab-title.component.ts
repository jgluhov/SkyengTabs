import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  template: `<ng-content></ng-content>`,
})
export class TabTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
