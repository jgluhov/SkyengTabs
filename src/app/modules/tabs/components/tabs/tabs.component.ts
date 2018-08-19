import { Component, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs__titles" (click)="selectTab()">
      <div *ngFor="let tab of tabs"
        class="tabs__title"
        [ngClass]="getActiveClass(tab)"
        (click)="selectTab(tab)">
        <ng-container [ngTemplateOutlet]="tab.titleTemplate"></ng-container>
      </div>
    </div>
  `
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngOnInit() {
    console.log('here');
  }

  ngAfterContentInit() {
    const activeTab = this.tabs.some((tab: TabComponent) => tab.active);

    if (!activeTab) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(selectedTab: TabComponent): void {
    if (!selectedTab) {
      return;
    }

    this.tabs.forEach((tab: TabComponent) => tab.active = false);
    selectedTab.active = true;
  }

  getActiveClass(tab: TabComponent) {
    if (tab.active) {
      return 'tabs__title--active';
    }
  }
}
