webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myStyle{\r\n    margin-left:10%;\r\n    margin-right: 10%\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n<div class=\"myStyle\" >\n   \n    <div style=\"width: 85px; display:inline-block;font-size: 14px; vertical-align: top;\">\n       <div class=\"card\" >\n      <div class=\"row  \">\n\n<nav class=\"nav flex-column \" style=\" background: #0e5061;  \">\n  <a class=\"nav-link text-center text-white mx-auto active \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px; margin-top: 12px; \" [routerLink] = \"['/departmentList']\" ><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Department List</a>\n  <a class=\"nav-link text-center text-white \"  style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/country']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Country</a>  \n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/client']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Client</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/department2']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Pay Area</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/loginpage']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Work Instructions</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />References</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Service Calendar</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Service CalendarEmail</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Data Loader</a>\n\n  \n</nav>\n</div>\n</div></div>\n\n<div style=\"width:90%;display:inline-block;margin-left: 15px;vertical-align: top\">\n  <div style=\"background: #edf2f9; padding: 30px;\">\n   <router-outlet></router-outlet>\n  </div>\n  </div>\n  \n  </div>-->\n<!--<div *ngIf=\"loggedIn\">\n  <app-homepage></app-homepage>\n</div>\n<div *ngIf=\"!loggedIn\">\n  <app-loginpage></app-loginpage>\n</div>-->\n\n<app-homepage></app-homepage>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.loggedIn = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gppadmin_redux_store__ = __webpack_require__("../../../../../src/app/gppadmin-redux/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gppadmin_redux_rootReducer__ = __webpack_require__("../../../../../src/app/gppadmin-redux/rootReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__country_country_component__ = __webpack_require__("../../../../../src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__department_list_department_list_component__ = __webpack_require__("../../../../../src/app/department-list/department-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__client_client_component__ = __webpack_require__("../../../../../src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__department2_department2_component__ = __webpack_require__("../../../../../src/app/department2/department2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loginpage_loginpage_component__ = __webpack_require__("../../../../../src/app/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__department_list_department_list_component__["a" /* DepartmentListComponent */] },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_20__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'country', component: __WEBPACK_IMPORTED_MODULE_12__country_country_component__["a" /* CountryComponent */] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_17__client_client_component__["a" /* ClientComponent */] },
    { path: 'departmentList', component: __WEBPACK_IMPORTED_MODULE_14__department_list_department_list_component__["a" /* DepartmentListComponent */] },
    { path: 'department2', component: __WEBPACK_IMPORTED_MODULE_18__department2_department2_component__["a" /* Department2Component */] },
    { path: 'loginpage', component: __WEBPACK_IMPORTED_MODULE_19__loginpage_loginpage_component__["a" /* LoginpageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__error_error_component__["a" /* ErrorComponent */] }
];
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_10__gppadmin_redux_rootReducer__["a" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_9__gppadmin_redux_store__["a" /* INITIAL_STATE */]);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__country_country_component__["a" /* CountryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__department_list_department_list_component__["a" /* DepartmentListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_18__department2_department2_component__["a" /* Department2Component */],
            __WEBPACK_IMPORTED_MODULE_19__loginpage_loginpage_component__["a" /* LoginpageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__homepage_homepage_component__["a" /* HomepageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_country_service__["a" /* CountryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Add Client Block-->\n<div class=\"container\">\n<div class=\"card\" *ngIf = \"showAddClientsDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Add Client</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"clientForm\" (ngSubmit)=\"addClient(clientForm.value)\">\n     <div style = \"margin : 20px;\">\n      <div class=\"form-inline\">\n\n        <table width=\"100%\" style=\"table-layout: fixed\">\n          <tr>\n            <td>Department Name <span style=\"color: red\">*</span>\n                          <select   class= \"form-control\"  formControlName=\"departmentName\" >                    \n                           <option value=\"Select\" selected=\"selected\">--Select--</option>\n                           <option *ngFor=\"let departmentlist of departmentDropdown\" [value]=\"departmentlist.departmentName\">{{departmentlist.departmentName}}</option>                    \n                         </select>\n                      </td>\n              <!--<input type=\"text\" class=\"form-control \"   formControlName=\"departmentName\"/></td>-->\n            <td>Client Code <span style=\"color: red\">*</span> <input type=\"text\"class=\"form-control  \" formControlName=\"clientCode\"/></td>\n            <td>Client Description <input type=\"text\" class=\"form-control  \"  formControlName=\"clientDescription\"/></td>\n          </tr>\n          <!--<tr>\n            <td></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n              {{departmentCodeError}}\n            </div></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n            {{departmentNameError}}\n          </div></td>\n          </tr>-->\n\n           <tr>\n            <td>Client Name <span style=\"color: red\">*</span> &nbsp;&nbsp; <input type=\"text\" class=\"form-control  \"   formControlName=\"clientName\"/></td>\n            <td>Client Status <span style=\"color: red\">*</span>&nbsp;&nbsp; <select class=\"form-control \" formControlName=\"clientStatus\">\n              <option value=\"\">--Select--</option>\n              <option value=\"active\">Active</option>\n              <option value=\"inactive\">Inactive</option>              \n              </select></td>            \n          </tr>\n          \n          <tr>            \n              <td>Client Setup Comments  &nbsp;&nbsp; <textarea class=\"form-control \" rows=\"5\" cols=\"50\"  formControlName=\"clientSetupComments\"></textarea></td>\n          </tr>\n           <tr>            \n              <td>Additional Client Information  &nbsp;&nbsp; <textarea class=\"form-control \" rows=\"5\" cols=\"50\"  formControlName=\"additionalClientInformation\"></textarea></td>\n          </tr>\n        </table>\n      </div>\n     </div>\n     \n        <div style=\"margin-top: 20px;  margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!clientForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        \n     </div>\n        </form>\n      </div>\n    </div>\n\n\n\n\n\n<div class=\"card\" *ngIf = \"showEditClientsDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Edit Client</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"clientForm\" (ngSubmit)=\"editClientDetails(clientForm.value)\">\n     <div style = \"margin : 20px;\">\n      <div class=\"form-inline\">\n\n        <table width=\"100%\" style=\"table-layout: fixed\">\n          <tr>\n            <td>Department Name <span style=\"color: red\">*</span>\n                          <select   class= \"form-control\"  formControlName=\"departmentName\" >                    \n                           <option value=\"Select\" selected=\"selected\">--Select--</option>\n                           <option *ngFor=\"let departmentlist of departmentDropdown\" [value]=\"departmentlist.departmentName\">{{departmentlist.departmentName}}</option>                    \n                         </select>\n                      </td>\n            <td>Client Code <span style=\"color: red\">*</span>&nbsp;&nbsp; <input type=\"text\"class=\"form-control \" formControlName=\"clientCode\" disabled/></td>\n            <td>Client Description &nbsp;&nbsp; <input type=\"text\" class=\"form-control \"  formControlName=\"clientDescription\"/></td>\n          </tr>\n          <!--<tr>\n            <td></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n              {{departmentCodeError}}\n            </div></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n            {{departmentNameError}}\n          </div></td>\n          </tr>-->\n\n           <tr>\n            <td>Client Name <span style=\"color: red\">*</span> &nbsp;&nbsp; <input type=\"text\" class=\"form-control \"   formControlName=\"clientName\"/></td>\n            <td>Client Status <span style=\"color: red\">*</span>&nbsp;&nbsp; <select class=\"form-control  \" formControlName=\"clientStatus\">\n              <option value=\"\">--Select--</option>\n              <option value=\"active\">Active</option>\n              <option value=\"inactive\">Inactive</option>              \n              </select></td>            \n          </tr>\n          \n          <tr>            \n              <td>Client Setup Comments  &nbsp;&nbsp; <textarea class=\"form-control \" rows=\"5\" cols=\"50\"  formControlName=\"clientSetupComments\"></textarea></td>\n          </tr>\n           <tr>            \n              <td>Additional Client Information  &nbsp;&nbsp; <textarea class=\"form-control \" rows=\"5\" cols=\"50\"  formControlName=\"additionalClientInformation\"></textarea></td>\n          </tr>\n        </table>\n      </div>\n     </div>\n     \n        <div style=\"margin-top: 20px;  margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!clientForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        \n     </div>\n        </form>\n      </div>\n    </div>\n\n</div>\n\n\n<!--New Datatable-->\n\n<div class=\"container\">\n  <div class=\"card \">\n    <div class=\"card-block\">\n      <div class=\"form-inline\">\n      <button type=\"button\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin :  20px;\" (click)=\"toggleDetails()\">Add Client\n</button>\n<span style=\"margin-left:120px;\"><b>Department Name :</b> <select   class= \"form-control\"  name=\"departmentValue\"  [(ngModel)]=\"departmentValue\" (change)=\"onDepartmentNameChange()\">                    \n                           <option value=\"Select\" selected>--Select--</option>\n                           <option *ngFor=\"let departmentlist of departmentDropdown\" [value]=\"departmentlist.departmentName\">{{departmentlist.departmentName}}</option>                    \n                         </select></span>\n\n      </div>\n\n<div style=\"margin: 20px;\">\n\n\n  <div class=\"form-inline \" style=\"margin-bottom: 10px; margin-left: 72%\">\nSearch:<input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" />\n\n</div>\n<div class=\"row\">\n  <table class=\"table  table-bordered\" style=\"table-layout: fixed\">\n    <thead>\n      <tr>  \n        \n        <th (click)=\"sort('departmentCode')\">Department Code\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('departmentName')\">Department Name\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('clientCode')\">Client Code\n          <span class=\"fa fa-sort\" *ngIf=\"key =='clientCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('clientName')\">Client Name\n          <span class=\"fa fa-sort\" *ngIf=\"key =='clientName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('clientDescription')\">Client Description\n          <span class=\"fa fa-sort\" *ngIf=\"key =='clientDescription'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('clientSetupComments')\">Client Setup Comments\n          <span class=\"fa fa-sort\" *ngIf=\"key =='clientSetupComments'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>       \n        <th style=\"width: 10%\">Edit</th>\n</tr>\n</thead>\n<tbody>\n  <tr *ngFor=\"let client of clients | async | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\n    <td>{{client.departmentCode}}</td>\n    <td>{{client.departmentName}}</td>\n    <td>{{client.clientCode}}</td>\n    <td>{{client.clientName}}</td>\n    <td>{{client.clientDescription}}</td>\n    <td>{{client.clientSetupComments}}</td>  \n    <td>\n      <button class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" (click)=\"editDetails(client)\">\n      <i class=\"fa fa-edit\"></i>\n</button>\n</td>\n</tr>\n</tbody>\n\n</table>\n<div class=\"row\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__ = __webpack_require__("../../../../../src/app/gppadmin-redux/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientComponent = (function () {
    function ClientComponent(countryService, ngRedux, formBuilder) {
        this.countryService = countryService;
        this.ngRedux = ngRedux;
        this.formBuilder = formBuilder;
        this.departmentValue = '';
        this.showAddClientsDetails = false;
        this.showEditClientsDetails = false;
        this.currentClient = {
            departmentCode: "",
            departmentName: "",
            clientCode: "",
            clientName: "",
            clientStatus: "",
            clientDescription: "",
            clientSetupComments: "",
            additionalClientInformation: ""
        };
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.clientForm = formBuilder.group({
            /*First parameter is default value, second is an array of validations*/
            'departmentName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'clientName': [this.currentClient.clientName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'clientStatus': [this.currentClient.clientStatus, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'clientCode': [null],
            'clientDescription': [null],
            'clientSetupComments': [],
            'additionalClientInformation': [],
            'departmentCode': []
        });
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getAllClients().subscribe(function (elements) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["d" /* LOAD_CLIENTS */], clients: elements });
        });
        console.log('Before calling ClientPage');
        this.countryService.getDepartmentNameForClientPage().subscribe(function (hello) {
            _this.departmentDropdown = hello;
        });
        console.log('Client On Init called' + this.departmentDropdown);
    };
    ClientComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ClientComponent.prototype.toggleDetails = function () {
        this.clientForm.reset();
        this.showAddClientsDetails = true;
        this.showEditClientsDetails = false;
        console.log('Department Value: ' + this.departmentValue);
    };
    ClientComponent.prototype.hideDetails = function () {
        this.clientForm.reset();
        this.showAddClientsDetails = false;
        this.showEditClientsDetails = false;
    };
    ClientComponent.prototype.addClient = function (client) {
        this.showEditClientsDetails = false;
        console.log('Inside Add Client' + client.clientName);
        // client.departmentName = this.departmentValue;    
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["e" /* ADD_CLIENT */], client: client });
        this.hideDetails();
    };
    ClientComponent.prototype.editDetails = function (client) {
        this.showAddClientsDetails = false;
        this.showEditClientsDetails = true;
        console.log('Inside Edit Details');
        this.currentClient.departmentName = client.departmentName;
        this.currentClient.clientCode = client.clientCode;
        this.currentClient.clientName = client.clientName;
        this.currentClient.clientStatus = client.clientStatus;
        this.currentClient.clientDescription = client.clientDescription;
        // console.log("Index Of:" + this.departmentList.indexOf(depart));
        this.clientForm.controls['departmentName']
            .setValue(client.departmentName, { onlySelf: true });
        this.clientForm.controls['clientCode']
            .setValue(client.clientCode, { onlySelf: true });
        this.clientForm.controls['clientName']
            .setValue(client.clientName, { onlySelf: true });
        this.clientForm.controls['clientDescription']
            .setValue(client.clientDescription, { onlySelf: true });
        this.clientForm.controls['clientStatus'] //.valueChanges.subscribe(clientStatus => client.clientStatus = clientStatus);
            .setValue(client.clientStatus, { onlySelf: true });
        // this.showDetails = false;
        // this.showDepartmentDetails = true;    
    };
    ClientComponent.prototype.editClientDetails = function (client) {
        console.log('Inside Edit Client');
        //this.countryService.addAClient(client);
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["f" /* EDIT_CLIENT */], client: client });
        this.hideDetails();
    };
    ClientComponent.prototype.onDepartmentNameChange = function () {
        var _this = this;
        this.countryService.getClientsForaDepartment(this.departmentValue).subscribe(function (elements) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["d" /* LOAD_CLIENTS */], clients: elements });
        });
    };
    return ClientComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["select"])(),
    __metadata("design:type", Object)
], ClientComponent.prototype, "clients", void 0);
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], ClientComponent);

