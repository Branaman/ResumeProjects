webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_add_question_add_question_component__ = __webpack_require__("../../../../../src/app/dashboard/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_take_quiz_take_quiz_component__ = __webpack_require__("../../../../../src/app/dashboard/take-quiz/take-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_my_questions_my_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/my-questions/my-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/dashboard/leaderboard/leaderboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: 'leaderboard',
                pathMatch: 'full',
                component: __WEBPACK_IMPORTED_MODULE_7__dashboard_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
            },
            {
                path: 'lets_play',
                pathMatch: 'full',
                component: __WEBPACK_IMPORTED_MODULE_5__dashboard_take_quiz_take_quiz_component__["a" /* TakeQuizComponent */],
            },
            {
                path: 'new_question',
                pathMatch: 'full',
                component: __WEBPACK_IMPORTED_MODULE_4__dashboard_add_question_add_question_component__["a" /* AddQuestionComponent */],
            },
            {
                path: 'myquestions',
                pathMatch: 'full',
                component: __WEBPACK_IMPORTED_MODULE_6__dashboard_my_questions_my_questions_component__["a" /* MyQuestionsComponent */],
            },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n  <a [routerLink]=\"['dashboard/leaderboard']\">Dashboard</a>\n  <a *ngIf='loginState'href=\"/dashboard/myquestions\">My Questions</a>\n  <a *ngIf='loginState'href=\"/dashboard/new_question\">Make a Question!</a>\n  <a *ngIf='!loginState' href=\"/\">Log in</a>\n  <a *ngIf='loginState' href=\"/logout\">Log off</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__ = __webpack_require__("../../../../../src/app/quiz-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_router, _route, _userService, _questionmanagerService) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this._questionmanagerService = _questionmanagerService;
        this.title = 'Bike Maketplace';
        this._userService.userObserver.subscribe(function (data) {
            _this.loginState = data;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loggedInCheck();
        this._questionmanagerService.retrieveQuestions();
    };
    AppComponent.prototype.loggedInCheck = function () {
        var _this = this;
        this._userService.checkLogIn(function (pass) {
            if (pass === true) {
                _this.loginState = true;
            }
            else {
                _this.loginState = false;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quiz_manager_service__ = __webpack_require__("../../../../../src/app/quiz-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_manager_service__ = __webpack_require__("../../../../../src/app/test-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_page_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/landing-page/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_page_registration_registration_component__ = __webpack_require__("../../../../../src/app/landing-page/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_add_question_add_question_component__ = __webpack_require__("../../../../../src/app/dashboard/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_take_quiz_take_quiz_component__ = __webpack_require__("../../../../../src/app/dashboard/take-quiz/take-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_my_questions_my_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/my-questions/my-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/dashboard/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__results_filter_pipe__ = __webpack_require__("../../../../../src/app/results-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// services



// components










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__landing_page_log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_page_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_add_question_add_question_component__["a" /* AddQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_take_quiz_take_quiz_component__["a" /* TakeQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_my_questions_my_questions_component__["a" /* MyQuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__results_filter_pipe__["a" /* ResultsFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__user_controller_service__["a" /* UserControllerService */], __WEBPACK_IMPORTED_MODULE_7__quiz_manager_service__["a" /* QuizManagerService */], __WEBPACK_IMPORTED_MODULE_8__test_manager_service__["a" /* TestManagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-question/add-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-question/add-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='question'>\n    {{questionInstance|json}}\n    <form (submit)=\"onSubmit()\" #formObject='ngForm'>\n      <label for=\"question\">Question<span *ngIf='question?.valid !== true'>{{question?.errors | json}}</span></label>\n      <input\n      type=\"text\"\n      name=\"question\"\n      required\n      minlength=\"15\"\n      maxlength=\"255\"\n      [(ngModel)]=\"questionInstance.question\"\n      #question='ngModel'\n      />\n      <label for=\"Canswer\">Correct Answer<span *ngIf='Canswer?.valid !== true'>{{Canswer?.errors | json}}</span></label>\n      <input\n      type=\"text\"\n      name=\"Canswer\"\n      required\n      minlength=\"1\"\n      maxlength=\"255\"\n      [(ngModel)]=\"questionInstance.Canswer\"\n      #Canswer='ngModel'\n      />\n      <label for=\"Fanswer1\">Fake Answer 1<span *ngIf='Fanswer1?.valid !== true'>{{Fanswer1?.errors | json}}</span></label>\n      <input\n      type=\"text\"\n      name=\"Fanswer1\"\n      required\n      minlength=\"1\"\n      maxlength=\"255\"\n      [(ngModel)]=\"questionInstance.Fanswer1\"\n      #Fanswer1='ngModel'\n      />\n      <label for=\"Fanswer2\">Fake Answer 2<span *ngIf='Fanswer2?.valid !== true'>{{Fanswer2?.errors | json}}</span></label>\n      <input\n      type=\"text\"\n      name=\"Fanswer2\"\n      required\n      minlength=\"1\"\n      maxlength=\"255\"\n      [(ngModel)]=\"questionInstance.Fanswer2\"\n      #Fanswer2='ngModel'\n      />\n      <input type=\"submit\"\n      [disabled]=\"formObject.invalid\">\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-question/add-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__ = __webpack_require__("../../../../../src/app/quiz-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question__ = __webpack_require__("../../../../../src/app/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddQuestionComponent = (function () {
    function AddQuestionComponent(_router, _route, _questionmanagerService) {
        this._router = _router;
        this._route = _route;
        this._questionmanagerService = _questionmanagerService;
        this.questionInstance = new __WEBPACK_IMPORTED_MODULE_4__question__["a" /* Question */]();
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        this._questionmanagerService.createQuestion(this.questionInstance);
        this.questionInstance = new __WEBPACK_IMPORTED_MODULE_4__question__["a" /* Question */]();
        this._questionmanagerService.retrieveQuestions();
        this._questionmanagerService.myQuestions();
    };
    return AddQuestionComponent;
}());
AddQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-question',
        template: __webpack_require__("../../../../../src/app/dashboard/add-question/add-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-question/add-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */]) === "function" && _c || Object])
], AddQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=add-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf='loginState.state' [routerLink]=\"['lets_play']\">Lets Play!</a>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_manager_service__ = __webpack_require__("../../../../../src/app/test-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_route, _testmanagerService, _userService) {
        var _this = this;
        this._route = _route;
        this._testmanagerService = _testmanagerService;
        this._userService = _userService;
        this.testArray = [];
        this._testmanagerService.testObserver.subscribe(function (data) {
            _this.testArray = data;
        });
        this._userService.userObserver.subscribe(function (data) {
            _this.loginState = data;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    DashboardComponent.prototype.getTests = function () {
        this._testmanagerService.retrieveTests();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__test_manager_service__["a" /* TestManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__test_manager_service__["a" /* TestManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/leaderboard/leaderboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>LeaderBoard</h1>\n<label for=\"searchbar\">Search Bar</label>\n<input type=\"text\" [(ngModel)]='searchterm' id=\"searchbar\" value=\"\">\n<div *ngFor=\"let testInstance of testArray | resultsFilter: searchterm\">\n    <div id='test'>\n        <div id='desc'>\n            <p>{{testInstance.score/3 | percent}}</p>\n            <p>{{testInstance.user}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_manager_service__ = __webpack_require__("../../../../../src/app/test-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderboardComponent = (function () {
    function LeaderboardComponent(_route, _testmanagerService, _userService) {
        var _this = this;
        this._route = _route;
        this._testmanagerService = _testmanagerService;
        this._userService = _userService;
        this.testArray = [];
        this._testmanagerService.testObserver.subscribe(function (data) {
            _this.testArray = data;
        });
        this._userService.userObserver.subscribe(function (data) {
            _this.loginState = data;
        });
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    LeaderboardComponent.prototype.getTests = function () {
        this._testmanagerService.retrieveTests();
    };
    return LeaderboardComponent;
}());
LeaderboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-leaderboard',
        template: __webpack_require__("../../../../../src/app/dashboard/leaderboard/leaderboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/leaderboard/leaderboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__test_manager_service__["a" /* TestManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__test_manager_service__["a" /* TestManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object])
], LeaderboardComponent);

var _a, _b, _c;
//# sourceMappingURL=leaderboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/my-questions/my-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/my-questions/my-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Questions</h1>\n<div *ngFor='let questionInstance of myQuestionListings, let idx = index' class='questionwrapper'>\n    <div id='question'>\n        <form (submit)=\"update(idx)\" #formObject='ngForm'>\n          <label for=\"question\">Question<span *ngIf='question?.valid !== true'>{{question?.errors | json}}</span></label>\n          <input\n          type=\"text\"\n          name=\"question\"\n          required\n          minlength=\"15\"\n          maxlength=\"255\"\n          [(ngModel)]=\"questionInstance.question\"\n          #question='ngModel'\n          />\n          <label for=\"Canswer\">Correct Answer<span *ngIf='Canswer?.valid !== true'>{{Canswer?.errors | json}}</span></label>\n          <input\n          type=\"text\"\n          name=\"Canswer\"\n          required\n          minlength=\"1\"\n          maxlength=\"255\"\n          [(ngModel)]=\"questionInstance.Canswer\"\n          #Canswer='ngModel'\n          />\n          <label for=\"Fanswer1\">Fake Answer 1<span *ngIf='Fanswer1?.valid !== true'>{{Fanswer1?.errors | json}}</span></label>\n          <input\n          type=\"text\"\n          name=\"Fanswer1\"\n          required\n          minlength=\"1\"\n          maxlength=\"255\"\n          [(ngModel)]=\"questionInstance.Fanswer1\"\n          #Fanswer1='ngModel'\n          />\n          <label for=\"Fanswer2\">Fake Answer 2<span *ngIf='Fanswer2?.valid !== true'>{{Fanswer2?.errors | json}}</span></label>\n          <input\n          type=\"text\"\n          name=\"Fanswer2\"\n          required\n          minlength=\"1\"\n          maxlength=\"255\"\n          [(ngModel)]=\"questionInstance.Fanswer2\"\n          #Fanswer2='ngModel'\n          />\n          <input value=\"Update\" type=\"submit\"\n          [disabled]=\"formObject.invalid\">\n        </form>\n        <button (click)='delete(questionInstance._id)'>delete</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/my-questions/my-questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyQuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__ = __webpack_require__("../../../../../src/app/quiz-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyQuestionsComponent = (function () {
    function MyQuestionsComponent(_route, _questionmanagerService) {
        var _this = this;
        this._route = _route;
        this._questionmanagerService = _questionmanagerService;
        this.myQuestionListings = [];
        this._questionmanagerService.myQuestionsObserver.subscribe(function (data) {
            _this.myQuestionListings = data;
        });
    }
    MyQuestionsComponent.prototype.ngOnInit = function () {
        this.myQuestions();
    };
    MyQuestionsComponent.prototype.update = function (idx) {
        this.updatedQuestion = this.myQuestionListings[idx];
        this._questionmanagerService.updateQuestion(this.updatedQuestion, this.updatedQuestion._id);
    };
    MyQuestionsComponent.prototype.delete = function (id) {
        this._questionmanagerService.deleteQuestion(id);
    };
    MyQuestionsComponent.prototype.myQuestions = function () {
        this._questionmanagerService.myQuestions();
    };
    return MyQuestionsComponent;
}());
MyQuestionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-questions',
        template: __webpack_require__("../../../../../src/app/dashboard/my-questions/my-questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/my-questions/my-questions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quiz_manager_service__["a" /* QuizManagerService */]) === "function" && _b || Object])
], MyQuestionsComponent);

var _a, _b;
//# sourceMappingURL=my-questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/take-quiz/take-quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/take-quiz/take-quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Take a Quiz!</h1>\n<p>Hi {{loginState.username}}! Choose an answer for each question and click submit when youre done!</p>\n<form (ngSubmit)=\"onSubmit()\" #formObject='ngForm'>\n  <div *ngFor='let question of testSheet, let idx = index'>\n      <p>{{question.question}} :</p>\n      <input\n        id=\"a{{idx}}\"\n        value='{{question.answers[0]}}'\n        type=\"radio\"\n        name='{{idx}}'\n        [(ngModel)]='test.answer[idx]'\n        #answer[idx]='ngModel'\n        checked required\n      />\n      <label for=\"a{{idx}}\">{{question.answers[0]}}</label>\n      <input\n        id=\"b{{idx}}\"\n        value='{{question.answers[1]}}'\n        type=\"radio\"\n        name='{{idx}}'\n        [(ngModel)]='test.answer[idx]'\n        #answer[idx]='ngModel'\n        checked required\n      />\n      <label for=\"b{{idx}}\">{{question.answers[1]}}</label>\n      <input\n        id=\"c{{idx}}\"\n        value='{{question.answers[2]}}'\n        type=\"radio\"\n        name='{{idx}}'\n        [(ngModel)]='test.answer[idx]'\n        #answer[idx]='ngModel'\n        checked required\n      />\n      <label for=\"c{{idx}}\">{{question.answers[2]}}</label>\n  </div>\n  <input type=\"submit\"\n  [disabled]=\"formObject.invalid\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/take-quiz/take-quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_manager_service__ = __webpack_require__("../../../../../src/app/quiz-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_manager_service__ = __webpack_require__("../../../../../src/app/test-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test__ = __webpack_require__("../../../../../src/app/test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TakeQuizComponent = (function () {
    function TakeQuizComponent(_router, _route, _userService, _questionmanagerService, _testmanagerService) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this._questionmanagerService = _questionmanagerService;
        this._testmanagerService = _testmanagerService;
        this.questionArray = [];
        this.AllQuestions = [];
        this.testInstance = new __WEBPACK_IMPORTED_MODULE_6__test__["a" /* Test */]();
        this.testSheet = [{ question: "", answers: [] }, { question: "", answers: [] }, { question: "", answers: [] }];
        this.testKey = { answer: ["", "", ""] };
        this.test = { answer: ["", "", ""] };
        this.usedQs = {};
        this._questionmanagerService.questionObserver.subscribe(function (data) {
            _this.AllQuestions = data;
        });
        this._userService.userObserver.subscribe(function (data) {
            _this.loginState = data;
        });
    }
    TakeQuizComponent.prototype.ngOnInit = function () {
        this._userService.checkLogIn(function (pass) { });
        this.generateTest();
    };
    TakeQuizComponent.prototype.randomNewIDX = function () {
        var number = Math.floor(Math.random() * this.AllQuestions.length);
        if (number in this.usedQs) {
            number = this.randomNewIDX();
        }
        this.usedQs[number] = 1;
        return number;
    };
    TakeQuizComponent.prototype.generateTest = function () {
        if (this.AllQuestions.length > 3) {
            for (var i = 0; i < 3; i++) {
                var random = this.randomNewIDX();
                this.questionArray.push(this.AllQuestions[random]);
            }
        }
        for (var i = 0; i < 3; i++) {
            var answers = [0, 1, 2];
            this.testSheet[i].question = this.questionArray[i].question;
            var index = Math.floor(Math.random() * answers.length);
            var answer1 = answers[index];
            answers.splice(index, 1);
            this.testSheet[i].answers[answer1] = this.questionArray[i].Canswer;
            index = Math.floor(Math.random() * answers.length);
            var answer2 = answers[index];
            answers.splice(index, 1);
            this.testSheet[i].answers[answer2] = this.questionArray[i].Fanswer1;
            index = Math.floor(Math.random() * answers.length);
            var answer3 = answers[index];
            answers.splice(index, 1);
            this.testSheet[i].answers[answer3] = this.questionArray[i].Fanswer2;
        }
        for (var i = 0; i < 3; i++) {
            this.testKey.answer[i] = this.questionArray[i].Canswer;
        }
    };
    TakeQuizComponent.prototype.onSubmit = function () {
        for (var i = 0; i < 3; i++) {
            if (this.testKey.answer[i] === this.test.answer[i]) {
                this.testInstance.score++;
            }
        }
        this._testmanagerService.createTest(this.testInstance);
        this._testmanagerService.retrieveTests();
        this._router.navigate(['dashboard']);
    };
    return TakeQuizComponent;
}());
TakeQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-take-quiz',
        template: __webpack_require__("../../../../../src/app/dashboard/take-quiz/take-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/take-quiz/take-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__quiz_manager_service__["a" /* QuizManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__quiz_manager_service__["a" /* QuizManagerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__test_manager_service__["a" /* TestManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__test_manager_service__["a" /* TestManagerService */]) === "function" && _e || Object])
], TakeQuizComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=take-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Landing Page</h3>\n<app-log-in *ngIf='!loginState.state'></app-log-in>\n<app-registration *ngIf='!loginState.state'></app-registration>\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(_userService) {
        var _this = this;
        this._userService = _userService;
        this._userService.userObserver.subscribe(function (data) {
            _this.loginState = data;
        });
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_controller_service__["a" /* UserControllerService */]) === "function" && _a || Object])
], LandingPageComponent);

