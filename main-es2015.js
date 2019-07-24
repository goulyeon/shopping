(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>장바구니 목록</h3>\n\n<p>\n  <a routerLink=\"/shipping\">배송비용안내</a>\n</p>\n\n<div class=\"cart-item\" *ngFor=\"let item of items\">\n  <span>{{ item.name }} </span>\n  <span>{{ item.price | comma }}</span>\n</div>\n\n<h4>주문하기</h4>\n<form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n    <div>\n      <label>이름</label>\n      <input type=\"text\" formControlName=\"name\">\n    </div>\n   \n    <div>\n      <label>주소</label>\n      <input type=\"text\" formControlName=\"address\">\n    </div>\n   \n    <button class=\"button\" type=\"submit\">주문하기</button>    \n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-alerts/product-alerts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-alerts/product-alerts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"product.price > 40000\">\n  <button (click)=\"notify.emit()\">알림</button>\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>제품 상세페이지</h2>\n\n<div *ngIf=\"product\">\n  <h3>{{ product.name }}</h3>\n  <!-- Comma Pipe 기능 사용하기 -->\n  <h4>{{ product.price | comma }}</h4>\n  <p>{{ product.description }}</p>\n  <button (click)=\"addToCart(product)\">장바구니 추가</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>제품리스트</h2>\n<div *ngFor=\"let product of products; index as productId\">\n  <h3>\n    <a [title]=\"product.name + ' 상세'\" [routerLink]=\"['/products', productId]\">{{product.name}}</a>\n  </h3>\n\n  <p *ngIf=\"product.description\">\n    {{ product.description }}\n  </p>\n  <button (click)=\"share()\">\n    공유하기\n  </button>\n\n  <!-- 자식컴포넌트 집어넣기 -->\n  <app-product-alerts\n    [product]=\"product\" (notify)=\"onNotify()\">\n  </app-product-alerts>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping/shipping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>배송비용 안내</h3>\n\n<!-- async 파이프를 사용하여 json배송비용정보를 출력한다. -->\n<div class=\"shipping-item\" *ngFor=\"let shipping of shippingCosts | async\">\n  <span>{{ shipping.type }} </span>\n  <span>{{ shipping.price | comma }}</span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\">\n  <h1>카카오 프렌즈</h1>\n</a>\n\n<a routerLink=\"/cart\" class=\"button fancy-button\">\n  <i class=\"material-icons\">shopping_cart</i>\n  장바구니\n</a>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shopping';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-alerts/product-alerts.component */ "./src/app/product-alerts/product-alerts.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _comma_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comma.pipe */ "./src/app/comma.pipe.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
            _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ProductAlertsComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_12__["ShippingComponent"],
            _comma_pipe__WEBPACK_IMPORTED_MODULE_13__["CommaPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
                { path: 'products/:productId', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"] },
                { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_12__["ShippingComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = 
//컴포넌트 전역에서 사용될 기능목록을 가지고 있는 서비스
class CartService {
    constructor(http) {
        this.http = http;
        //장바구니에 담길 아이템 목록
        this.items = [];
    }
    //장바구니 담기
    addToCart(product) {
        this.items.push(product);
    }
    //아이템 목록 얻기
    getItems() {
        return this.items;
    }
    //장바구니 비우기
    clearCart() {
        this.items = [];
        return this.items;
    }
    //배송비용 정보 가져오기 
    getShippingPrices() {
        return this.http.get('assets/shipping.json');
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //컴포넌트 전역에서 사용될 기능목록을 가지고 있는 서비스
], CartService);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");




let CartComponent = class CartComponent {
    constructor(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        //생성자 호출시 카트서비스 항목중 getItems()메소드를 호출하여 현재 장바구니에 담겨진 목록을 
        //리턴받아서 items에 저장
        this.items = this.cartService.getItems();
        //주문하기폼에 저장할 값은 이름과 주소
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    ngOnInit() {
    }
    //주문하기를 누르면 수행하는 기능
    onSubmit(customerData) {
        // 주문 로직은 여기에 구현합니다.
        alert('주문하기가 완료되었습니다.');
        // warn()경고 
        console.warn('주문하기가 완료되었습니다.', customerData);
        //장바구니를 비운다.
        this.items = this.cartService.clearCart();
        //주문하기 폼을 reset한다.
        this.checkoutForm.reset();
    }
};
CartComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/comma.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/comma.pipe.ts ***!
  \*******************************/
/*! exports provided: CommaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommaPipe", function() { return CommaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommaPipe = class CommaPipe {
    //구현해야할 메소드 
    transform(value) {
        //숫자를 매개변수로 받은 후 세자리단위로 콤마를 찍은 뒤 가장뒤에 '원'을 붙여서 리턴
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
    }
};
CommaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'comma'
    })
], CommaPipe);



/***/ }),

/***/ "./src/app/product-alerts/product-alerts.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-alerts/product-alerts.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWxlcnRzL3Byb2R1Y3QtYWxlcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-alerts/product-alerts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-alerts/product-alerts.component.ts ***!
  \************************************************************/
/*! exports provided: ProductAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAlertsComponent", function() { return ProductAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ProductAlertsComponent = class ProductAlertsComponent {
    constructor() {
        //Output데코레이터 자식컴포넌트에서 이벤트를 보낼때 사용
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductAlertsComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductAlertsComponent.prototype, "notify", void 0);
ProductAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-alerts',
        template: __webpack_require__(/*! raw-loader!./product-alerts.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-alerts/product-alerts.component.html"),
        styles: [__webpack_require__(/*! ./product-alerts.component.css */ "./src/app/product-alerts/product-alerts.component.css")]
    })
], ProductAlertsComponent);



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    ngOnInit() {
        //처음 컴포넌트를 실행할 때 초기화해야할 것들을 안쪽에서 수행한다.
        this.route.paramMap.subscribe(params => {
            this.product = _products__WEBPACK_IMPORTED_MODULE_3__["products"][+params.get('productId')];
        });
    }
    //장바구니에 상품 담기
    addToCart(product) {
        window.alert('제품을 장바구니에 담았습니다.');
        //실제로 장바구니에 담기위해서 카트서비스 항목중에 addToCart()메소드를 호출해서 사용한다. 
        this.cartService.addToCart(product);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");



let ProductListComponent = class ProductListComponent {
    constructor() {
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    ngOnInit() {
    }
    //공유하기 기능 
    share() {
        alert('공유하였습니다.');
    }
    //알림 메세지 기능
    onNotify() {
        window.alert('이제품이 세일을 하면 알려주겠습니다.');
    }
};
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/products.ts":
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
const products = [
    {
        name: '라이언',
        price: 40000,
        description: `
      큰 덩치와 무뚝뚝한 표정으로 오해를 많이 사지만, 
        사실 누구보다도 여리고 섬세한 소녀감성을 지닌 반전 매력의 소유자! 
        원래 아프리카 둥둥섬 왕위 계승자였으나, 자유로운 삶을 동경해 탈출! 
        카카오프렌즈의 든든한 조언자 역할을 맡고 있습니다. 
        꼬리가 길면 잡히기 때문에, 꼬리가 짧습니다.`
    },
    {
        name: '어피치',
        price: 30000,
        description: `유전자 변이로 자웅동주가 된 것을 알고 
      복숭아 나무에서 탈출한 악동 복숭아 어피치! 
      섹시한 뒷태로 사람들을 매혹시키며, 
      성격이 매우 급하고 과격합니다.`
    },
    {
        name: '제이지',
        price: 50000,
        description: `땅속 나라 고향에 대한 향수병이 있는 비밀요원 제이지! 
      사명의식이 투철하여 냉철해보이고 싶으나, 실은 어리버리합니다. 
      겉모습과 달리 알고보면 외로움을 많이 타는 여린 감수성의 소유자. 
      힙합 가수 Jay-Z의 열혈팬입니다.`
    }
];


/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL3NoaXBwaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



let ShippingComponent = class ShippingComponent {
    constructor(cartService) {
        this.cartService = cartService;
        //생성자 호출시 카트서비스 항목중에 getShippingPrices()호출해서 배송비용 정보에 저장
        this.shippingCosts = this.cartService.getShippingPrices();
    }
    ngOnInit() {
    }
};
ShippingComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: __webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html"),
        styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
    })
], ShippingComponent);



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
    })
], TopBarComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\학생방\ncs 웹퍼블리셔\웹표준코딩실무\05.angular\angular\shopping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map