var _a, _b, _c;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/country/country.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n/* responsive queries */\r\n\r\n@media (max-width: 768px) {\r\n  .btn {\r\n\tfont-size:10px;\r\n    padding:4px 6px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .btn {\r\n\tfont-size:12px;\r\n    padding:6px 12px;\r\n    min-width: 40px;\r\n  }\r\n}\r\n  \r\n@media (min-width: 992px) {\r\n  .btn {\r\n\tfont-size:14px;\r\n    padding:8px 12px;\r\n    min-width: 60px;\r\n  }\r\n}\r\n \r\n@media (min-width: 1200px) {\r\n  .btn {\r\n    padding:10px 16px;\r\n\tfont-size:16px;\r\n    min-width: 80px;\r\n  }\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--   Add Country Block\n<div class=\"container\">\n<div class=\"card\" *ngIf = \"showAddCountryDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Add Country</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"countryForm\" (ngSubmit)=\"addCountry(countryForm.value)\">\n     <div style = \"margin : 20px;\">\n      <div class=\"form-inline\">\n\n        <table width=\"100%\" style=\"table-layout: fixed\">\n          <tr>\n            <td>Country Code&nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"   formControlName=\"countryCode\"/></td>\n            <td>Country Name &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"  formControlName=\"countryName\"/></td>\n          </tr>\n          <!--<tr>\n            <td></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n              {{departmentCodeError}}\n            </div></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n            {{departmentNameError}}\n          </div></td>\n          </tr>-->\n        <!--</table>\n      </div>\n     </div>\n     \n        <div style=\"margin-top: 20px;  margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!countryForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        \n     </div>\n        </form>\n      </div>\n    </div>-->\n  <!-- Edit Country-->\n  <!--<div class=\"card\" *ngIf = \"showEditCountryDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Edit Country</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"countryForm\" (ngSubmit)=\"editCountry(countryForm.value)\">\n        <div class=\"form-inline\">\n\n          <table width=\"100%\" style=\"table-layout: fixed\">\n            <tr>\n              <td>Country Code&nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"   formControlName=\"countryCode\"/></td>\n              <td>Country Name &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"  formControlName=\"countryName\"/></td>\n            </tr>-->\n            <!--<tr>\n              <td></td>\n              <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n                {{departmentCodeError}}\n              </div></td>\n              <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n                {{departmentNameError}}\n              </div></td>\n            </tr>-->\n          <!--</table>\n        </div>\n        <div style=\"margin-top: 20px; margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!countryForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->\n\n\n<!--New Datatable-->\n<div class=\"container\">\n  <div class=\"card \">\n    <div class=\"card-block\">\n      <button type=\"button\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin :  20px;\" (click)=\"toggleDetails()\">Add Country\n</button>\n\n<div style=\"margin: 20px;\">\n<div class=\"row \">\n\n  <div  style=\"margin-bottom: 10px; margin-left: 72%\">\n<span >Search: </span><input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" >\n\n</div>\n</div>\n<div class=\"row\">\n  <form [formGroup]=\"countryForm\" (ngSubmit)=\"saveCountry(countryForm.value)\">\n  <table class=\"table  table-bordered\" style=\"table-layout: fixed\">\n    <thead>\n      <tr>  \n        \n        <th (click)=\"sort('countryCode')\">Country Code\n          <span class=\"fa fa-sort\" *ngIf=\"key =='countryCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>       \n        <th (click)=\"sort('countryName')\">Country Name\n          <span class=\"fa fa-sort\" *ngIf=\"key =='countryName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th style=\"width: 20%\">Edit</th>\n        <th >Calendar Definition</th>\n</tr>\n</thead>\n<tbody>\n  <tr *ngIf=\"showAddRow\">           \n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"countryCode\"/>\n    </td>\n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"countryName\" />\n    </td>    \n    <td>\n        <input type=\"button\" value=\"Save\"  class=\"btn btn-success\" (click)=\"saveCountry(countryForm.value)\"/>\n    </td>\n    <td>\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n    </td>\n    </tr>\n\n  <tr *ngFor=\"let country of countries | async | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\n    <ng-template [ngTemplateOutlet]=\"loadTemplate(country)\" [ngOutletContext]=\"{ $implicit: country, index: i }\"></ng-template>\n  </tr>\n</tbody>\n\n</table>\n  </form>\n<div class=\"row\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n\n<ng-template #readOnlyTemplate let-country>\n <td>{{country.countryCode}}</td>\n    <td>{{country.countryName}}</td>\n    <td>\n  <button class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" (click)=\"editDetails(country)\">\n<i class=\"fa fa-edit\"></i>\n</button>\n</td>\n<td>\n  <button class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" >\nCalendar Definition\n</button>\n</td>\n</ng-template> \n\n<form [formGroup]=\"countryForm\" (ngSubmit)=\"saveCountry(countryForm.value)\">\n<ng-template #editTemplate>\n    <td><input type=\"text\"  class=\"form-control\" formControlName=\"countryCode\"/> </td>\n    <td><input type=\"text\"  class=\"form-control\" formControlName=\"countryName\"/> </td>    \n  <td>\n        <input type=\"button\" value=\"Save\"  class=\"btn btn-success\" (click)=\"saveCountry(countryForm.value)\" />\n    </td>\n    <td>\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n    </td>\n</ng-template> \n</form>"

/***/ }),