var _a;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<div id='login'>\n  {{message | json}}\n  <form materialize (submit)=\"onSubmit()\" #formObject='ngForm'>\n    <label for=\"email\">Email<span *ngIf='email?.valid !== true'>{{email?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"email\"\n      required\n      minlength=\"4\"\n      maxlength=\"100\"\n      pattern=\"^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$\"\n      [(ngModel)]=\"userInstance.email\"\n      #email='ngModel'\n    />\n    <label for=\"password\">Password<span *ngIf='password?.valid !== true'>{{password?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"password\"\n      required\n      minlength=\"8\"\n      maxlength=\"24\"\n      pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n      [(ngModel)]=\"userInstance.password\"\n      #password='ngModel'\n    />\n    <input type=\"submit\"\n    [disabled]=\"formObject.invalid\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogInComponent = (function () {
    function LogInComponent(_router, _route, _usersService) {
        this._router = _router;
        this._route = _route;
        this._usersService = _usersService;
        this.userInstance = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.login = function (pass) {
        if (pass === true) {
            this._router.navigate(['dashboard/leaderboard']);
        }
        else {
            this.userInstance = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            this.message = pass;
        }
    };
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        this._usersService.loginUser(this.userInstance, function (pass) {
            _this.login(pass);
        });
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/landing-page/log-in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/log-in/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object])
], LogInComponent);

