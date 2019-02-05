(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routeComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeComponents", function() { return routeComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/main/main.component */ "./src/app/content/main/main.component.ts");
/* harmony import */ var _content_product_creator_product_creator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/product-creator/product-creator.component */ "./src/app/content/product-creator/product-creator.component.ts");
/* harmony import */ var _content_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/products/products.component */ "./src/app/content/products/products.component.ts");
/* harmony import */ var _content_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/orders/orders.component */ "./src/app/content/orders/orders.component.ts");
/* harmony import */ var _content_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/order-detail/order-detail.component */ "./src/app/content/order-detail/order-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _content_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'product_create', component: _content_product_creator_product_creator_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreatorComponent"] },
    { path: 'products', component: _content_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'orders', component: _content_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"] },
    { path: 'orders/:orderdetail', component: _content_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routeComponents = [
    _content_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
    _content_product_creator_product_creator_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreatorComponent"],
    _content_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
    _content_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
    _content_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Test shop \"At Jeorgius'\"\r\n  </h1>\r\n  <div class=\"content\">\r\n    <app-navigation></app-navigation>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _content_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/products/products.component */ "./src/app/content/products/products.component.ts");
/* harmony import */ var _content_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/orders/orders.component */ "./src/app/content/orders/orders.component.ts");
/* harmony import */ var _content_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/order-detail/order-detail.component */ "./src/app/content/order-detail/order-detail.component.ts");
/* harmony import */ var _content_product_creator_product_creator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/product-creator/product-creator.component */ "./src/app/content/product-creator/product-creator.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _content_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/main/main.component */ "./src/app/content/main/main.component.ts");
/* harmony import */ var _content_services_display_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/services/display.service */ "./src/app/content/services/display.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _content_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _content_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"],
                _content_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailComponent"],
                _content_product_creator_product_creator_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreatorComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _content_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_content_services_display_service__WEBPACK_IMPORTED_MODULE_12__["DisplayService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/main/main.component.css":
/*!*************************************************!*\
  !*** ./src/app/content/main/main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Choose category to view\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/content/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/content/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/content/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/content/order-detail/order-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content/order-detail/order-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/order-detail/order-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content/order-detail/order-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  order-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/content/order-detail/order-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/order-detail/order-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/display.service */ "./src/app/content/services/display.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(SelectedLink, Display) {
        this.SelectedLink = SelectedLink;
        this.Display = Display;
        this.orderDetailList = [];
    }
    //pass the link taken from the URL to REST service and get OrderDetailList
    //based on its orderId
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.Display.displayOrderDetails(this.SelectedLink.snapshot.paramMap.get("order"));
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/content/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/content/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_display_service__WEBPACK_IMPORTED_MODULE_2__["DisplayService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/content/orders/orders.component.css":
/*!*****************************************************!*\
  !*** ./src/app/content/orders/orders.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orders{\r\n  display: flex;\r\n}\r\n\r\n.order{\r\n  text-align: center;\r\n  margin: 10px;\r\n  height: 40px;\r\n  width: 100%;\r\n}\r\n\r\n/*shadow box instead of border*/\r\n\r\n.order:hover{\r\n  box-shadow: 0 2px 0 antiquewhite, 0 2px 0 antiquewhite inset;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/orders/orders.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/orders/orders.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Quantity\r\n  <input type=\"text\" [(ngModel)]=\"email\" >\r\n  <input type=\"button\" (click)=\"createOrder()\">\r\n</div>\r\n<div class=\"orders\">\r\n  <div class=\"order\"  *ngFor=\"let order of orderList\" (click)=\"goToOrder(order.order_id)\">\r\n    <div>{{order.order_id}}</div>\r\n    <div>{{order.email}}</div>\r\n    <div>{{order.date_add}}</div>\r\n    <div>{{order.order_total_sum}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/orders/orders.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/orders/orders.component.ts ***!
  \****************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/display.service */ "./src/app/content/services/display.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_save_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/save.service */ "./src/app/content/services/save.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(Display, Save, ReRoute) {
        this.Display = Display;
        this.Save = Save;
        this.ReRoute = ReRoute;
        this.orderList = [];
        this.email = "";
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Display.displayOrders().subscribe(function (data) { return _this.orderList = data; });
    };
    OrdersComponent.prototype.goToOrder = function (order) {
        this.ReRoute.navigate(["/orders", order.order_id]);
    };
    OrdersComponent.prototype.createOrder = function () {
        this.Save.createOrder(this.email);
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/content/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/content/orders/orders.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_display_service__WEBPACK_IMPORTED_MODULE_1__["DisplayService"],
            _services_save_service__WEBPACK_IMPORTED_MODULE_3__["SaveService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/content/product-creator/new-product.ts":
/*!********************************************************!*\
  !*** ./src/app/content/product-creator/new-product.ts ***!
  \********************************************************/
/*! exports provided: NewProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProduct", function() { return NewProduct; });
var NewProduct = /** @class */ (function () {
    function NewProduct(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
    return NewProduct;
}());



/***/ }),

/***/ "./src/app/content/product-creator/product-creator.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/product-creator/product-creator.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Login_forms {\r\n  width: 60%;\r\n  color:whitesmoke;\r\n  /*margin: 0 10px 5px 5px;*/\r\n  background: transparent;\r\n  border-color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding-left: inherit;\r\n  margin-top: 5px;\r\n  font-size: 25px;\r\n}\r\n#registerButton {\r\n  background-color: #77FF77;\r\n  margin-top: 10px;\r\n  outline: none;\r\n  border-radius: 5px;\r\n}\r\ninput {\r\n  outline: none;\r\n  text-indent: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/product-creator/product-creator.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/product-creator/product-creator.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm=\"ngForm\" (ngSubmit)=\"submitProduct()\">\r\n  {{newProduct | json}}\r\n  <div>Product title:<br/><input class=\"Login_forms\" type=\"text\" name=\"title\" [(ngModel)]=\"newProduct.title\" /></div>\r\n  <div>Price:<br/> <input class=\"Login_forms\" type=\"number\" name=\"price\" [(ngModel)]=\"newProduct.price\" /></div>\r\n  <div>Description:<br/> <textarea class=\"Login_forms\" type=\"text\" name=\"description\" [(ngModel)]=\"newProduct.description\"></textarea></div>\r\n  <button id=\"registerButton\" type=\"submit\">Push it already</button>\r\n</form>\r\n<br/><br/>\r\n<div>{{resultMsg}}</div>\r\n"

/***/ }),

/***/ "./src/app/content/product-creator/product-creator.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/product-creator/product-creator.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreatorComponent", function() { return ProductCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-product */ "./src/app/content/product-creator/new-product.ts");
/* harmony import */ var _services_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/save.service */ "./src/app/content/services/save.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCreatorComponent = /** @class */ (function () {
    function ProductCreatorComponent(Save) {
        this.Save = Save;
        this.newProduct = new _new_product__WEBPACK_IMPORTED_MODULE_1__["NewProduct"]('', 0, '');
        this.resultMsg = "";
    }
    ProductCreatorComponent.prototype.ngOnInit = function () { };
    ProductCreatorComponent.prototype.submitProduct = function () {
        var _this = this;
        this.Save.saveProduct(this.newProduct)
            .subscribe(function (data) { return _this.resultMsg = data; }, function (error) { return _this.resultMsg = error; });
    };
    ProductCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-creator',
            template: __webpack_require__(/*! ./product-creator.component.html */ "./src/app/content/product-creator/product-creator.component.html"),
            styles: [__webpack_require__(/*! ./product-creator.component.css */ "./src/app/content/product-creator/product-creator.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_save_service__WEBPACK_IMPORTED_MODULE_2__["SaveService"]])
    ], ProductCreatorComponent);
    return ProductCreatorComponent;
}());