/***/ "../../../../../src/app/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__ = __webpack_require__("../../../../../src/app/gppadmin-redux/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CountryComponent = (function () {
    function CountryComponent(ngRedux, countryService, formBuilder) {
        this.ngRedux = ngRedux;
        this.countryService = countryService;
        this.formBuilder = formBuilder;
        this.showAddCountryDetails = false;
        this.showEditCountryDetails = false;
        this.isNewRecord = false;
        this.showAddRow = false;
        this.currentCountry = {
            countryId: 0,
            countryName: "",
            countryCode: "",
            bu: "",
            createdDate: new Date(),
            createdBy: "",
            modifiedBy: "",
            modifiedDate: new Date(),
            excelCalculator: ""
        };
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.countryForm = formBuilder.group({
            'countryCode': [],
            'countryName': []
        });
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getAllCountries().subscribe(function (countries) {
            return _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["g" /* LOAD_COUNTRY */], countries: countries });
        });
    };
    CountryComponent.prototype.toggleDetails = function () {
        this.countryForm.reset();
        this.isNewRecord = true;
        this.showAddRow = true;
        this.showAddCountryDetails = false;
        this.showEditCountryDetails = false;
    };
    CountryComponent.prototype.hideDetails = function () {
        this.countryForm.reset();
        this.showAddCountryDetails = false;
        this.showEditCountryDetails = false;
    };
    CountryComponent.prototype.addCountry = function (country) {
        this.showAddRow = false;
        this.showEditCountryDetails = false;
        //this.ngRedux.dispatch({type:ADD_COUNTRY,country});
        this.hideDetails();
    };
    CountryComponent.prototype.editDetails = function (country) {
        this.currentCountry = country;
        this.showAddRow = false;
        this.showEditCountryDetails = false;
        this.showAddCountryDetails = false;
        this.countryForm.controls['countryCode']
            .setValue(country.countryCode, { onlySelf: true });
        this.countryForm.controls['countryName']
            .setValue(country.countryName, { onlySelf: true });
    };
    CountryComponent.prototype.editCountry = function (country) {
        this.currentCountry = country;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["j" /* EDIT_COUNTRY */], country: country });
        this.hideDetails();
    };
    CountryComponent.prototype.loadTemplate = function (country) {
        if (this.currentCountry && this.currentCountry.countryCode == country.countryCode) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    CountryComponent.prototype.saveCountry = function (country) {
        console.log(" inside saveDepartment");
        if (this.isNewRecord) {
            console.log(" Is New record");
            this.countryService.addCountry(country);
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["i" /* ADD_COUNTRY */], country: country });
            this.isNewRecord = false;
            this.currentCountry = null;
            this.countryForm.reset();
            this.showAddRow = false;
        }
        else {
            console.log(" Is Edit record");
            //edit the record
            this.countryService.editCountry(country);
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__gppadmin_redux_actions__["j" /* EDIT_COUNTRY */], country: country });
            this.currentCountry = null;
        }
    };
    CountryComponent.prototype.cancel = function () {
        this.showAddRow = false;
        this.isNewRecord = false;
        this.countryForm.reset();
        this.currentCountry = null;
    };
    CountryComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return CountryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('readOnlyTemplate'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], CountryComponent.prototype, "readOnlyTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTemplate'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], CountryComponent.prototype, "editTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["select"])(),
    __metadata("design:type", Object)
], CountryComponent.prototype, "countries", void 0);
CountryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-country',
        template: __webpack_require__("../../../../../src/app/country/country.component.html"),
        styles: [__webpack_require__("../../../../../src/app/country/country.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* CountryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _e || Object])
], CountryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=country.component.js.map

/***/ }),

