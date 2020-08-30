function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cat_versus_cat_cat_versus_cat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cat-versus-cat/cat-versus-cat.component */
    "./src/app/cat-versus-cat/cat-versus-cat.component.ts");
    /* harmony import */


    var _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cat-ranking/cat-ranking.component */
    "./src/app/cat-ranking/cat-ranking.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'versus',
      pathMatch: 'full'
    }, {
      path: 'versus',
      component: _cat_versus_cat_cat_versus_cat_component__WEBPACK_IMPORTED_MODULE_2__["CatVersusCatComponent"]
    }, {
      path: 'ranking',
      component: _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_3__["CatRankingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.TOP_BUTTON_CONFIGS = {
          '/ranking': {
            label: 'Changer le classement !',
            url: 'versus'
          },
          '/versus': {
            label: 'Voir le classement !',
            url: 'ranking'
          }
        };
      }
      /**
       * Get the top button config
       * depends on current url
       */


      _createClass(AppComponent, [{
        key: "navigate",

        /**
         * Navigate to the configured url
         */
        value: function navigate() {
          this.router.navigate([this.topButtonConfig.url]);
        }
      }, {
        key: "topButtonConfig",
        get: function get() {
          var CURRENT_URL = this.router.url;
          return this.TOP_BUTTON_CONFIGS[CURRENT_URL];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 1,
      consts: [[1, "navigate", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() {
            return ctx.navigate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.topButtonConfig == null ? null : ctx.topButtonConfig.label, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 3rem;\n  width: 15rem;\n  background-color: lightgrey;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  font-size: 1.5rem;\n  text-align: center;\n  color: white;\n  box-shadow: 10px 10px 56px 0px rgba(0, 0, 0, 0.36);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFiYmFzL0RvY3VtZW50cy9jYXRtYXNoL2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDZDtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFJQSxrREFBQTtBREFKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3TCoCAubmF2aWdhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAxNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1NnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA1NnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbn0iLCI6aG9zdMKgIHtcbiAgLm5hdmlnYXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDU2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cat-ranking/cat-ranking.component */
    "./src/app/cat-ranking/cat-ranking.component.ts");
    /* harmony import */


    var _cat_versus_cat_cat_versus_cat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cat-versus-cat/cat-versus-cat.component */
    "./src/app/cat-versus-cat/cat-versus-cat.component.ts");
    /* harmony import */


    var _cat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cat.service */
    "./src/app/cat.service.ts");
    /* harmony import */


    var _cat_versus_cat_side_cat_side_cat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cat-versus-cat/side-cat/side-cat.component */
    "./src/app/cat-versus-cat/side-cat/side-cat.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _cat_ranking_prettiest_cat_card_prettiest_cat_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cat-ranking/prettiest-cat-card/prettiest-cat-card.component */
    "./src/app/cat-ranking/prettiest-cat-card/prettiest-cat-card.component.ts");
    /* harmony import */


    var _cat_ranking_cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cat-ranking/cat-card/cat-card.component */
    "./src/app/cat-ranking/cat-card/cat-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_cat_service__WEBPACK_IMPORTED_MODULE_7__["CatService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _cat_versus_cat_cat_versus_cat_component__WEBPACK_IMPORTED_MODULE_6__["CatVersusCatComponent"], _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_5__["CatRankingComponent"], _cat_versus_cat_side_cat_side_cat_component__WEBPACK_IMPORTED_MODULE_8__["SideCatComponent"], _cat_ranking_prettiest_cat_card_prettiest_cat_card_component__WEBPACK_IMPORTED_MODULE_10__["PrettiestCatCardComponent"], _cat_ranking_cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_11__["CatCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _cat_versus_cat_cat_versus_cat_component__WEBPACK_IMPORTED_MODULE_6__["CatVersusCatComponent"], _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_5__["CatRankingComponent"], _cat_versus_cat_side_cat_side_cat_component__WEBPACK_IMPORTED_MODULE_8__["SideCatComponent"], _cat_ranking_prettiest_cat_card_prettiest_cat_card_component__WEBPACK_IMPORTED_MODULE_10__["PrettiestCatCardComponent"], _cat_ranking_cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_11__["CatCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
          providers: [_cat_service__WEBPACK_IMPORTED_MODULE_7__["CatService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cat-ranking/cat-card/cat-card.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/cat-ranking/cat-card/cat-card.component.ts ***!
    \************************************************************/

  /*! exports provided: CatCardComponent */

  /***/
  function srcAppCatRankingCatCardCatCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatCardComponent", function () {
      return CatCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_cat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/cat.model */
    "./src/app/models/cat.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CatCardComponent = /*#__PURE__*/function () {
      function CatCardComponent() {
        _classCallCheck(this, CatCardComponent);

        this.cat = new src_app_models_cat_model__WEBPACK_IMPORTED_MODULE_1__["Cat"]();
      }

      _createClass(CatCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Create the css property to display image from url
         */

      }, {
        key: "backgroundStyle",
        get: function get() {
          return {
            'background-image': 'url(' + this.cat.imgUrl + ')'
          };
        }
      }]);

      return CatCardComponent;
    }();

    CatCardComponent.ɵfac = function CatCardComponent_Factory(t) {
      return new (t || CatCardComponent)();
    };

    CatCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatCardComponent,
      selectors: [["app-cat-card"]],
      inputs: {
        ranking: "ranking",
        cat: "cat"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "ranking"], [1, "img", 3, "ngStyle"], [1, "content"], [1, "name"], [1, "votes"]],
      template: function CatCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vote count: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ranking, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.backgroundStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat.vote, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  border-radius: 1rem;\n  border: 1px solid #ddd;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .ranking[_ngcontent-%COMP%] {\n  width: 15%;\n  font-size: 6rem;\n  color: gray;\n  border-right: 1px solid #ddd;\n}\n[_nghost-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  border: 10px solid white;\n  background: url() 50% 50% no-repeat;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n  display: block;\n  font-size: 3rem;\n  color: gray;\n  border-left: 1px solid #ddd;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hYmJhcy9Eb2N1bWVudHMvY2F0bWFzaC9jbGllbnQvc3JjL2FwcC9jYXQtcmFua2luZy9jYXQtY2FyZC9jYXQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0LXJhbmtpbmcvY2F0LWNhcmQvY2F0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjtBREVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUVBLG1DQUFBO0VBQ0Esc0JBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDSEo7QURLSTtFQUNFLGVBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2NhdC1yYW5raW5nL2NhdC1jYXJkL2NhdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcmVtO1xuXG5cbiAgLnJhbmtpbmcge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIH1cblxuICAuaW1nIHtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgd2lkdGg6IDZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcblxuICAgIGJhY2tncm91bmQ6IHVybCgpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICAqID4gbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgLnJhbmtpbmcge1xuICB3aWR0aDogMTUlO1xuICBmb250LXNpemU6IDZyZW07XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuOmhvc3QgLmltZyB7XG4gIG1hcmdpbjogMCAycmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIHdpZHRoOiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCkgNTAlIDUwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG46aG9zdCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cbjpob3N0IC5jb250ZW50ICogPiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cat-card',
          templateUrl: './cat-card.component.html',
          styleUrls: ['./cat-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        ranking: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cat-ranking/cat-ranking.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/cat-ranking/cat-ranking.component.ts ***!
    \******************************************************/

  /*! exports provided: CatRankingComponent */

  /***/
  function srcAppCatRankingCatRankingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatRankingComponent", function () {
      return CatRankingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_cat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/cat.model */
    "./src/app/models/cat.model.ts");
    /* harmony import */


    var _cat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cat.service */
    "./src/app/cat.service.ts");
    /* harmony import */


    var _prettiest_cat_card_prettiest_cat_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prettiest-cat-card/prettiest-cat-card.component */
    "./src/app/cat-ranking/prettiest-cat-card/prettiest-cat-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cat-card/cat-card.component */
    "./src/app/cat-ranking/cat-card/cat-card.component.ts");

    function CatRankingComponent_app_cat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cat-card", 2);
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;
        var index_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cat", cat_r1)("ranking", index_r2 + 2);
      }
    }

    var CatRankingComponent = /*#__PURE__*/function () {
      function CatRankingComponent(catService) {
        _classCallCheck(this, CatRankingComponent);

        this.catService = catService;
        this.cats = [];
        this.prettiestCat = new _models_cat_model__WEBPACK_IMPORTED_MODULE_1__["Cat"]();
      }
      /**
       * Call catService to get all cats sort by rank
       * then split the first cat from it
       */


      _createClass(CatRankingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.catService.getAllCats().subscribe(function (cats) {
            _this.cats = cats;
            _this.prettiestCat = _this.cats.shift();
          });
        }
      }]);

      return CatRankingComponent;
    }();

    CatRankingComponent.ɵfac = function CatRankingComponent_Factory(t) {
      return new (t || CatRankingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]));
    };

    CatRankingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatRankingComponent,
      selectors: [["app-cat-ranking"]],
      decls: 2,
      vars: 2,
      consts: [[3, "cat"], [3, "cat", "ranking", 4, "ngFor", "ngForOf"], [3, "cat", "ranking"]],
      template: function CatRankingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-prettiest-cat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatRankingComponent_app_cat_card_1_Template, 1, 2, "app-cat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cat", ctx.prettiestCat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cats);
        }
      },
      directives: [_prettiest_cat_card_prettiest_cat_card_component__WEBPACK_IMPORTED_MODULE_3__["PrettiestCatCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_5__["CatCardComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: calc(100% - 6rem);\n  width: calc(100% - 6rem);\n  padding: 3rem;\n  overflow: auto;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n[_nghost-%COMP%]   app-prettiest-cat-card[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n[_nghost-%COMP%]   app-cat-card[_ngcontent-%COMP%] {\n  height: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hYmJhcy9Eb2N1bWVudHMvY2F0bWFzaC9jbGllbnQvc3JjL2FwcC9jYXQtcmFua2luZy9jYXQtcmFua2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0LXJhbmtpbmcvY2F0LXJhbmtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jYXQtcmFua2luZy9jYXQtcmFua2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2cmVtKTtcbiAgcGFkZGluZzogM3JlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9XG5cbiAgYXBwLXByZXR0aWVzdC1jYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuXG4gIGFwcC1jYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiA3cmVtO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7XG4gIHBhZGRpbmc6IDNyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QgKiB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbjpob3N0IGFwcC1wcmV0dGllc3QtY2F0LWNhcmQge1xuICBoZWlnaHQ6IDEwcmVtO1xufVxuOmhvc3QgYXBwLWNhdC1jYXJkIHtcbiAgaGVpZ2h0OiA3cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatRankingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cat-ranking',
          templateUrl: './cat-ranking.component.html',
          styleUrls: ['./cat-ranking.component.scss']
        }]
      }], function () {
        return [{
          type: _cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cat-ranking/prettiest-cat-card/prettiest-cat-card.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/cat-ranking/prettiest-cat-card/prettiest-cat-card.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PrettiestCatCardComponent */

  /***/
  function srcAppCatRankingPrettiestCatCardPrettiestCatCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrettiestCatCardComponent", function () {
      return PrettiestCatCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_cat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/cat.model */
    "./src/app/models/cat.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PrettiestCatCardComponent = /*#__PURE__*/function () {
      function PrettiestCatCardComponent() {
        _classCallCheck(this, PrettiestCatCardComponent);

        this.cat = new src_app_models_cat_model__WEBPACK_IMPORTED_MODULE_1__["Cat"]();
      }

      _createClass(PrettiestCatCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Create the css property to display image from url
         */

      }, {
        key: "backgroundStyle",
        get: function get() {
          return {
            'background-image': 'url(' + this.cat.imgUrl + ')'
          };
        }
      }]);

      return PrettiestCatCardComponent;
    }();

    PrettiestCatCardComponent.ɵfac = function PrettiestCatCardComponent_Factory(t) {
      return new (t || PrettiestCatCardComponent)();
    };

    PrettiestCatCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrettiestCatCardComponent,
      selectors: [["app-prettiest-cat-card"]],
      inputs: {
        cat: "cat"
      },
      decls: 12,
      vars: 3,
      consts: [[1, "ranking"], [1, "img", 3, "ngStyle"], [1, "content"], [1, "name"], [1, "votes"]],
      template: function PrettiestCatCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vote count: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.backgroundStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat.vote, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  border-radius: 1rem;\n  border: 1px solid #ddd;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .ranking[_ngcontent-%COMP%] {\n  width: 15%;\n  font-size: 9rem;\n  color: gray;\n  border-right: 1px solid #ddd;\n}\n[_nghost-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  height: 8rem;\n  width: 8rem;\n  border-radius: 50%;\n  border: 10px solid white;\n  background: url() 50% 50% no-repeat;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n  display: block;\n  font-size: 3rem;\n  color: gray;\n  border-left: 1px solid #ddd;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hYmJhcy9Eb2N1bWVudHMvY2F0bWFzaC9jbGllbnQvc3JjL2FwcC9jYXQtcmFua2luZy9wcmV0dGllc3QtY2F0LWNhcmQvcHJldHRpZXN0LWNhdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXQtcmFua2luZy9wcmV0dGllc3QtY2F0LWNhcmQvcHJldHRpZXN0LWNhdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFFQSxtQ0FBQTtFQUNBLHNCQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0hKO0FES0k7RUFDRSxlQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9jYXQtcmFua2luZy9wcmV0dGllc3QtY2F0LWNhcmQvcHJldHRpZXN0LWNhdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcmVtO1xuXG5cbiAgLnJhbmtpbmcge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZm9udC1zaXplOiA5cmVtO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIH1cblxuICAuaW1nIHtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcblxuICAgIGJhY2tncm91bmQ6IHVybCgpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICAqID4gbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgLnJhbmtpbmcge1xuICB3aWR0aDogMTUlO1xuICBmb250LXNpemU6IDlyZW07XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuOmhvc3QgLmltZyB7XG4gIG1hcmdpbjogMCAycmVtO1xuICBoZWlnaHQ6IDhyZW07XG4gIHdpZHRoOiA4cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdXJsKCkgNTAlIDUwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG46aG9zdCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cbjpob3N0IC5jb250ZW50ICogPiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrettiestCatCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prettiest-cat-card',
          templateUrl: './prettiest-cat-card.component.html',
          styleUrls: ['./prettiest-cat-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cat-versus-cat/cat-versus-cat.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/cat-versus-cat/cat-versus-cat.component.ts ***!
    \************************************************************/

  /*! exports provided: CatVersusCatComponent */

  /***/
  function srcAppCatVersusCatCatVersusCatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatVersusCatComponent", function () {
      return CatVersusCatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_cat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/cat.model */
    "./src/app/models/cat.model.ts");
    /* harmony import */


    var _cat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cat.service */
    "./src/app/cat.service.ts");
    /* harmony import */


    var _side_cat_side_cat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-cat/side-cat.component */
    "./src/app/cat-versus-cat/side-cat/side-cat.component.ts");

    var CatVersusCatComponent = /*#__PURE__*/function () {
      function CatVersusCatComponent(catService) {
        _classCallCheck(this, CatVersusCatComponent);

        this.catService = catService;
        this.leftCat = new _models_cat_model__WEBPACK_IMPORTED_MODULE_1__["Cat"]();
        this.rightCat = new _models_cat_model__WEBPACK_IMPORTED_MODULE_1__["Cat"]();
      }
      /**
       * Init both side cats
       */


      _createClass(CatVersusCatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setLeftCat();
          this.setRightCat();
        }
        /**
         * Set new cat for the left side
         * If new cat is same as old cat retry
         */

      }, {
        key: "setLeftCat",
        value: function setLeftCat() {
          var _this2 = this;

          this.catService.getRandomCat().subscribe(function (cat) {
            if (cat._id !== _this2.leftCat._id) {
              _this2.leftCat = cat;
            } else {
              _this2.setLeftCat();
            }
          });
        }
        /**
         * Set new cat for the right side
         * If new cat is same as old cat retry
         */

      }, {
        key: "setRightCat",
        value: function setRightCat() {
          var _this3 = this;

          this.catService.getRandomCat().subscribe(function (cat) {
            if (cat && cat._id !== _this3.rightCat._id) {
              _this3.rightCat = cat;
            } else {
              _this3.setRightCat();
            }
          });
        }
      }]);

      return CatVersusCatComponent;
    }();

    CatVersusCatComponent.ɵfac = function CatVersusCatComponent_Factory(t) {
      return new (t || CatVersusCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]));
    };

    CatVersusCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatVersusCatComponent,
      selectors: [["app-cat-versus-cat"]],
      decls: 3,
      vars: 2,
      consts: [[3, "cat", "onVote"], [1, "separator"]],
      template: function CatVersusCatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-side-cat", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onVote", function CatVersusCatComponent_Template_app_side_cat_onVote_0_listener() {
            return ctx.setRightCat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-side-cat", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onVote", function CatVersusCatComponent_Template_app_side_cat_onVote_2_listener() {
            return ctx.setLeftCat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cat", ctx.leftCat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cat", ctx.rightCat);
        }
      },
      directives: [_side_cat_side_cat_component__WEBPACK_IMPORTED_MODULE_3__["SideCatComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1px;\n  background-color: aliceblue;\n}\n[_nghost-%COMP%]   app-side-cat[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n[_nghost-%COMP%]   app-side-cat[_ngcontent-%COMP%]:first-child {\n  background-color: #d7d1d3;\n}\n[_nghost-%COMP%]   app-side-cat[_ngcontent-%COMP%]:last-child {\n  background-color: #e5d6de;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hYmJhcy9Eb2N1bWVudHMvY2F0bWFzaC9jbGllbnQvc3JjL2FwcC9jYXQtdmVyc3VzLWNhdC9jYXQtdmVyc3VzLWNhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0LXZlcnN1cy1jYXQvY2F0LXZlcnN1cy1jYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNFLHlCQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9jYXQtdmVyc3VzLWNhdC9jYXQtdmVyc3VzLWNhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAuc2VwYXJhdG9yIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIH1cblxuICBhcHAtc2lkZS1jYXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDFkMztcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDZkZTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cbjpob3N0IGFwcC1zaWRlLWNhdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgYXBwLXNpZGUtY2F0OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDFkMztcbn1cbjpob3N0IGFwcC1zaWRlLWNhdDpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDZkZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatVersusCatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cat-versus-cat',
          templateUrl: './cat-versus-cat.component.html',
          styleUrls: ['./cat-versus-cat.component.scss']
        }]
      }], function () {
        return [{
          type: _cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cat-versus-cat/side-cat/side-cat.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/cat-versus-cat/side-cat/side-cat.component.ts ***!
    \***************************************************************/

  /*! exports provided: SideCatComponent */

  /***/
  function srcAppCatVersusCatSideCatSideCatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideCatComponent", function () {
      return SideCatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_cat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/cat.service */
    "./src/app/cat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SideCatComponent = /*#__PURE__*/function () {
      function SideCatComponent(catService) {
        _classCallCheck(this, SideCatComponent);

        this.catService = catService;
        this.onVote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Create the css property to display image from url
       */


      _createClass(SideCatComponent, [{
        key: "voteIt",

        /**
         * On component click
         * add a vote on current cat
         * Send event to parent
         */
        value: function voteIt() {
          var _this4 = this;

          this.catService.voteById(this.cat._id).subscribe(function (cat) {
            _this4.cat = cat;

            _this4.onVote.emit();
          });
        }
      }, {
        key: "backgroundStyle",
        get: function get() {
          return {
            'background-image': 'url(' + this.cat.imgUrl + ')'
          };
        }
      }]);

      return SideCatComponent;
    }();

    SideCatComponent.ɵfac = function SideCatComponent_Factory(t) {
      return new (t || SideCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cat_service__WEBPACK_IMPORTED_MODULE_1__["CatService"]));
    };

    SideCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideCatComponent,
      selectors: [["app-side-cat"]],
      hostBindings: function SideCatComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideCatComponent_click_HostBindingHandler() {
            return ctx.voteIt();
          });
        }
      },
      inputs: {
        cat: "cat"
      },
      outputs: {
        onVote: "onVote"
      },
      decls: 3,
      vars: 2,
      consts: [[3, "ngStyle"]],
      template: function SideCatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cat.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.backgroundStyle);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  top: 15%;\n  transform: translateY(-50%);\n  font-size: 2rem;\n  color: white;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.36), 0 0 1em rgba(0, 0, 0, 0.36), 0 0 0.2em rgba(0, 0, 0, 0.36);\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  top: 40%;\n  left: 50%;\n  height: 50%;\n  width: 50%;\n  border-radius: 50%;\n  border: 10px solid white;\n  transform: translate3d(-50%, -50%, 0);\n  background: url() 50% 50% no-repeat;\n  background-size: cover;\n  box-shadow: 10px 10px 56px 0px rgba(0, 0, 0, 0.36);\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  transform: translate3d(-50%, -50%, 0) scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LXZlcnN1cy1jYXQvc2lkZS1jYXQvc2lkZS1jYXQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYWJiYXMvRG9jdW1lbnRzL2NhdG1hc2gvY2xpZW50L3NyYy9hcHAvY2F0LXZlcnN1cy1jYXQvc2lkZS1jYXQvc2lkZS1jYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2Q7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFFQSx3R0FBQTtBREFKO0FDR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFFQSxtQ0FBQTtFQUNBLHNCQUFBO0VBSUEsa0RBQUE7QURISjtBQ0tJO0VBR0UsZ0RBQUE7QURITiIsImZpbGUiOiJzcmMvYXBwL2NhdC12ZXJzdXMtY2F0L3NpZGUtY2F0L3NpZGUtY2F0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3TCoCBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDE1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zNiksIDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjM2KSwgMCAwIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC4zNik7XG59XG46aG9zdMKgIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICBiYWNrZ3JvdW5kOiB1cmwoKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDU2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG59XG46aG9zdMKgIGRpdjpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBzY2FsZSgxLjEpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNjYWxlKDEuMSk7XG59IiwiOmhvc3TCoCB7XG4gIGgxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zNiksIDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjM2KSwgMCAwIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIH1cblxuICBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG5cbiAgICBiYWNrZ3JvdW5kOiB1cmwoKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA1NnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1NnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2NhbGUoMS4xKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNjYWxlKDEuMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideCatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-cat',
          templateUrl: './side-cat.component.html',
          styleUrls: ['./side-cat.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_cat_service__WEBPACK_IMPORTED_MODULE_1__["CatService"]
        }];
      }, {
        cat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onVote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        voteIt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cat.service.ts":
  /*!********************************!*\
    !*** ./src/app/cat.service.ts ***!
    \********************************/

  /*! exports provided: CatService */

  /***/
  function srcAppCatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatService", function () {
      return CatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CatService = /*#__PURE__*/function () {
      function CatService(http) {
        _classCallCheck(this, CatService);

        this.http = http;
        this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUri + '/cats';
      }
      /**
       * get HTTP request on /api/cats/random
       * Response is a random cat from the database
       */


      _createClass(CatService, [{
        key: "getRandomCat",
        value: function getRandomCat() {
          return this.http.get(this.API_URI + '/random');
        }
        /**
         * put http request on /api/cats/vote/:id
         * increment vote property of a cat
         * @param id Id of the cat
         * Response is the voted cat
         */

      }, {
        key: "voteById",
        value: function voteById(id) {
          return this.http.put(this.API_URI + '/vote/' + id, {});
        }
        /**
         * get http request on /api/cats
         * Response is all cats sort by vote
         */

      }, {
        key: "getAllCats",
        value: function getAllCats() {
          return this.http.get(this.API_URI);
        }
      }]);

      return CatService;
    }();

    CatService.ɵfac = function CatService_Factory(t) {
      return new (t || CatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CatService,
      factory: CatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/cat.model.ts":
  /*!*************************************!*\
    !*** ./src/app/models/cat.model.ts ***!
    \*************************************/

  /*! exports provided: Cat */

  /***/
  function srcAppModelsCatModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cat", function () {
      return Cat;
    });

    var Cat = function Cat() {
      _classCallCheck(this, Cat);

      this._id = '';
      this.name = '';
      this.imgUrl = '';
      this.vote = 0;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUri: 'http://127.0.0.1:8080/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mabbas/Documents/catmash/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map