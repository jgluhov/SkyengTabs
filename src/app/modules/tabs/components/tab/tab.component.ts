import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <ng-template #titleTemplate>
      <ng-content select="app-tab-title"></ng-content>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content select="app-tab-content"></ng-content>
    </ng-template>
  `
})
export class TabComponent {
  @ViewChild('titleTemplate') titleTemplate;
  @ViewChild('contentTemplate') contentTemplate;
  public active = false;
}
