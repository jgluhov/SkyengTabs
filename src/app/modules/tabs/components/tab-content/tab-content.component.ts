import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  template: `<ng-content></ng-content>`
})
export class TabContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