/***/ "../../../../../src/app/department-list/department-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department-list/department-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h3>Add Department</h3>\n<form (ngSubmit)=\"onSubmit()\" #todoForm=\"ngForm\">\n  <div class=\"form-inline\">\n    <div class=\"col-auto\">\n      Country: <input type=\"text\"  class=\"form-control mb-2 mr-sm-2 mb-sm-0\" placeholder=\"\" \n      id=\"country\" [(ngModel)]=\"model.country\" \n      name=\"country\" #country=\"ngModel\">\n    </div>\n    <div class=\"col-auto\">\n      <input type=\"text\"  class=\"form-control mb-2 mr-sm-2 mb-sm-0\" placeholder=\"\" \n      id=\"departmentCode\" [(ngModel)]=\"model.departmentCode\" \n      name=\"departmentCode\" #departmentCode=\"ngModel\">\n    </div>\n    <div class=\"col-auto\">\n      <input type=\"text\"  class=\"form-control mb-2 mr-sm-2 mb-sm-0\" placeholder=\"\" \n      id=\"departmentName\" [(ngModel)]=\"model.departmentName\" \n      name=\"departmentName\" #departmentName=\"ngModel\">\n    </div>   \n    <div class=\"col-auto\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n</form>\n<br />-->\n\n<!--Add Department Block-->\n<div class=\"container\">\n<div class=\"card\" *ngIf = \"showDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Add/Edit Department</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"departmentForm\" (ngSubmit)=\"addDepartment(departmentForm.value)\">\n     <div style = \"margin : 20px;\">\n      <div class=\"form-inline\">\n\n        <table width=\"100%\" style=\"table-layout: fixed\">\n          <tr>\n            <td>Country &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"   formControlName=\"country\"/></td>\n            <td>Department Code &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\" formControlName=\"departmentCode\"/></td>\n            <td>Department Name &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"  formControlName=\"departmentName\"/></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n              {{departmentCodeError}}\n            </div></td>\n            <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n            {{departmentNameError}}\n          </div></td>\n          </tr>\n        </table>\n      </div>\n     </div>\n     \n        <div style=\"margin-top: 20px;  margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!departmentForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        \n     </div>\n        </form>\n      </div>\n    </div>\n\n  <div class=\"card\" *ngIf = \"showDepartmentDetails\" style=\"margin-bottom: 20px;\">\n    <h3 class=\"card-header\" style=\"background-color: #0e5061; font-size: 20px; color: white\">Add/Edit Department</h3>\n    <div class=\"card-block\">\n      <form [formGroup]=\"departmentForm\" (ngSubmit)=\"editDepartmentDetails(departmentForm.value)\">\n        <div class=\"form-inline\">\n\n          <table width=\"100%\" style=\"table-layout: fixed\">\n            <tr>\n              <td>Country &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"   formControlName=\"country\"/></td>\n              <td>Department Code &nbsp;&nbsp; <input type=\"text\"class=\"form-control  mb-2 mr-sm-2 mb-sm-0\" formControlName=\"departmentCode\"/></td>\n              <td>Department Name &nbsp;&nbsp; <input type=\"text\" class=\"form-control  mb-2 mr-sm-2 mb-sm-0\"  formControlName=\"departmentName\"/></td>\n            </tr>\n            <tr>\n              <td></td>\n              <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentCode'].valid && departmentForm.controls['departmentCode'].touched\">\n                {{departmentCodeError}}\n              </div></td>\n              <td><div class=\"alert alert-danger\" *ngIf=\"!departmentForm.controls['departmentName'].valid && departmentForm.controls['departmentName'].touched\">\n                {{departmentNameError}}\n              </div></td>\n            </tr>\n          </table>\n        </div>\n        <div style=\"margin-top: 20px; margin-left:10px;\">\n        <button type=\"submit\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" [disabled]=\"!departmentForm.valid\">Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin-bottom: 20px \" (click)=\"hideDetails()\">Cancel\n        </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!--New Datatable-->\n<div class=\"container\">\n  <div class=\"card \">\n    <div class=\"card-block\">\n      <button type=\"button\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin :  20px;\" (click)=\"toggleDetails()\">Add Department\n</button>\n\n<div style=\"margin: 20px;\">\n<div class=\"row \">\n\n  <div class=\"form-inline \" style=\"margin-bottom: 10px; margin-left: 72%\">\n<span class=\"mb-2 mr-sm-2 mb-sm-0\">Search: </span><input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" >\n\n</div>\n</div>\n<div class=\"row\">\n  <table class=\"table  table-bordered\" style=\"table-layout: fixed\">\n    <thead>\n      <tr>  \n        \n        <th (click)=\"sort('country')\">Country\n          <span class=\"fa fa-sort\" *ngIf=\"key =='country'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('departmentCode')\">Department Code\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('departmentName')\">Department Name\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th style=\"width: 20%\">Edit</th>\n</tr>\n</thead>\n<tbody>\n  <tr *ngFor=\"let department of departments | async | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\n    <td>{{department.country}}</td>\n    <td>{{department.departmentCode}}</td>\n    <td>{{department.departmentName}}</td>\n    <td>\n      <button class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" (click)=\"editDetails(department)\">\n<i class=\"fa fa-edit\"></i>\n</button>\n</td>\n</tr>\n</tbody>\n\n</table>\n<div class=\"row\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/department-list/department-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gppadmin_redux_actions__ = __webpack_require__("../../../../../src/app/gppadmin-redux/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentListComponent = (function () {
    function DepartmentListComponent(ngRedux, formBuilder) {
        this.ngRedux = ngRedux;
        this.formBuilder = formBuilder;
        this.model = {
            country: "",
            departmentCode: "",
            departmentName: ""
        };
        this.currentDepartment = {
            country: "",
            departmentCode: "",
            departmentName: ""
        };
        // Datatable
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.showDetails = false;
        this.showDepartmentDetails = false;
        this.departmentCodeError = 'Department Code length should be between 3 to 7 characters';
        this.departmentNameError = 'Department Name length should be between 3 to 12 characters';
        this.departmentForm = formBuilder.group({
            /*First parameter is default value, second is an array of validations*/
            'country': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'departmentCode': [this.currentDepartment.departmentCode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(7)])],
            'departmentName': [this.currentDepartment.departmentName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(12)])]
        });
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
    };
    DepartmentListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    DepartmentListComponent.prototype.toggleDetails = function () {
        this.departmentForm.reset();
        this.showDetails = true;
        this.showDepartmentDetails = false;
    };
    DepartmentListComponent.prototype.hideDetails = function () {
        this.departmentForm.reset();
        this.showDetails = false;
        this.showDepartmentDetails = false;
    };
    DepartmentListComponent.prototype.addDepartment = function (department) {
        this.showDepartmentDetails = false;
        console.log('Inside Add Department' + department.name);
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__gppadmin_redux_actions__["a" /* ADD_DEPARTMENT */], department: department });
        this.hideDetails();
    };
    DepartmentListComponent.prototype.editDetails = function (depart) {
        this.showDetails = false;
        this.showDepartmentDetails = true;
        console.log('Inside Edit Details');
        this.currentDepartment.departmentCode = depart.departmentCode;
        this.currentDepartment.departmentName = depart.departmentName;
        // console.log("Index Of:" + this.departmentList.indexOf(depart));
        this.departmentForm.controls['country']
            .setValue(depart.country, { onlySelf: true });
        this.departmentForm.controls['departmentCode']
            .setValue(depart.departmentCode, { onlySelf: true });
        this.departmentForm.controls['departmentName']
            .setValue(depart.departmentName, { onlySelf: true });
        // this.showDetails = false;
        // this.showDepartmentDetails = true;    
    };
    DepartmentListComponent.prototype.editDepartmentDetails = function (department) {
        console.log('Inside Edit Department');
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__gppadmin_redux_actions__["b" /* EDIT_DEPARTMENT */], department: department });
        this.hideDetails();
    };
    // ---------
    DepartmentListComponent.prototype.onSubmit = function () {
        console.log('Inside OnSubmit');
        console.log(this.departments);
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__gppadmin_redux_actions__["a" /* ADD_DEPARTMENT */], department: this.model });
    };
    DepartmentListComponent.prototype.editDepartment = function (newDepartment) {
        console.log("Inside Edit Department" + newDepartment);
        // this.ngRedux.dispatch({type: EDIT_DEPARTMENT, department: newDepartment});
    };
    return DepartmentListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select"])(),
    __metadata("design:type", Object)
], DepartmentListComponent.prototype, "departments", void 0);
DepartmentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-department-list',
        template: __webpack_require__("../../../../../src/app/department-list/department-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/department-list/department-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], DepartmentListComponent);

var _a, _b;
//# sourceMappingURL=department-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/department2/department2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department2/department2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  \n  <div class=\"card\">\n    <div class=\"card-block\">\n    <!--<input type=\"button\" value=\"Add\" class=\"btn btn-default\" (click)=\"addDepartment()\" />-->\n     <button type=\"button\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; margin :  20px;\" (click)=\"addDepartment()\">Add Department\n</button>\n\n<div class=\"row \">\n\n  <div class=\"form-inline \" style=\"margin-bottom: 10px; margin-left: 72%\">\n<span class=\"mb-2 mr-sm-2 mb-sm-0\">Search: </span><input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" >\n\n</div>\n</div>\n\n<div style=\"margin: 20px;\">\n    \n    <form [formGroup]=\"departmentForm\" (ngSubmit)=\"saveDepartment(departmentForm.value)\">\n    <table class=\"table table-bordered\">\n        <thead>\n           <tr>  \n        \n        <th (click)=\"sort('country')\">Country\n          <span class=\"fa fa-sort\" *ngIf=\"key =='country'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('departmentCode')\">Department Code\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th (click)=\"sort('departmentName')\">Department Name\n          <span class=\"fa fa-sort\" *ngIf=\"key =='departmentName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n        </th>\n        <th style=\"width: 20%\">Edit</th>\n        <th>Delete</th>\n</tr>\n        </thead>\n        <tbody>\n    <tr *ngIf=\"showAddRow\">           \n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"country\"/>\n    </td>\n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"departmentCode\" />\n    </td>\n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"departmentName\" />\n    </td>    \n    <td>\n        <input type=\"button\" value=\"Save\"  class=\"btn btn-success\" (click)=\"addDepartmentValues(departmentForm.value)\"/>\n    </td>\n    <td>\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n    </td>\n    </tr>\n            <tr *ngFor=\"let department of departments | async | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\n              \n                <ng-template [ngTemplateOutlet]=\"loadTemplate(department)\" [ngOutletContext]=\"{ $implicit: department, index: i }\"></ng-template>\n            </tr>\n                    \n        </tbody>\n    </table>\n    </form>\n   \n    \n    <div class=\"row\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n  </div>\n</div>\n</div>\n</div>\n\n\n\n\n<!--The Html Template for Read-Only Rows-->\n<ng-template #readOnlyTemplate let-department>\n    <td>{{department.country}}</td>\n    <td>{{department.departmentCode}}</td>\n    <td>{{department.departmentName}}</td>\n    <td>\n        <input type=\"button\" value=\"Edit\" class=\"btn btn-primary\" (click)=\"editDepartment(department)\" />\n    </td>\n    <td>\n        <input type=\"button\" value=\"Delete\" (click)=\"deleteDepartment(department)\" class=\"btn btn-danger\" />\n    </td>\n</ng-template>\n<!--Ends Here-->\n\n<!--The Html Template for Editable Rows-->\n<form [formGroup]=\"departmentForm\" (ngSubmit)=\"saveDepartment(departmentForm.value)\">\n<ng-template #editTemplate>\n  \n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"country\"/>\n    </td>\n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"departmentCode\" />\n    </td>\n    <td>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"departmentName\" />\n    </td>    \n    <td>\n        <input type=\"button\" value=\"Save\"  class=\"btn btn-success\" (click)=\"saveDepartment(departmentForm.value)\" />\n    </td>\n    <td>\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n    </td>\n    </ng-template>\n </form>\n\n<!--Ends Here-->\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/department2/department2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gppadmin_redux_actions__ = __webpack_require__("../../../../../src/app/gppadmin-redux/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Department2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Department2Component = (function () {
    function Department2Component(ngRedux, formBuilder) {
        this.ngRedux = ngRedux;
        this.formBuilder = formBuilder;
        this.currentDepartment = {
            country: "",
            departmentCode: "",
            departmentName: ""
        };
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.departmentForm = formBuilder.group({
            /*First parameter is default value, second is an array of validations*/
            'country': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'departmentCode': [this.currentDepartment.departmentCode, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(7)])],
            'departmentName': [this.currentDepartment.departmentName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(12)])]
        });
    }
    Department2Component.prototype.ngOnInit = function () {
    };
    Department2Component.prototype.addDepartment = function () {
        this.departmentForm.reset();
        this.showAddRow = true;
        // var newDepartment : IDepartment = {
        //   country: "",
        //   departmentCode : "",
        //   departmentName: ""   
        // }
        //       this.currentDepartment=newDepartment;
        //       this.ngRedux.dispatch({type: ADD_DEPARTMENT, newDepartment});
        //       this.isNewRecord = true;
        //return this.editTemplate;
    };
    Department2Component.prototype.addDepartmentValues = function (department) {
        console.log("Inside addDepartmentValues" + department.country);
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__gppadmin_redux_actions__["a" /* ADD_DEPARTMENT */], department: department });
        this.departmentForm.reset();
        this.showAddRow = false;
    };
    //6. Edit Employee
    Department2Component.prototype.editDepartment = function (department) {
        this.showAddRow = false;
        this.currentDepartment = department;
        this.departmentForm.controls['country']
            .setValue(department.country, { onlySelf: true });
        this.departmentForm.controls['departmentCode']
            .setValue(department.departmentCode, { onlySelf: true });
        this.departmentForm.controls['departmentName']
            .setValue(department.departmentName, { onlySelf: true });
    };
    //7. Load either Read-Onoy Template or EditTemplate
    Department2Component.prototype.loadTemplate = function (department) {
        if (this.currentDepartment && this.currentDepartment.departmentCode == department.departmentCode) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    //8. Save Employee
    Department2Component.prototype.saveDepartment = function (department) {
        console.log(" inside saveDepartment");
        if (this.isNewRecord) {
            //add a new Employee
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__gppadmin_redux_actions__["a" /* ADD_DEPARTMENT */], department: department });
            this.isNewRecord = false;
            this.currentDepartment = null;
        }
        else {
            //edit the record
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__gppadmin_redux_actions__["b" /* EDIT_DEPARTMENT */], department: department });
            this.currentDepartment = null;
        }
    };
    //9. Cancel edit
    Department2Component.prototype.cancel = function () {
        this.showAddRow = false;
        this.departmentForm.reset();
        this.currentDepartment = null;
    };
    //10 Delete Employee
    Department2Component.prototype.deleteDepartment = function (department) {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__gppadmin_redux_actions__["c" /* REMOVE_DEPARTMENT */], department: department });
    };
    Department2Component.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return Department2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('readOnlyTemplate'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], Department2Component.prototype, "readOnlyTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTemplate'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], Department2Component.prototype, "editTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
    __metadata("design:type", Object)
], Department2Component.prototype, "departments", void 0);
Department2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-department2',
        template: __webpack_require__("../../../../../src/app/department2/department2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/department2/department2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], Department2Component);

var _a, _b, _c, _d;
//# sourceMappingURL=department2.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\">\n  <strong>Page Not Found</strong> Please check the URL.\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/gppadmin-redux/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDIT_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_COUNTRY; });
/* unused harmony export DELETE_COUNTRY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGIN_USER; });
var ADD_DEPARTMENT = 'ADD_DEPARTMENT';
var EDIT_DEPARTMENT = 'EDIT_DEPARTMENT';
var LOAD_CLIENTS = 'LOAD_CLIENTS';
var EDIT_CLIENT = 'EDIT_CLIENT';
var ADD_CLIENT = 'ADD_CLIENT';
var LOAD_COUNTRY = 'LOAD_COUNTRY';
var ADD_COUNTRY = 'ADD_COUNTRY';
var EDIT_COUNTRY = 'EDIT_COUNTRY';
var DELETE_COUNTRY = 'DELETE_COUNTRY';
var REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT';
var LOGIN_USER = 'LOGIN_USER';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/gppadmin-redux/rootReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/gppadmin-redux/actions.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;



function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_DEPARTMENT */]:
            return Object.assign({}, state, {
                departments: state.departments.concat(Object.assign({}, action.department))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* EDIT_DEPARTMENT */]:
            var department = state.departments.find(function (department) { return department.departmentCode === action.department.departmentCode; });
            var index = state.departments.indexOf(department);
            console.log('Index:' + index);
            return Object.assign({}, state, {
                departments: state.departments.slice(0, index).concat([Object.assign({}, department, { country: action.department.country, departmentCode: action.department.departmentCode, departmentName: action.department.departmentName })], state.departments.slice(index + 1))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* REMOVE_DEPARTMENT */]:
            var myDeparment = state.departments.find(function (department) { return department.departmentCode === action.department.departmentCode; });
            var myIndex = state.departments.indexOf(myDeparment);
            console.log('Inside remove Department' + myIndex);
            return Object.assign({}, state, {
                departments: state.departments.slice(0, myIndex).concat(state.departments.slice(myIndex + 1))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* LOAD_CLIENTS */]:
            return Object.assign({}, state, {
                clients: action.clients
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* ADD_CLIENT */]:
            return Object.assign({}, state, {
                clients: state.clients.concat(Object.assign({}, action.client))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* EDIT_CLIENT */]:
            var client = state.clients.find(function (client) { return client.clientCode === action.client.clientCode; });
            var index = state.clients.indexOf(client);
            console.log('Index:' + index + client.clientDescription);
            return Object.assign({}, state, {
                clients: state.clients.slice(0, index).concat([Object.assign({}, client, { departmentName: action.client.departmentName, clientDescription: action.client.clientDescription, clientName: action.client.clientName, clientStatus: action.client.clientStatus, clientSetupComments: action.client.clientSetupComments, additionalClientInformation: action.client.additionalClientInformation })], state.clients.slice(index + 1))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* LOAD_COUNTRY */]:
            return Object.assign({}, state, { countries: action.countries });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* LOGIN_USER */]:
            console.log('Inside REDUX login user' + action.user.username + ' loggedin ' + action.user.loggedin);
            return Object.assign({}, state, { user: action.user });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* ADD_COUNTRY */]:
            return Object.assign({}, state, {
                countries: state.countries.concat(Object.assign({}, action.country))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* EDIT_COUNTRY */]:
            var country = state.countries.find(function (country) { return country.countryCode === action.country.countryCode; });
            var index = state.countries.indexOf(country);
            return Object.assign({}, state, {
                countries: state.countries.slice(0, index).concat([Object.assign({}, action.country)], state.countries.slice(index + 1))
            });
    }
    return state;
}
//# sourceMappingURL=rootReducer.js.map

/***/ }),

/***/ "../../../../../src/app/gppadmin-redux/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
var INITIAL_STATE = {
    departments: [{ country: 'France', departmentCode: 'US1', departmentName: 'US1' },
        { country: 'France', departmentCode: 'US2', departmentName: 'US2' },
        { country: 'France', departmentCode: 'US3', departmentName: 'US3' },
        { country: 'France', departmentCode: 'US4', departmentName: 'US4' },
        { country: 'France', departmentCode: 'US5', departmentName: 'US5' },
        { country: 'France', departmentCode: 'US6', departmentName: 'US6' },
        { country: 'France', departmentCode: 'US7', departmentName: 'US7' }
    ],
    countries: [],
    clients: [],
    user: { username: 'esibpmtest1', loggedin: true }
};
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.labelStyle{\r\n    color: #666666;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-left : 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = " \n<div *ngIf=\"loggedIn\">\n<div class=\"container\" >\n   \n    <div style=\"width: 85px; display:inline-block;font-size: 14px; vertical-align: top;\">\n       <div class=\"card\" >\n      <div class=\"row  \">\n\n<nav class=\"nav flex-column \" style=\" background: #0e5061;  \">\n  <a class=\"nav-link text-center text-white mx-auto active \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px; margin-top: 12px; \" [routerLink] = \"['/departmentList']\" ><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Department List</a>\n  <a class=\"nav-link text-center text-white \"  style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/country']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Country</a>  \n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/client']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Client</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/department2']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Pay Area</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Work Instructions</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />References</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Service Calendar</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Service CalendarEmail</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/departmentList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Data Loader</a>\n\n  \n</nav>\n</div>\n</div></div><div style=\"width:85%;display:inline-block;margin-left: 15px;vertical-align: top\">\n  <div style=\"background: #edf2f9; padding: 10px;\">\n   <router-outlet></router-outlet>\n  </div>\n  </div>  \n  </div>\n</div>\n<div *ngIf=\"!loggedIn\">\n<!--<div class=\"container-fluid\" style=\"background: url('assets/img/iota.jpg') no-repeat; background-size: cover; \">-->\n  <div class=\"container\" >\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-6\">\n      <div style=\"margin-top:20%\">\n      <div class=\"card card-block\">\n        <p style=\"font-size: 36px; text-align: center;color: #595959\">GPP ADMIN</p>\n          <div *ngIf=\"error\">\n            <p style=\"color:red; text-align: center\">Invalid username and passsword.</p>\n          </div>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n              <div class=\"form-group\" style=\"padding:0 30px 10px 30px\">\n                <label class=\"labelStyle\" for=\"formGroupExampleInput\">User ID</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"username\" aria-describedby=\"basic-addon2\">\n                   <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                </div>\n\n                <label class=\"labelStyle\" for=\"formGroupExampleInput\">Password (case sensitive)</label>\n                <div class=\"input-group\">\n                  <input type=\"password\" class=\"form-control\" formControlName=\"password\" aria-describedby=\"basic-addon2\">\n                    <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                </div>\n              </div>\n          \n\n          <p style=\"text-align: center\">\n              <button type=\"submit\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" [disabled]=\"!loginForm.valid\">SIGN IN</button>\n          </p>\n          </form>\n      </div>\n    </div>\n  </div>\n  </div>\n  <!--</div>-->\n</div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.error = false;
        this.loginForm = formBuilder.group({
            /*First parameter is default value, second is an array of validations*/
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.loginUser = function (user) {
        if (user.username === "esibpmtest1" && user.password === "ADPadp01") {
            console.log("Inside login page" + user.username);
            this.error = false;
            this.loggedIn = true;
            // var newUser = {username:user.username, loggedin: true }
            // this.ngRedux.dispatch({type: LOGIN_USER, user:newUser}); 
            //this.router.navigate(['/']);
        }
        else {
            this.error = true;
        }
    };
    return HomepageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
    __metadata("design:type", Object)
], HomepageComponent.prototype, "user", void 0);
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.labelStyle{\r\n    color: #666666;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-left : 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-6\">\n      <div class=\"card card-block\">\n        <p style=\"font-size: 36px; text-align: center;color: #595959\">GPP ADMIN</p>\n          <div *ngIf=\"error\">\n            <p style=\"color:red; text-align: center\">Invalid username and passsword.</p>\n          </div>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n              <div class=\"form-group\" style=\"padding:0 30px 10px 30px\">\n                <label class=\"labelStyle\" for=\"formGroupExampleInput\">User ID</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"username\" aria-describedby=\"basic-addon2\">\n                   <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                </div>\n\n                <label class=\"labelStyle\" for=\"formGroupExampleInput\">Password (case sensitive)</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"password\" aria-describedby=\"basic-addon2\">\n                    <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                </div>\n              </div>\n          \n\n          <p style=\"text-align: center\">\n              <button type=\"submit\" class=\"btn btn-primary\" style=\"border:3px solid #1a8099; border-radius: 25px; background: #1a8099; \" [disabled]=\"!loginForm.valid\">SIGN IN</button>\n          </p>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginpageComponent = (function () {
    function LoginpageComponent(formBuilder, router, ngRedux) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.ngRedux = ngRedux;
        this.error = false;
        this.loggedIn = false;
        this.loginForm = formBuilder.group({
            /*First parameter is default value, second is an array of validations*/
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent.prototype.loginUser = function (user) {
        if (user.username === "esibpmtest1" && user.password === "ADPadp01") {
            console.log("Inside login page" + user.username);
            this.error = false;
            this.loggedIn = true;
            // var newUser = {username:user.username, loggedin: true }
            // this.ngRedux.dispatch({type: LOGIN_USER, user:newUser}); 
            //this.router.navigate(['/']);
        }
        else {
            this.error = true;
        }
    };
    return LoginpageComponent;
}());
LoginpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginpage',
        template: __webpack_require__("../../../../../src/app/loginpage/loginpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginpage/loginpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], LoginpageComponent);

var _a, _b, _c;
//# sourceMappingURL=loginpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getAllCountries = function () {
        return this.http.get('/api/countries')
            .map(function (res) { return res.json(); });
    };
    CountryService.prototype.getDepartmentNameForClientPage = function () {
        return this.http.get('/api/departmentNameForClient')
            .map(function (res) { return res.json(); });
    };
    CountryService.prototype.getAllClients = function () {
        return this.http.get('/api/clients')
            .map(function (res) { return res.json(); });
    };
    CountryService.prototype.getClientsForaDepartment = function (depName) {
        var url = '/api/clientsForADepartment/' + depName;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    CountryService.prototype.addAClient = function (client) {
        this.http.post('/api/addclient', client)
            .subscribe();
    };
    CountryService.prototype.addCountry = function (country) {
        console.log("Inside add country service");
        this.http.post('/api/addCountry', country)
            .subscribe();
    };
    CountryService.prototype.editCountry = function (country) {
        console.log("Inside edit country service");
        this.http.put('/api/editCountry', country)
            .subscribe();
    };
    return CountryService;
}());
CountryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CountryService);

var _a;
//# sourceMappingURL=country.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-group [class*='col-'] {\r\n  float:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink] = \"['/departmentList']\">Department<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink] = \"['/country']\">Country</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink] = \"['/toDoList']\">To Do List</a>\n      </li>\n    </ul>   \n  </div>\n</nav>\n\n\n\n<div class= \"container\" >\n<div class=\"card-group\">\n  <div class=\"card\" >\n      <div class=\"row  \">\n\n<nav class=\"nav flex-column \" style=\" background: #0e5061; \">\n  <a class=\"nav-link text-center text-white mx-auto active \" style=\"border-bottom: 1px solid #b5d1ff;height: 80px; margin-top: 12px; \" [routerLink] = \"['/departmentList']\" ><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Department List</a>\n  <a class=\"nav-link text-center text-white \"  style=\"border-bottom: 1px solid #b5d1ff;height: 80px;margin-top: 12px; \" [routerLink] = \"['/country']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Country</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 80px;margin-top: 12px; \" [routerLink] = \"['/toDoList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />To Do List</a>\n  \n</nav>\n\n\n</div>\n</div>\n  \n  <div class=\"card \">\n    <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Card title</h4>\n      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    </div>\n  </div>\n  </div>\n</div>\n  \n  <div class=\"container\" >\n   \n    <div style=\"width: 85px; display:inline-block;font-size: 14px\">\n       <div class=\"card\" >\n      <div class=\"row  \">\n\n<nav class=\"nav flex-column \" style=\" background: #0e5061;  \">\n  <a class=\"nav-link text-center text-white mx-auto active \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px; margin-top: 12px; \" [routerLink] = \"['/departmentList']\" ><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Department List</a>\n  <a class=\"nav-link text-center text-white \"  style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/country']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />Country</a>\n  <a class=\"nav-link text-center text-white \" style=\"border-bottom: 1px solid #b5d1ff;height: 85px;margin-top: 12px; \" [routerLink] = \"['/toDoList']\"><i class=\"fa fa-folder\" style=\"font-size: 2em\" aria-hidden=\"true\"></i><br />To Do List</a>\n  \n</nav>\n</div>\n</div></div><div style=\"width:90%;display:inline-block;margin-left: 20px;\"><div class=\"card \">\n    <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Card title</h4>\n      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    </div>\n  </div></div>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map