var _a, _b, _c;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Registration</h1>\n<div id='reg'>\n  {{message}}\n  <form (submit)=\"onSubmit()\" #formObject='ngForm'>\n    <label for=\"email\">Email<span *ngIf='email?.valid !== true'>{{email?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"email\"\n      required\n      minlength=\"4\"\n      maxlength=\"100\"\n      pattern=\"^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$\"\n      [(ngModel)]=\"userInstance.email\"\n      #email='ngModel'\n    />\n    <label for=\"first_name\">First Name<span *ngIf='first_name?.valid !== true'>{{first_name?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"first_name\"\n      required\n      minlength=\"1\"\n      maxlength=\"24\"\n      [(ngModel)]=\"userInstance.first_name\"\n      #first_name='ngModel'\n    />\n    <label for=\"last_name\">Last Name<span *ngIf='last_name?.valid !== true'>{{last_name?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"last_name\"\n      required\n      minlength=\"1\"\n      maxlength=\"24\"\n      [(ngModel)]=\"userInstance.last_name\"\n      #last_name='ngModel'\n    />\n    <label for=\"password\">Password<span *ngIf='password?.valid !== true'>{{password?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"password\"\n      required\n      minlength=\"8\"\n      maxlength=\"24\"\n      pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n      [(ngModel)]=\"userInstance.password\"\n      #password='ngModel'\n    />\n    <label for=\"passwordC\">Password Confirmation<span *ngIf='passwordC?.valid !== true'>{{passwordC?.errors | json}}</span></label>\n    <input\n      type=\"text\"\n      name=\"passwordC\"\n      required\n      minlength=\"8\"\n      maxlength=\"24\"\n      pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n      [(ngModel)]=\"userInstance.passwordC\"\n      #passwordC='ngModel'\n    />\n    <input type=\"submit\"\n    [disabled]=\"formObject.invalid || userInstance.password !== userInstance.passwordC\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_controller_service__ = __webpack_require__("../../../../../src/app/user-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(_router, _route, _usersService) {
        this._router = _router;
        this._route = _route;
        this._usersService = _usersService;
        this.userInstance = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this._usersService.createUser(this.userInstance, function (pass) {
            if (pass.errmsg) {
                _this.message = pass.errmsg;
            }
            else {
                _this.message = "Registration Successful: " + pass.email + " created!";
            }
        });
        this.userInstance = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/landing-page/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_controller_service__["a" /* UserControllerService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(question, Canswer, Fanswer1, Fanswer2, user) {
        if (question === void 0) { question = ''; }
        if (Canswer === void 0) { Canswer = ""; }
        if (Fanswer1 === void 0) { Fanswer1 = ""; }
        if (Fanswer2 === void 0) { Fanswer2 = ""; }
        if (user === void 0) { user = ''; }
        this.question = question;
        this.Canswer = Canswer;
        this.Fanswer1 = Fanswer1;
        this.Fanswer2 = Fanswer2;
        this.user = user;
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/quiz-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizManagerService = (function () {
    function QuizManagerService(_http) {
        this._http = _http;
        this.questions = [];
        this.myquestions = [];
        this.mysortedquestions = [];
        this.sortedquestions = [];
        this.questionObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.questions);
        this.myQuestionsObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.myquestions);
    }
    QuizManagerService.prototype.sorted = function (array, property) {
        function dynamicSort(property) {
            var sortOrder = 1;
            if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a, b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            };
        }
        return array.sort(dynamicSort(property));
    };
    QuizManagerService.prototype.myQuestions = function () {
        var _this = this;
        this._http.get('/myquestions').subscribe(function (response) {
            _this.myquestions = response.json();
            _this.mysortedquestions = _this.sorted(_this.myquestions, "-created_at");
            _this.myQuestionsObserver.next(_this.mysortedquestions);
        }, function (err) {
            console.log(err);
        });
    };
    QuizManagerService.prototype.retrieveQuestions = function () {
        var _this = this;
        this._http.get('/questions').subscribe(function (response) {
            _this.questions = response.json();
            _this.sortedquestions = _this.sorted(_this.questions, "-created_at");
            _this.questionObserver.next(_this.sortedquestions);
        }, function (err) {
            console.log(err);
        });
    };
    QuizManagerService.prototype.retrieveQuestion = function (id, callback) {
        var _this = this;
        this._http.get('/questions/' + id).subscribe(function (response) {
            _this.questionInstance = response.json();
            callback(_this.questionInstance);
        }, function (err) {
            console.log(err);
        });
    };
    QuizManagerService.prototype.deleteQuestion = function (id) {
        this._http.delete('/questions/' + id).subscribe(function (response) {
            console.log(response.json());
        }, function (err) {
            console.log(err);
        });
        this.retrieveQuestions();
        this.myQuestions();
    };
    QuizManagerService.prototype.updateQuestion = function (question, id) {
        console.log(id);
        console.log(question);
        this._http.put('/questions/' + id, question).subscribe(function (response) {
            console.log(response.json());
        }, function (err) {
            console.log(err);
        });
        this.retrieveQuestions();
    };
    QuizManagerService.prototype.createQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('/questions', question, options).subscribe(function (response) {
        }, function (err) {
            console.log(err);
        });
    };
    return QuizManagerService;
}());
QuizManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuizManagerService);

var _a;
//# sourceMappingURL=quiz-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/results-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResultsFilterPipe = (function () {
    function ResultsFilterPipe() {
    }
    ResultsFilterPipe.prototype.transform = function (items, value) {
        console.log(value);
        console.log(items);
        if (value === "" || value === undefined) {
            return items;
        }
        if (!items) {
            return [];
        }
        ;
        return items.filter(function (it) {
            return it.user.includes(value) || ((it.score / 3) * 100).toString().includes(value);
        });
    };
    return ResultsFilterPipe;
}());
ResultsFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'resultsFilter'
    })
], ResultsFilterPipe);

//# sourceMappingURL=results-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/test-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestManagerService = (function () {
    function TestManagerService(_http) {
        this._http = _http;
        this.tests = [];
        this.mytests = [];
        this.mysortedtests = [];
        this.sortedtests = [];
        this.testObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.tests);
        this.myTestsObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.mytests);
    }
    TestManagerService.prototype.sorted = function (array, property) {
        function dynamicSort(property) {
            var sortOrder = 1;
            if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a, b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            };
        }
        return array.sort(dynamicSort(property));
    };
    TestManagerService.prototype.myTests = function () {
        var _this = this;
        this._http.get('/mytests').subscribe(function (response) {
            _this.mytests = response.json();
            _this.mysortedtests = _this.sorted(_this.mytests, "-score");
            _this.myTestsObserver.next(_this.mysortedtests);
        }, function (err) {
            console.log(err);
        });
    };
    TestManagerService.prototype.retrieveTests = function () {
        var _this = this;
        this._http.get('/tests').subscribe(function (response) {
            _this.tests = response.json();
            _this.sortedtests = _this.sorted(_this.tests, "-score");
            _this.testObserver.next(_this.sortedtests);
        }, function (err) {
            console.log(err);
        });
    };
    TestManagerService.prototype.retrieveTest = function (id, callback) {
        var _this = this;
        this._http.get('/tests/' + id).subscribe(function (response) {
            _this.testInstance = response.json();
            callback(_this.testInstance);
        }, function (err) {
            console.log(err);
        });
    };
    TestManagerService.prototype.deleteTest = function (id) {
        this._http.delete('/tests/' + id).subscribe(function (response) {
            console.log(response.json());
        }, function (err) {
            console.log(err);
        });
        this.retrieveTests();
        this.myTests();
    };
    TestManagerService.prototype.updateTest = function (test, id) {
        console.log(id);
        console.log(test);
        this._http.put('/tests/' + id, test).subscribe(function (response) {
            console.log(response.json());
        }, function (err) {
            console.log(err);
        });
        this.retrieveTests();
    };
    TestManagerService.prototype.createTest = function (test) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('/tests', test, options).subscribe(function (response) {
        }, function (err) {
            console.log(err);
        });
    };
    return TestManagerService;
}());
TestManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestManagerService);

var _a;
//# sourceMappingURL=test-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var Test = (function () {
    function Test(test, score, user) {
        if (test === void 0) { test = ''; }
        if (score === void 0) { score = 0; }
        if (user === void 0) { user = ''; }
        this.test = test;
        this.score = score;
        this.user = user;
    }
    return Test;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ "../../../../../src/app/user-controller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserControllerService = (function () {
    function UserControllerService(_http) {
        this._http = _http;
        this.userInstance = { state: false, username: "" };
        this.userObserver = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.userInstance);
    }
    UserControllerService.prototype.checkLogIn = function (callback) {
        var _this = this;
        this._http.get('/checkLogIn').subscribe(function (response) {
            if (response.json()) {
                _this.userInstance = { state: true, username: response.json() };
            }
            callback(response.json());
            _this.userObserver.next(_this.userInstance);
        }, function (err) {
            console.log(err);
        });
    };
    UserControllerService.prototype.loginUser = function (user, callback) {
        var _this = this;
        this._http.post('/login', user).subscribe(function (response) {
            var result = response.json();
            if (response.json().message) {
                _this.userInstance = { state: false, username: "" };
                callback(response.json());
            }
            else {
                _this.userInstance = { state: true, username: response.json() };
            }
            _this.userObserver.next(_this.userInstance);
        }, function (err) {
            console.log(err);
        });
    };
    UserControllerService.prototype.createUser = function (user, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('/users', user, options).subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    return UserControllerService;
}());
UserControllerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserControllerService);

var _a;
//# sourceMappingURL=user-controller.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(first_name, last_name, email, password) {
        if (first_name === void 0) { first_name = ""; }
        if (last_name === void 0) { last_name = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map