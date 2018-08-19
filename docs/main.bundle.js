webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"dec()\">\n  Remove tab\n</button>\n<button (click)=\"inc()\">\n  Add tab\n</button>\n\n<br>\n\n<app-tabs>\n  <app-tab *ngFor=\"let tab of tabs\">\n    <app-tab-title>\n      Tab <b>{{ tab }}</b> title\n    </app-tab-title>\n    <app-tab-content>\n      Tab <b>{{ tab }}</b> content\n      <app-test [tab]=\"tab\"></app-test>\n    </app-tab-content>\n  </app-tab>\n</app-tabs>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.tabs = [1, 2, 3];
    }
    AppComponent.prototype.dec = function () {
        this.tabs = this.tabs.slice(0, -1);
    };
    AppComponent.prototype.inc = function () {
        this.tabs = this.tabs.concat([(this.tabs.length + 1)]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_component__ = __webpack_require__("./src/app/hello.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_component__ = __webpack_require__("./src/app/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_tabs_tabs_module__ = __webpack_require__("./src/app/modules/tabs/tabs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__hello_component__["a" /* HelloComponent */],
                __WEBPACK_IMPORTED_MODULE_4__test_component__["a" /* TestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__modules_tabs_tabs_module__["a" /* TabsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hello.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hello',
            template: "<h1>Hello {{name}}!</h1>",
            styles: ["h1 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/modules/tabs/components/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('titleTemplate'),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "titleTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('contentTemplate'),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "contentTemplate", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tab',
            template: "\n    <ng-template #titleTemplate>\n      <ng-content select=\"app-tab-title\"></ng-content>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content select=\"app-tab-content\"></ng-content>\n    </ng-template>\n  "
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/modules/tabs/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_tab_component__ = __webpack_require__("./src/app/modules/tabs/components/tab/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        this.resetTabs();
        this.tabs.changes.subscribe(this.resetTabs.bind(this));
    };
    TabsComponent.prototype.resetTabs = function () {
        if (!this.getSize()) {
            return this.tabContent.clear();
        }
        var activeTab = this.tabs
            .some(function (tab) { return tab.active; });
        if (!activeTab) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (selectedTab) {
        if (!selectedTab) {
            return;
        }
        this.tabs.forEach(function (tab) { return tab.active = false; });
        selectedTab.active = true;
        this.renderTab(selectedTab);
    };
    TabsComponent.prototype.renderTab = function (tab) {
        this.tabContent.clear();
        this.tabContent.createEmbeddedView(tab.contentTemplate);
    };
    TabsComponent.prototype.isActiveClass = function (tab) {
        if (tab.active) {
            return 'tabs__title--active';
        }
    };
    TabsComponent.prototype.getSize = function () {
        return this.tabs.length;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__tab_tab_component__["a" /* TabComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], TabsComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('tabContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */])
    ], TabsComponent.prototype, "tabContent", void 0);
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tabs',
            template: "\n    <div class=\"tabs__titles\" (click)=\"selectTab()\">\n      <div *ngFor=\"let tab of tabs\"\n        class=\"tabs__title\"\n        [ngClass]=\"isActiveClass(tab)\"\n        (click)=\"selectTab(tab)\">\n        <ng-container [ngTemplateOutlet]=\"tab.titleTemplate\"></ng-container>\n      </div>\n    </div>\n    <div #tabContent></div>\n  "
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/modules/tabs/tabs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tabs_tabs_component__ = __webpack_require__("./src/app/modules/tabs/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tab_tab_component__ = __webpack_require__("./src/app/modules/tabs/components/tab/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_tabs_tabs_component__["a" /* TabsComponent */], __WEBPACK_IMPORTED_MODULE_3__components_tab_tab_component__["a" /* TabComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_tabs_tabs_component__["a" /* TabsComponent */], __WEBPACK_IMPORTED_MODULE_3__components_tab_tab_component__["a" /* TabComponent */]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/app/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        console.log(">>> TestComponent " + this.tab + " initialized");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], TestComponent.prototype, "tab", void 0);
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-test',
            template: "\n    <div>\n      TestComponent {{ this.tab }} content\n    </div>\n  ",
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map