/***/ }),

/***/ "./src/app/content/products/products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/content/products/products.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products{\r\n  display: flex;\r\n}\r\n\r\n.product{\r\n  text-align: center;\r\n  margin: 10px;\r\n  width: 150px;\r\n}\r\n\r\n/*shadow box instead of border*/\r\n\r\n.product:hover{\r\n  box-shadow: 0 2px 0 antiquewhite, 0 2px 0 antiquewhite inset;\r\n}\r\n\r\n.content{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/products/products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/content/products/products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\r\n  <div class=\"product\" *ngFor=\"let product of products\" >\r\n    <div><b>ID: </b>{{product.product_id}}</div>\r\n    <div>${{product.price}}</div>\r\n    <div><b>{{product.title}}</b></div>\r\n    <div>{{product.description}}</div>\r\n    <br/><br/>\r\n    <div>Quantity\r\n      <input type=\"number\" (ngModel)=\"quantity\" >\r\n      <input type=\"button\" (click)=\"addToOrder(product.product_id,quantity)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/display.service */ "./src/app/content/services/display.service.ts");
/* harmony import */ var _services_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/save.service */ "./src/app/content/services/save.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(Display, Add) {
        this.Display = Display;
        this.Add = Add;
        this.products = [];
        this.quantity = 0;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Display.displayProducts().subscribe(function (data) { return _this.products = data; });
    };
    ProductsComponent.prototype.addToOrder = function (product_id, qty) {
        this.Add.addToLastOrder(product_id, qty);
        alert("Product " + product_id + " added to Order");
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/content/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/content/products/products.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_display_service__WEBPACK_IMPORTED_MODULE_1__["DisplayService"],
            _services_save_service__WEBPACK_IMPORTED_MODULE_2__["SaveService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/content/services/display.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/services/display.service.ts ***!
  \*****************************************************/
/*! exports provided: DisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayService", function() { return DisplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayService = /** @class */ (function () {
    function DisplayService(Http) {
        this.Http = Http;
        this.JavaServer = "http://localhost:8001";
    }
    DisplayService.prototype.displayProducts = function () {
        return this.Http.get(this.JavaServer + "/products");
    };
    DisplayService.prototype.displayOrders = function () {
        return this.Http.get(this.JavaServer + "/orders");
    };
    DisplayService.prototype.displayOrderDetails = function (orderId) {
        return this.Http.get(this.JavaServer + "/orders/" + orderId);
    };
    DisplayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DisplayService);
    return DisplayService;
}());



/***/ }),

