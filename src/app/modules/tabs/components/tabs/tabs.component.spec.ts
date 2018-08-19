import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';


describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let tabComponentFixture: ComponentFixture<TabComponent>;
  let tabComponent: TabComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent, TabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;

    tabComponentFixture = TestBed.createComponent(TabComponent);
    tabComponent = tabComponentFixture.componentInstance;

    component.tabs = new QueryList<TabComponent>();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#isActiveClass()', () => {
    describe('when tab is active', () => {
      it('should return active class', () => {
        tabComponent.active = true;

        expect(component.isActiveClass(tabComponent)).toMatch(/active/i);
      });
    });

    describe('when tab is not active', () => {
      it('should return nothing', () => {
        tabComponent.active = false;

        expect(component.isActiveClass(tabComponent)).toBeUndefined();
      });
    });
  });

  describe('#resetTabs()', () => {
    describe('when there are no tabs', () => {
      it('should not call selectTab method', () => {
        spyOn(component, 'selectTab');
        component.resetTabs();
        expect(component.selectTab).not.toHaveBeenCalled();
      });
    });

    describe('when there are no tabs', () => {
      it('should clear all previous flags', () => {
        spyOn(component.tabContent, 'clear');
        component.resetTabs();
        expect(component.tabContent.clear).toHaveBeenCalled();
      });
    });

    describe('when there are tabs', () => {
      beforeEach(() => {
        spyOn(component, 'getSize').and.returnValue(2);
      });

      describe('when some of tabs are active', () => {
        it('should not select a tab', () => {
          spyOn(component.tabs, 'some').and.returnValue(true);
          spyOn(component, 'selectTab');
          component.resetTabs();
          expect(component.selectTab).not.toHaveBeenCalled();
        });
      });

      describe('when we remove the latest tab', () => {
        it('should select a tab', () => {
          spyOn(component.tabs, 'some').and.returnValue(false);
          spyOn(component, 'selectTab');
          component.resetTabs();
          expect(component.selectTab).toHaveBeenCalled();
        });
      });
    });
  });
});
