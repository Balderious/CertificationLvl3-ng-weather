"use strict";
(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 7937);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 8056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 7187);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 5597);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _shared_components_state_button_state_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/state-button/state-button.component */ 7292);
/* harmony import */ var _shared_components_inputAutocomplete_input_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/inputAutocomplete/input-autocomplete.component */ 4180);
/* harmony import */ var _shared_components_inputAutocomplete_component_option_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/inputAutocomplete/component/option.component */ 8061);
/* harmony import */ var _shared_pipes_dataFilter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pipes/dataFilter.pipe */ 3590);
/* harmony import */ var _shared_directives_hightlightText_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/directives/hightlightText.directive */ 8164);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent,
            _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent,
            _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent,
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent,
            _shared_components_state_button_state_button_component__WEBPACK_IMPORTED_MODULE_9__.StateButtonComponent,
            _shared_components_inputAutocomplete_input_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__.InputAutocompleteComponent,
            _shared_components_inputAutocomplete_component_option_component__WEBPACK_IMPORTED_MODULE_11__.OptionComponent,
            _shared_pipes_dataFilter_pipe__WEBPACK_IMPORTED_MODULE_12__.DataFilterPipe,
            _shared_directives_hightlightText_directive__WEBPACK_IMPORTED_MODULE_13__.HightlightTextDirective,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production }),
        ],
        providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);



const appRoutes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
    },
    {
        path: 'forecast/:zipcode', component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ 5597:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsComponent": () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 7187);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 8056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor(weatherService, locationService, router) {
    this.weatherService = weatherService;
    this.locationService = locationService;
    this.router = router; // Get store (Subject) from weatherService to be use in the template with an async

    this.currentConditionsList = this.weatherService.getCurrentConditions();
  }

  ngOnInit() {
    // Auto refresh system. Possibility to specify the delay (here: 30 seconds as requested)
    this.locationService.startAutoRefreshLocationsCurrentConditions(30000);
  }

  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }

  ngOnDestroy() {
    this.locationService.stopAutoRefreshLocationsCurrentConditions();
  }

};

CurrentConditionsComponent.ctorParameters = () => [{
  type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
}, {
  type: _location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], CurrentConditionsComponent);


/***/ }),

/***/ 8405:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastsListComponent": () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 7187);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
    constructor(weatherService, route) {
        this.weatherService = weatherService;
        route.params.subscribe(params => {
            this.zipcode = params['zipcode'];
            console.log("params['zipcode'] = ", this.zipcode);
            weatherService.getForecast(this.zipcode)
                .subscribe(data => this.forecast = data);
        });
    }
};
ForecastsListComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ForecastsListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forecasts-list',
        template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForecastsListComponent);



/***/ }),

/***/ 8056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATIONS": () => (/* binding */ LOCATIONS),
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ 7187);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6800);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = "locations";
let LocationService = class LocationService {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.locations = [];
    }
    // Start auto refresh of locations current conditions
    startAutoRefreshLocationsCurrentConditions(delay) {
        this.refreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1, delay).subscribe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(() => {
            this.loadLocationsCurrentConditions();
        }));
    }
    // Load current conditions
    loadLocationsCurrentConditions() {
        let locString = localStorage.getItem(LOCATIONS);
        if (locString)
            this.locations = JSON.parse(locString);
        for (let loc of this.locations)
            this.weatherService.addCurrentConditions(loc);
    }
    addLocation(zipcode) {
        this.locations.push(zipcode);
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        this.weatherService.addCurrentConditions(zipcode);
    }
    removeLocation(zipcode) {
        let index = this.locations.indexOf(zipcode);
        if (index !== -1) {
            this.locations.splice(index, 1);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
            this.weatherService.removeCurrentConditions(zipcode);
        }
    }
    // Stop auto refresh system
    stopAutoRefreshLocationsCurrentConditions() {
        this.refreshTimer.unsubscribe();
    }
};
LocationService.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService }
];
LocationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LocationService);



/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {
};
MainPageComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-main-page',
        template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], MainPageComponent);



/***/ }),

/***/ 8061:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/component/option.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": () => (/* binding */ OptionComponent)
/* harmony export */ });
/* harmony import */ var _option_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option.component.html?ngResource */ 9040);
/* harmony import */ var _option_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option.component.css?ngResource */ 7694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6312);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let OptionComponent = class OptionComponent {
    constructor() {
        this.optionSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.optionElement.nativeElement, 'click').subscribe(res => this.optionSelected());
    }
    optionSelected() {
        this.optionSelectedEvent.emit(this.optionData);
    }
};
OptionComponent.propDecorators = {
    optionElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['option',] }],
    optionData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    searchedText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    optionSelectedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
OptionComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-option',
        template: _option_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_option_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionComponent);



/***/ }),

/***/ 4180:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/input-autocomplete.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputAutocompleteComponent": () => (/* binding */ InputAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-autocomplete.component.html?ngResource */ 3855);
/* harmony import */ var _input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-autocomplete.component.css?ngResource */ 7389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let InputAutocompleteComponent = class InputAutocompleteComponent {
    constructor() {
        this.optionsData = [];
        this.optionSelectedDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.inputSearchValue = '';
        this.isFocus = false;
    }
    // If the user choose an item:
    // 1. Label is loaded in the inputSearchValue to show the selected country name
    // 2. The data continue to the parent to allow him to recover the zipcode
    // 3. Close the dropdown
    getOptionDataSelected(optionSelectedData) {
        this.inputSearchValue = optionSelectedData.label;
        this.optionSelectedDataEvent.emit(optionSelectedData);
        this.isFocus = false;
    }
    // If Focus, the dropdown is showed
    onFocus() { this.isFocus = true; }
    // If OnFocus, the dropdown is hidden
    onFocusOut() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(100).subscribe(() => this.isFocus = false);
    }
};
InputAutocompleteComponent.ctorParameters = () => [];
InputAutocompleteComponent.propDecorators = {
    optionsData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    placeholderInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    optionSelectedDataEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
InputAutocompleteComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input-autocomplete',
        template: _input_autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_input_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputAutocompleteComponent);



/***/ }),

/***/ 7292:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/state-button/state-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateButtonComponent": () => (/* binding */ StateButtonComponent)
/* harmony export */ });
/* harmony import */ var _state_button_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-button.component.css?ngResource */ 1089);
/* harmony import */ var _state_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-button.component.html?ngResource */ 240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let StateButtonComponent = class StateButtonComponent {
    constructor() {
        // Notify the parent the button has been clicked.
        this.actionTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.actionTimer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(500);
        this.resetButtonTimer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(500);
    }
    ngOnInit() {
        // Check if the parent sent templates for three states or else load the default templates.
        if (!this.initialStateTemplate)
            this.initialStateTemplate = this.defaultSaveTemplate;
        if (!this.workingStateTemplate)
            this.workingStateTemplate = this.defaultLoadingTemplate;
        if (!this.initialStateTemplate)
            this.doneStateTemplate = this.defaultSavedTemplate;
        this.currentStateTemplate = this.initialStateTemplate;
    }
    triggerAction() {
        this.currentStateTemplate = this.workingStateTemplate;
        this.actionTriggered.emit();
        // Simple timer observable to visualize the change of state
        this.actionTimer$.subscribe(() => {
            this.currentStateTemplate = this.doneStateTemplate;
            // Reset the button state.
            this.resetButtonTimer$.subscribe(() => this.currentStateTemplate = this.initialStateTemplate);
        });
    }
};
StateButtonComponent.ctorParameters = () => [];
StateButtonComponent.propDecorators = {
    defaultSaveTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['save',] }],
    defaultLoadingTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['loading',] }],
    defaultSavedTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['saved',] }],
    initialStateTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    workingStateTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    doneStateTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    actionTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
StateButtonComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-state-button',
        template: _state_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
        styles: [_state_button_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__]
    })
], StateButtonComponent);



/***/ }),

/***/ 8164:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/hightlightText.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HightlightTextDirective": () => (/* binding */ HightlightTextDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HightlightTextDirective = class HightlightTextDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ngOnChanges(changes) {
        if (!this.content) {
            return;
        }
        if (!this.targetedCharacters || !this.targetedCharacters.length || !this.highlightingClass) {
            this.renderer.setProperty(this.element.nativeElement, 'innerHTML', this.content);
            return;
        }
        this.renderer.setProperty(this.element.nativeElement, 'innerHTML', this.getHighlightingText());
    }
    getHighlightingText() {
        const filterRe = new RegExp(`(${this.targetedCharacters})`, 'gi');
        return this.content.replace(filterRe, `<span class="${this.highlightingClass}">$1</span>`);
    }
};
HightlightTextDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
HightlightTextDirective.propDecorators = {
    highlightingClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    targetedCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
HightlightTextDirective = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appHightlightText]'
    })
], HightlightTextDirective);



/***/ }),