/***/ "./src/app/content/services/save.service.ts":
/*!**************************************************!*\
  !*** ./src/app/content/services/save.service.ts ***!
  \**************************************************/
/*! exports provided: SaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveService", function() { return SaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveService = /** @class */ (function () {
    function SaveService(Http) {
        this.Http = Http;
        this.JavaServer = "http://localhost:8001";
    }
    SaveService.prototype.saveProduct = function (newProduct) {
        return this.Http.post(this.JavaServer + "/create_product", newProduct);
    };
    SaveService.prototype.addToLastOrder = function (product_id, qty) {
        return this.Http.post(this.JavaServer + "/add_to_cart", [product_id, qty]);
    };
    SaveService.prototype.createOrder = function (email) {
        return this.Http.post(this.JavaServer + "/create_order", [email]);
    };
    SaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SaveService);
    return SaveService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n  display: flex;\r\n}\r\n\r\n.navigation_bar{\r\n  text-align: center;\r\n}\r\n\r\n/*shadow box instead of border*/\r\n\r\nli:hover{\r\n  box-shadow: 0 2px 0 antiquewhite, 0 2px 0 antiquewhite inset;\r\n}\r\n\r\nul, ul li {\r\n  list-style: none;\r\n  padding:0;\r\n  margin: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n\r\na:visited {\r\n  color: whitesmoke;\r\n  outline: none;\r\n}\r\n\r\na:link {\r\n  color: whitesmoke;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.content{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation_bar\">\r\n  <ul>\r\n    <li routerLink=\"/products\">Products</li>\r\n    <li routerLink=\"/orders\">Orders</li>\r\n    <li routerLink=\"/product_create\">Create Product</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\Interview\shop_simple\front-ts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map