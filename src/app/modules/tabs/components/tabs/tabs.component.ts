import {
  Component,
  QueryList,
  ContentChildren,
  AfterContentInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs__titles" (click)="selectTab()">
      <div *ngFor="let tab of tabs"
        class="tabs__title"
        [ngClass]="isActiveClass(tab)"
        (click)="selectTab(tab)">
        <ng-container [ngTemplateOutlet]="tab.titleTemplate"></ng-container>
      </div>
    </div>
    <div #tabContent></div>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent: ViewContainerRef;

  ngAfterContentInit() {
    this.resetTabs();

    this.tabs.changes.subscribe(this.resetTabs.bind(this));
  }

  resetTabs() {
    if (!this.getSize()) {
      return this.tabContent.clear();
    }

    const activeTab = this.tabs
      .some((tab: TabComponent) => tab.active);

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
    this.renderTab(selectedTab);
  }

  renderTab(tab: TabComponent) {
    this.tabContent.clear();
    this.tabContent.createEmbeddedView(tab.contentTemplate);
  }

  isActiveClass(tab: TabComponent) {
    if (tab.active) {
      return 'tabs__title--active';
    }
  }

  getSize() {
    return this.tabs.length;
  }
}