/***/ 3590:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/dataFilter.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataFilterPipe": () => (/* binding */ DataFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DataFilterPipe = class DataFilterPipe {
    transform(items, expectedText) {
        if (!items) {
            return [];
        }
        if (!expectedText) {
            return items;
        }
        expectedText = expectedText.toLocaleLowerCase();
        return items = items.filter(item => {
            return item.label.toLocaleLowerCase().includes(expectedText);
        });
    }
};
DataFilterPipe = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
        name: 'dataFilter'
    })
], DataFilterPipe);



/***/ }),

/***/ 7187:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;



let WeatherService = WeatherService_1 = class WeatherService {
    constructor(http) {
        this.http = http;
        this.currentConditions = [];
        this.currentConditionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    addCurrentConditions(zipcode) {
        // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
        this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`)
            .subscribe(data => {
            // This process will check if the zipcode already was loaded in the store.
            let alreadyExist = this.currentConditions.find(element => element.zip === zipcode);
            if (alreadyExist) {
                // Yes ? then the data will be updated.
                alreadyExist = { ...alreadyExist, data: data };
                this.currentConditions.map(item => item.zip === alreadyExist.zip ? alreadyExist : item);
            }
            else {
                // No ? then the data will be added in the store.
                this.currentConditions.push({ zip: zipcode, data: data });
            }
            this.currentConditionsSubject.next(this.currentConditions);
        });
    }
    removeCurrentConditions(zipcode) {
        for (let i in this.currentConditions) {
            if (this.currentConditions[i].zip == zipcode)
                this.currentConditions.splice(+i, 1);
        }
    }
    getCurrentConditions() {
        return this.currentConditionsSubject.asObservable();
    }
    getForecast(zipcode) {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
    }
    getWeatherIcon(id) {
        if (id >= 200 && id <= 232)
            return WeatherService_1.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return WeatherService_1.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return WeatherService_1.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return WeatherService_1.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return WeatherService_1.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return WeatherService_1.ICON_URL + "art_fog.png";
        else
            return WeatherService_1.ICON_URL + "art_clear.png";
    }
};
WeatherService.URL = 'http://api.openweathermap.org/data/2.5';
WeatherService.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
WeatherService.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
WeatherService = WeatherService_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], WeatherService);



/***/ }),

/***/ 6207:
/*!*************************************************************!*\
  !*** ./src/app/zipcode-entry/fakeCountriesListAvailable.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fakeCountriesListAvailable": () => (/* binding */ fakeCountriesListAvailable)
/* harmony export */ });
const fakeCountriesListAvailable = [
    { label: 'New York', value: '10001' },
    { label: 'Rancho Cordova', value: '95742' },
    { label: 'Broward County', value: '33311' },
    { label: 'Kings County', value: '11203' },
    { label: 'Cook County', value: '60602' },
    { label: 'Jefferson County', value: '40258' },
    { label: 'France', value: '25000' },
    { label: 'Australia', value: '2024' },
];


/***/ }),

/***/ 7937:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipcodeEntryComponent": () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 8056);
/* harmony import */ var _fakeCountriesListAvailable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fakeCountriesListAvailable */ 6207);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ZipcodeEntryComponent = class ZipcodeEntryComponent {
    constructor(service) {
        this.service = service;
        // Get mock data to be used with inputAutocomplete
        this.countriesDataMock = _fakeCountriesListAvailable__WEBPACK_IMPORTED_MODULE_2__.fakeCountriesListAvailable;
    }
    addLocation() {
        this.service.addLocation(this.zipcode.nativeElement.value);
    }
    // Retrieve the country data selected by the user to send the zipcode in the appropriate input.
    getCountryData(countrySelectedData) {
        this.zipcode.nativeElement.value = countrySelectedData.value;
    }
};
ZipcodeEntryComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService }
];
ZipcodeEntryComponent.propDecorators = {
    zipcode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['zipcode',] }]
};
ZipcodeEntryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-zipcode-entry',
        template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ZipcodeEntryComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 7303:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXJyZW50LWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7309:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7694:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/component/option.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ":host /deep/ .hightlight-text-bold {\r\n    font-weight: bold;\r\n}\r\n\r\n:host /deep/ .option {\r\n    background: white;\r\n    padding: 1rem;\r\n    width: 200px;\r\n}\r\n\r\n:host /deep/ .option:hover {\r\n    background: lightgrey;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLmhpZ2h0bGlnaHQtdGV4dC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAub3B0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7389:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/input-autocomplete.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ":host /deep/ .autocomplete-wrapper {\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n:host /deep/ .autocomplete-wrapper .form-control {\r\n    width: 200px;\r\n}\r\n\r\n:host /deep/ .options-list {\r\n    border: 1px solid lightgrey;\r\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n    position: absolute;\r\n    top: 34px;\r\n    left: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztBQUNYIiwiZmlsZSI6ImlucHV0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5hdXRvY29tcGxldGUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmF1dG9jb21wbGV0ZS13cmFwcGVyIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm9wdGlvbnMtbGlzdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNHB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1089:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/state-button/state-button.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ":host /deep/ .btn-secondary {\r\n    background-color: #74acfc;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3RhdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0YWNmYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n  <div *ngFor=\"let location  of currentConditionsList | async\" class=\"well flex\" (click)=\"showForecast(location.zip)\">\r\n    <div>\r\n      <h3>{{location.data.name}} ({{location.zip}})</h3>\r\n      <h4>Current conditions: {{location.data.weather[0].main}}</h4>\r\n      <h4>Temperatures today:</h4>\r\n      <p>\r\n        Current {{location.data.main.temp | number:'.0-0'}}\r\n        - Max {{location.data.main.temp_max | number:'.0-0'}}\r\n        - Min {{location.data.main.temp_min | number:'.0-0'}}\r\n      </p>\r\n      <p>\r\n        <a [routerLink]=\"['/forecast', location.zip]\" >Show 5-day forecast for {{location.data.name}}</a>\r\n      </p>\r\n    </div>\r\n    <div>\r\n      <span class=\"close\" (click)=\"locationService.removeLocation(location.zip)\">&times;</span>\r\n      <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\r\n    </div>\r\n </div>\r\n</div>\r\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n\r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 9040:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/component/option.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div #option class=\"option\"\r\n     appHightlightText\r\n     [targetedCharacters]=\"searchedText\"\r\n     [highlightingClass]=\"'hightlight-text-bold'\"\r\n     [content]=\"optionData.label\"\r\n>\r\n    {{optionData.label}}\r\n</div>\r\n";

/***/ }),

/***/ 3855:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/inputAutocomplete/input-autocomplete.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"autocomplete-wrapper\">\r\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"placeholderInput\"\r\n           [(ngModel)]=\"inputSearchValue\"\r\n           (focus)=\"onFocus()\"\r\n           (focusout)=\"onFocusOut()\"\r\n    >\r\n\r\n    <ng-container *ngIf=\"isFocus\">\r\n        <div class=\"options-list\">\r\n            <app-option *ngFor=\"let option of optionsData | dataFilter: inputSearchValue\"\r\n                        [optionData]=\"option\"\r\n                        [searchedText]=\"inputSearchValue\"\r\n                        (optionSelectedEvent)=\"getOptionDataSelected($event)\"\r\n            >\r\n            </app-option>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n";

/***/ }),

/***/ 240:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/state-button/state-button.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<button\r\n        [ngClass]=\"{\r\n            'btn': true,\r\n            'btn-primary': currentStateTemplate === initialStateTemplate,\r\n            'btn-secondary': currentStateTemplate === workingStateTemplate,\r\n            'btn-success': currentStateTemplate === doneStateTemplate\r\n        }\" class=\"btn btn-primary\"\r\n        (click)=\"triggerAction()\">\r\n    <ng-container *ngTemplateOutlet=\"currentStateTemplate\"></ng-container>\r\n</button>\r\n\r\n<!-- Default templates-->\r\n<ng-template #save>\r\n    Save\r\n</ng-template>\r\n\r\n<ng-template #loading>\r\n    <img src=\"https://github.com/alcfeoh/ng-advanced-workshop/raw/master/src/assets/loader.gif\" style=\"width: 20px\">\r\n</ng-template>\r\n\r\n<ng-template #saved>\r\n    Saved!\r\n</ng-template>\r\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"well\">\r\n  <h2>Select country or enter a zipcode:</h2>\r\n\r\n  <app-input-autocomplete\r\n          [optionsData]=\"countriesDataMock\"\r\n          [placeholderInput]=\"'Select country'\"\r\n          (optionSelectedDataEvent)=\"getCountryData($event)\"\r\n  ></app-input-autocomplete>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n\r\n  <br>\r\n  <app-state-button\r\n    [initialStateTemplate]=\"load\"\r\n    [workingStateTemplate]=\"loading\"\r\n    [doneStateTemplate]=\"loaded\"\r\n    (actionTriggered)=\"addLocation()\"\r\n  ></app-state-button>\r\n</div>\r\n\r\n<!-- Templates to customize state-button-->\r\n<ng-template #load>\r\n  Add location\r\n</ng-template>\r\n\r\n<ng-template #loading>\r\n  Adding...\r\n</ng-template>\r\n\r\n<ng-template #loaded>\r\n  <img src=\"./assets/icons/check-circle.png\" style=\"width:20px; margin-right: 5px; margin-top: -2px;\">Done\r\n</ng-template>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map