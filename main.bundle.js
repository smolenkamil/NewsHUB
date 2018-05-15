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

/***/ "./src/app/aboutProject/aboutProject.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lora:400,700&subset=latin-ext');\n\n#aboutContent {\n  width: 70%;\n  height: 120vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2vw;\n  font-family: 'Lora', serif;\n  /*background-color: #1c94c4;*/\n}\n\n#projectInfo {\n  width: auto;\n  height: 39vw;\n  padding-bottom: 2vw;\n  margin-top: 3vw;\n  margin-bottom: 4vw;\n  text-align: center;\n  font-size: 0.9vw;\n  border-bottom: 1px solid #888888;\n  /*background-color: #6FB1C8;*/\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 1.5vw;\n  font-weight: 700;\n  font-family: 'Lora', serif;\n}\n\np a {\n  color: dodgerblue;\n}\n\n.toolsImages {\n  width: 5vw;\n  height: 5vw;\n  float: left;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 2.1vw;\n  margin-top: 1.5vw;\n}\n\n#squadInfo {\n  width: auto;\n  height: 34vw;\n  margin-top: 2vw;\n  padding-bottom: 2vw;\n  border-bottom: 1px solid #888888;\n  /*background-color: #6FB1C8;*/\n}\n\n#squadInfo h1 {\n  margin-bottom: 2.5vw;\n}\n\n.person {\n  width: 40%;\n  height: 12vw;\n  float: left;\n  margin-left: 7%;\n  margin-bottom: 2vw;\n  padding-top: 2vw;\n  border: 1px solid #888888;\n  border-radius: 10px;\n  background-color: rgba(158, 203, 213, 0.3);\n}\n\n.person h4 {\n  text-align: center;\n  font-weight: 700;\n  font-family: 'Lora', serif;\n}\n\n.squadPhotos {\n  width: 6vw;\n  height: 6vw;\n  border: 1px solid black;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 6vw;\n}\n\n#workInfo {\n  width: auto;\n  height: auto;\n  margin-top: 2vw;\n  padding-bottom: 2vw;\n  border-bottom: 1px solid #888888;\n  /*background-color: #6FB1C8;*/\n}\n"

/***/ }),

/***/ "./src/app/aboutProject/aboutProject.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutContent\">\n  <div id=\"projectInfo\">\n    <h1>News HUB</h1>\n    <p>\n      The application contains news from a large number of news websites. These messages are obtained using <strong>News API</strong>.\n      On the main page there is an overview of the most popular and the latest news.The application allows you to choose the offered by\n      News API news category, search information and create an account that will enable personalization of displayed content.\n    </p>\n    <p>\n      Account data is stored by using a NoSQL database - <strong>Firebase</strong>. Logging in to the application is possible thanks to the traditional method\n      (email, password) and through the account on the social networking site <strong>Facebook</strong>, or <strong>Google</strong> account.\n    </p>\n    <p>\n      The news on the registered user's home page is customized to his preferences. User\n      will decide which categories will be displayed on the home screen. On the side screen are available\n      information about the weather in the city, which the user chose on the profile page.\n      This functionality will be possible thanks to the use\n      <strong>Open Weather Map API</strong>.\n    </p>\n    <p>\n      The management of project work on the application has been happening on the platform <strong>Trello</strong>\n      (<a href=\"https://trello.com/b/v8KxHUU7\" target=\"_blank\">link</a>),furthermore the <strong>Git</strong> version control system\n      was used to work with the files and  also platform <strong>Github</strong>.\n    </p>\n    <p>\n      The application was implemented on the basis of the prototype, which can be viewed by clicking\n      <a href=\"https://e7fm8t.axshare.com\" target=\"_blank\">on this link</a>, made in the program <strong>Axure RP</strong>.\n      The password for previewing the prototype is a phrase <em>druzynapierscienia</em>.\n    </p>\n    <img src=\"assets/news-api_logo.png\" class=\"toolsImages\" alt=\"NewsAPI\">\n    <img src=\"assets/firebase_logo.png\" class=\"toolsImages\" alt=\"NewsAPI\">\n    <img src=\"assets/OWM_logo.png\" class=\"toolsImages\" alt=\"NewsAPI\">\n    <img src=\"assets/trello_logo.jpg\" class=\"toolsImages\" alt=\"NewsAPI\">\n    <img src=\"assets/git_logo.png\" class=\"toolsImages\" alt=\"NewsAPI\">\n    <img src=\"assets/github_logo.png\" class=\"toolsImages\" alt=\"NewsAPI\">\n  </div>\n  <div id=\"squadInfo\">\n    <h1>Project team</h1>\n    <div class=\"person\">\n      <img src=\"assets/zuza.jpg\" class=\"squadPhotos\" alt=\"Zuza\">\n      <h4>Zuzanna Błażejowska</h4>\n    </div>\n    <div class=\"person\">\n      <img src=\"assets/aga.jpg\" class=\"squadPhotos\" alt=\"Aga\">\n      <h4>Agnieszka Burda</h4>\n    </div>\n    <div class=\"person\">\n      <img src=\"assets/kamil.jpg\" class=\"squadPhotos\" alt=\"Kamil C.\">\n      <h4>Kamil Cała</h4>\n    </div>\n    <div class=\"person\">\n      <img src=\"assets/kazek.jpg\" class=\"squadPhotos\" alt=\"Kamil S.\">\n      <h4>Kamil Smoleń</h4>\n    </div>\n  </div>\n  <div id=\"workInfo\">\n    <h1>Work report</h1>\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Squad member</th>\n          <th>Work done</th>\n          <th>Time</th>\n        </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Zuzanna Błażejowska</td>\n            <td>\n              Tutaj<br>\n              wykonana<br>\n              praca\n            </td>\n            <td>\n              1,5h<br>\n              30 mins<br>\n              3h\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td><strong>Time in total:</strong></td>\n          </tr>\n          <tr>\n            <td>Agnieszka Burda</td>\n            <td>\n              Tutaj<br>\n              wykonana<br>\n              praca\n            </td>\n            <td>\n              1,5h<br>\n              30 mins<br>\n              3h\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td><strong>Time in total:</strong></td>\n          </tr>\n          <tr>\n            <td>Kamil Cała (project manager)</td>\n            <td>\n              Tutaj<br>\n              wykonana<br>\n              praca\n            </td>\n            <td>\n              1,5h<br>\n              30 mins<br>\n              3h\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td><strong>Time in total:</strong></td>\n          </tr>\n          <tr>\n            <td>Kamil Smoleń</td>\n            <td>\n              Tutaj<br>\n              wykonana<br>\n              praca\n            </td>\n            <td>\n              1,5h<br>\n              30 mins<br>\n              3h\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td><strong>Time in total:</strong></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aboutProject/aboutProject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutProjectComponent = /** @class */ (function () {
    function AboutProjectComponent() {
    }
    AboutProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutProject',
            template: __webpack_require__("./src/app/aboutProject/aboutProject.component.html"),
            styles: [__webpack_require__("./src/app/aboutProject/aboutProject.component.css")]
        })
    ], AboutProjectComponent);
    return AboutProjectComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profileContainer_profileContainer_component__ = __webpack_require__("./src/app/profileContainer/profileContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutProject_aboutProject_component__ = __webpack_require__("./src/app/aboutProject/aboutProject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searchContainer_searchContainer__ = __webpack_require__("./src/app/searchContainer/searchContainer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loginContainer_loginContainer_component__ = __webpack_require__("./src/app/loginContainer/loginContainer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'homepage/6', pathMatch: 'full' },
    { path: 'search/:tag', component: __WEBPACK_IMPORTED_MODULE_5__searchContainer_searchContainer__["a" /* SearchContainerComponent */] },
    { path: 'homepage/:cat', component: __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'homepage/6', component: __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profileContainer_profileContainer_component__["a" /* ProfileContainerComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__aboutProject_aboutProject_component__["a" /* AboutProjectComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__loginContainer_loginContainer_component__["a" /* LoginContainerComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  #logInBtn {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media only screen and (max-width: 1100px) {\n  #footer p {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n#content {\n  max-width: 65%;\n  min-width: 450px;\n  margin: 0 auto;\n  padding-bottom: 30px;\n  position: relative;\n}\n\n.after{\n  clear: both;\n}\n\n#newsContainer {\n  min-height: 1000px;\n  overflow: hidden;\n  width: 100%;\n  background-color: white;\n  padding-bottom: 5vw;\n  float: left;\n}\n\n#header {\n  min-height: 70px;\n  background-color: #008AA8;\n  -webkit-box-shadow: 0 3px 10px #707070;\n          box-shadow: 0 3px 10px #707070;\n  margin: 0;\n  padding-left: 17%;\n  padding-right: 17%;\n}\n\n.logoTop{\n  height: 52px;\n  position: relative;\n  display: inline;\n  margin-top: 8px;\n  float: left;\n  cursor: pointer;\n  outline: none;\n}\n\n.logoTop:hover {\n  border-radius: 12px;\n  background-color: #53A2BE;\n}\n\n#logInBtn {\n  float: right;\n  margin-top: 15px;\n  border: none;\n  margin-right: 10px;\n  color: white;\n  height: 36px;\n  background-color: #FF8080;\n}\n\n#logInBtn:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n}\n\n#footer {\n  height: 60px;\n  width: 100%;\n  background-color: #434343;\n}\n\n#footer p {\n  color: lightgray;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  float: left;\n}\n\n/*#aFooter {*/\n\n/*margin: 0;*/\n\n/*margin-left: 17%;*/\n\n/*padding: 5px;*/\n\n/*color: white;*/\n\n/*font-size: 25px;*/\n\n/*font-weight: 700;*/\n\n/*}*/\n\n#footerContent {\n  margin-right: 5%;\n}\n\n.logoBottom{\n  height: 80%;\n  margin-left: 17%;\n}\n\nbtnAboutProject{\n  margin-right: 17%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"header\">\n  <!--<hamburgerBtn></hamburgerBtn>-->\n  <img routerLink=\"homepage/6\" class=\"logoTop\" src=\"assets/newshub_logo_small.png\"/>\n  <button type=\"button\" class=\"btn btn-light\" id=\"logInBtn\" routerLink=\"login\">LOG IN</button>\n  <profileMenu></profileMenu>\n  <searchBar></searchBar>\n</nav>\n<catMenu></catMenu>\n<div id=\"content\">\n  <div id=\"newsContainer\">\n    <router-outlet></router-outlet>\n  </div>\n  <weather></weather>\n</div>\n\n<nav class=\"navbar\" id=\"footer\">\n  <img class=\"logoBottom\" src=\"assets/newshub_logo_small.png\"/>\n  <div id=\"footerContent\">\n    <p>Copyright Ⓒ 2018 Drużyna Pierścienia. All rights reserved.</p>\n  </div>\n  <btnAboutProject></btnAboutProject>\n</nav>\n"

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
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu__ = __webpack_require__("./src/app/menu/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__searchBar_searchBar__ = __webpack_require__("./src/app/searchBar/searchBar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profileMenu_profileMenu__ = __webpack_require__("./src/app/profileMenu/profileMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slider_slider__ = __webpack_require__("./src/app/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__weather_weather__ = __webpack_require__("./src/app/weather/weather.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sliderArticle_sliderArticle__ = __webpack_require__("./src/app/sliderArticle/sliderArticle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profileContainer_profileContainer_component__ = __webpack_require__("./src/app/profileContainer/profileContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userData_userData__ = __webpack_require__("./src/app/userData/userData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__categoriesChoice_categoriesChoice__ = __webpack_require__("./src/app/categoriesChoice/categoriesChoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__weatherChoice_weatherChoice__ = __webpack_require__("./src/app/weatherChoice/weatherChoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__article_article__ = __webpack_require__("./src/app/article/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__aboutProject_aboutProject_component__ = __webpack_require__("./src/app/aboutProject/aboutProject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__categoriesMenu_categoriesMenu__ = __webpack_require__("./src/app/categoriesMenu/categoriesMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__btnAboutProject_btnAboutProject__ = __webpack_require__("./src/app/btnAboutProject/btnAboutProject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__searchContainer_searchContainer__ = __webpack_require__("./src/app/searchContainer/searchContainer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__loginContainer_loginContainer_component__ = __webpack_require__("./src/app/loginContainer/loginContainer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var firebaseConfig = {
    apiKey: "AIzaSyAMc1KI-zlkosp7qLKeMB4_F5Nvv82C-FM",
    authDomain: "newshub-3011.firebaseapp.com",
    databaseURL: "https://newshub-3011.firebaseio.com",
    projectId: "newshub-3011",
    storageBucket: "newshub-3011.appspot.com",
    messagingSenderId: "159798983174"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__menu_menu__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__searchContainer_searchContainer__["a" /* SearchContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__categoriesMenu_categoriesMenu__["a" /* CatMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__searchBar_searchBar__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profileMenu_profileMenu__["a" /* ProfileMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__slider_slider__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__article_article__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__weather_weather__["b" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_14__weather_weather__["a" /* DatePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sliderArticle_sliderArticle__["a" /* SliderArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profileContainer_profileContainer_component__["a" /* ProfileContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__userData_userData__["a" /* UserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_19__categoriesChoice_categoriesChoice__["a" /* CategoriesChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__weatherChoice_weatherChoice__["a" /* WeatherChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__aboutProject_aboutProject_component__["a" /* AboutProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_25__btnAboutProject_btnAboutProject__["a" /* BtnAboutProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_27__loginContainer_loginContainer_component__["a" /* LoginContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.css":
/***/ (function(module, exports) {

module.exports = ".article{\n  width: 45%;\n  /*min-height: 20vw;*/\n  float: left;\n  margin-left: 2.5%;\n  /*background-color: #e4e4e4;*/\n  -ms-flex-line-pack: center;\n      align-content: center;\n  /*border:solid;*/\n  /*border-width: thin;*/\n  /*border-color: black;*/\n  /*box-shadow: 0 3px 10px white;*/\n  /*border-radius: 20px;*/\n}\n.article:hover .content{\n  visibility: visible;\n  height: 100%;\n\n}\n.imagePane{\n  position: relative;\n}\n.background{\n  position: absolute;\n  bottom: 0%;\n  width: 100%;\n  margin-left: 2.5%;\n  /*margin-right: -2.5%;*/\n  /*margin: 4%;*/\n  background-color: #53A2BE;\n  opacity: 0.9;\n  border:solid;\n  border-width: thin;\n  border-color: black;\n}\n.headline{\n  /*position: absolute;*/\n  bottom: 2%;\n  margin: 4%;\n  font-size: 1vw;\n  text-align: center;\n  color:mintcream;\n  font-weight: bold;\n}\n.placeholder{\n  width: 100%;\n  height: 18vw;\n  margin-top: 3%;\n  margin-left: 2.5%;\n  /*border-radius: 20px;*/\n  border:solid;\n  border-width: thin;\n  border-color: black;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.content{\n  visibility: hidden;\n  height: 0px;\n  text-align: center;\n  font-size: 0.8vw;\n  margin-left: 7%;\n  margin-right: 7%;\n  margin-top: 2%;\n  color: white;\n  font-weight: normal;\n}\n"

/***/ }),

/***/ "./src/app/article/article.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article\">\n  <div class=\"imagePane\">\n    <img class=\"placeholder\" src=\"{{article.urlToImg}}\" alt=\"HTML5\" id=\"i1\" />\n    <div class=\"background\">\n      <p class=\"headline\">{{article.title}}</p>\n      <p class=\"content\">{{article.description}}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/article/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_news__ = __webpack_require__("./src/app/logic/news.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_article__ = __webpack_require__("./src/app/logic/article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
        this.newsx = new __WEBPACK_IMPORTED_MODULE_1__logic_news__["a" /* NewsProvider */]();
    }
    ArticleComponent.prototype.ngOnChanges = function (chang) {
        this.article = chang.article.currentValue;
    };
    ArticleComponent.prototype.ngOnInit = function () {
        if (this.catNumber === undefined)
            this.catNumber = 6;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('articleFromArray'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__logic_article__["a" /* Article */])
    ], ArticleComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('articleId'),
        __metadata("design:type", Number)
    ], ArticleComponent.prototype, "ident", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('cat'),
        __metadata("design:type", Number)
    ], ArticleComponent.prototype, "catNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('tagx'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "tag", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'article',
            template: __webpack_require__("./src/app/article/article.html"),
            styles: [__webpack_require__("./src/app/article/article.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.router.navigateByUrl('/profile');
        })
            .catch(function (err) {
            console.log('Something went wrong: ', err.message);
        });
    };
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Sucess', value);
            _this.router.navigateByUrl('/profile');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    // googleLogin() {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   return this.oAuthLogin(provider)
    //     .then(value => {
    //       console.log('Sucess', value),
    //         console.log('The given name is ' + value.additionalUserInfo.profile.given_name),
    //         this.router.navigateByUrl('/profile');
    //     })
    //     .catch(error => {
    //       console.log('Something went wrong: ', error);
    //     });
    // }
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/btnAboutProject/btnAboutProject.css":
/***/ (function(module, exports) {

module.exports = ".btnAboutProject {\n  position: relative;\n  display: inline;\n}\n\n.btnAboutProject:hover {\n  display: block;\n}\n\n#btnAboutProject {\n  padding: 20px;\n  color: lightgray;\n  font-size: 12px;\n  margin: 0;\n\n}\n\n#btnAboutProject:hover, #btnAboutProject:focus {\n  background-color: #707070;\n  padding: 20px;\n}\n"

/***/ }),

/***/ "./src/app/btnAboutProject/btnAboutProject.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btnAboutProject\">\n  <p id=\"btnAboutProject\" routerLink=\"about\">About project</p>\n</div>\n"

/***/ }),

/***/ "./src/app/btnAboutProject/btnAboutProject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnAboutProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BtnAboutProjectComponent = /** @class */ (function () {
    function BtnAboutProjectComponent() {
    }
    BtnAboutProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'btnAboutProject',
            template: __webpack_require__("./src/app/btnAboutProject/btnAboutProject.html"),
            styles: [__webpack_require__("./src/app/btnAboutProject/btnAboutProject.css")]
        })
    ], BtnAboutProjectComponent);
    return BtnAboutProjectComponent;
}());



/***/ }),

/***/ "./src/app/categoriesChoice/categoriesChoice.css":
/***/ (function(module, exports) {

module.exports = "#categoriesChoiceContent {\n  width: 96%;\n  height: 25vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2vw;\n  border-bottom: 1px solid lightgray;\n  /*background-color: #00FFFF;*/\n}\n\nh3 {\n  font-weight: 600;\n  font-size: 1.2vw;\n  text-align: center;\n}\n\nh5 {\n  display: block;\n  font-size: 1vw;\n  font-weight: 700;\n  margin-left: 1.5vw;\n  margin-top: 2vw;\n  margin-bottom: 0.8vw;\n}\n\n.leftContent {\n  float: left;\n  width: 14vw;\n  height: 23vw;\n  margin-left: 2%;\n  border-right: 1px solid gray;\n  /*background-color: #6FB1C8;*/\n}\n\n#newsImage {\n  width: 8vw;\n  height: 8vw;\n  margin-left: 2.8vw;\n  margin-top: 6.5vw;\n}\n\n.rightContent {\n  float: left;\n  height: 20vw;\n  /*background-color: #1c94c4;*/\n}\n\n.first {\n  margin-left: 1.5vw;\n}\n\n.form-check-label {\n  font-size: 1.1vw;\n}\n\n.form-group.row {\n  height: 2.5vw;\n  margin-top: 1.3vw;\n  margin-left: 0.4vw;\n}\n\n.form-group.row label {\n  text-align: right;\n  font-size: 0.9vw;\n}\n\n.custom-select {\n  font-size: 0.9vw;\n}\n\n#categoriesSubmit {\n  float: right;\n  margin-top: 0.5vw;\n  border: none;\n  margin-right: 0;\n  color: white;\n  height: 2vw;\n  font-weight: 600;\n  -webkit-box-shadow: 0.1vw 1vw #000;\n  box-shadow: 0 0.1vw 5px #888888;\n  background-color: #FF8080;\n}\n\n#categoriesSubmit:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/categoriesChoice/categoriesChoice.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"categoriesChoiceContent\">\n  <div class=\"leftContent\">\n    <img id=\"newsImage\" src=\"assets/newspaper.png\" alt=\"news_image\">\n    <h3>News</h3>\n  </div>\n\n  <div class=\"rightContent\">\n    <form id=\"categoriesChoiceForm\">\n      <h5>Categories</h5>\n      <div class=\"form-check-inline first\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"businessInput\" value=\"business\">\n          Business\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"entertainmentInput\" value=\"entertainment\">\n          Entertainment\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"healthInput\" value=\"health\">\n          Health\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"scienceInput\" value=\"science\">\n          Science\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"sportsInput\" value=\"sports\">\n          Sport\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"categories\" id=\"technologyInput\" value=\"technology\">\n          Technology\n        </label>\n      </div>\n      <h5>Headlines</h5>\n      <div class=\"form-check-inline first\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"headlines\" id=\"topInput\" value=\"top-headlines\" checked>\n          The most popular\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"headlines\" id=\"everythingInput\" value=\"everything\">\n          All\n        </label>\n      </div>\n    </form>\n    <button type=\"submit\" class=\"btn btn-light\" form=\"categoriesChoiceForm\" id=\"categoriesSubmit\">SAVE</button>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/categoriesChoice/categoriesChoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesChoiceComponent = /** @class */ (function () {
    function CategoriesChoiceComponent() {
    }
    CategoriesChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'categoriesChoice',
            template: __webpack_require__("./src/app/categoriesChoice/categoriesChoice.html"),
            styles: [__webpack_require__("./src/app/categoriesChoice/categoriesChoice.css")]
        })
    ], CategoriesChoiceComponent);
    return CategoriesChoiceComponent;
}());



/***/ }),

/***/ "./src/app/categoriesMenu/categoriesMenu.css":
/***/ (function(module, exports) {

module.exports = "#catMenu {\n  min-height: 40px;\n  background-color: #53A2BE;\n  -webkit-box-shadow: 0 6px 5px #707070;\n          box-shadow: 0 6px 5px #707070;\n  margin: 0;\n  padding-left: 18%;\n  padding-right: 18%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.cat{\n  color:white;\n}\na{\n  margin-left: 2.6vw;\n  font-size: 1.3vw;\n}\n"

/***/ }),

/***/ "./src/app/categoriesMenu/categoriesMenu.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"catDiv\"></div>\n<nav id=\"catMenu\">\n  <a class=\"cat\" [routerLink]=\"['/homepage',category.id]\" [ngStyle]=\"{'color': 'white'}\" *ngFor=\"let category of categories\">{{category.name}}</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/categoriesMenu/categoriesMenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatMenuComponent = /** @class */ (function () {
    function CatMenuComponent(router) {
        this.router = router;
        this.categories = [
            { "id": 0, "name": "Business" },
            { "id": 1, "name": "Entertainment" },
            { "id": 2, "name": "Health" },
            { "id": 3, "name": "Science" },
            { "id": 4, "name": "Sports" },
            { "id": 5, "name": "Technology" },
            { "id": 6, "name": "General" }
        ];
    }
    CatMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'catMenu',
            template: __webpack_require__("./src/app/categoriesMenu/categoriesMenu.html"),
            styles: [__webpack_require__("./src/app/categoriesMenu/categoriesMenu.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CatMenuComponent);
    return CatMenuComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<slider></slider>\n<article [cat]=catId [articleFromArray]=articles[i] *ngFor=\"let article of articles; let i = index\" [articleId]=\"i\"></article>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_news__ = __webpack_require__("./src/app/logic/news.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(route) {
        this.route = route;
        this.newsx = new __WEBPACK_IMPORTED_MODULE_2__logic_news__["a" /* NewsProvider */]();
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.catId = params['cat'];
            _this.articles = _this.newsx.getArticles(_this.catId);
        });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/logic/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(title, description, url) {
        this._title = title;
        this._description = description;
        this._urlToImg = url;
    }
    Object.defineProperty(Article.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "urlToImg", {
        get: function () {
            return this._urlToImg;
        },
        enumerable: true,
        configurable: true
    });
    return Article;
}());



/***/ }),

/***/ "./src/app/logic/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article__ = __webpack_require__("./src/app/logic/article.ts");


var NewsProvider = /** @class */ (function () {
    function NewsProvider() {
        this.MAIN_URL = "https://newsapi.org/v2/top-headlines";
        this.CATEGORIES = ["business", "entertainment", "health", "science", "sports", "technology", "general"];
        this.APIKEY = "&apiKey=575d0735025241fda1b32a047f19dcd3";
        this.articles = [];
        this.wantedArticles = [];
    }
    NewsProvider.prototype.getArticles = function (cat) {
        var _this = this;
        this.articles = [];
        __WEBPACK_IMPORTED_MODULE_0_jquery__["ajaxSetup"]({ 'async': false });
        __WEBPACK_IMPORTED_MODULE_0_jquery__["getJSON"](this.MAIN_URL + "?category=" + this.CATEGORIES[cat] + "&country=gb" + this.APIKEY, function (data) {
            var ix = 0;
            for (var i = 0; i < data.articles.length; i++) {
                if (data.articles[i].title !== null && data.articles[i].urlToImage !== null && data.articles[i].description !== null) {
                    _this.articles[ix] = new __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */](data.articles[i].title, data.articles[i].description, data.articles[i].urlToImage);
                    ix++;
                }
            }
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__["getJSON"](this.MAIN_URL + "?category=" + this.CATEGORIES[cat] + "&country=us" + this.APIKEY, function (data) {
            var ix = _this.articles.length;
            for (var i = 0; i < data.articles.length; i++) {
                if (data.articles[i].title !== null && data.articles[i].urlToImage !== null && data.articles[i].description !== null) {
                    _this.articles[ix] = new __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */](data.articles[i].title, data.articles[i].description, data.articles[i].urlToImage);
                    ix++;
                }
            }
        });
        console.log("+2");
        // for(let i=0;i<17;i++){
        //   this.articles[i] = new Article(this.CATEGORIES[cat]+"  "+ i+ "    !!","bleb belb bleb elbelb bleblebel belbeblbel blebelblebl ebe blebleble bb lebleb lebleblbel. Bblelblelblbelbbellbleb eblebleb lbelebl l elblebblelb blele. lblbelbelellbleble!","http://www.koty.pl/wp-content/uploads/2017/11/shutterstock_589722092-e1510059950350.jpg" )
        // }
        console.log(this.articles.length);
        return this.articles;
    };
    NewsProvider.prototype.searchArticle = function (tag) {
        var _this = this;
        this.wantedArticles = [];
        __WEBPACK_IMPORTED_MODULE_0_jquery__["ajaxSetup"]({ 'async': false });
        __WEBPACK_IMPORTED_MODULE_0_jquery__["getJSON"]("https://newsapi.org/v2/top-headlines?q=" + tag + "&pageSize=100" + this.APIKEY, function (data) {
            console.log(data.status + data.totalResults);
            var ix = 0;
            for (var i = 0; i < data.articles.length; i++) {
                if (data.articles[i].title !== null && data.articles[i].urlToImage !== null && data.articles[i].description !== null) {
                    _this.wantedArticles[ix] = new __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */](data.articles[i].title, data.articles[i].description, data.articles[i].urlToImage);
                    ix++;
                }
            }
        });
        console.log("+1");
        // for(let i=0;i<5;i++){
        //   this.wantedArticles[i] = new Article(tag+"  "+ i+ "    !!","bleb belb bleb elbelb bleblebel belbeblbel blebelblebl ebe blebleble bb lebleb lebleblbel. Bblelblelblbelbbellbleb eblebleb lbelebl l elblebblelb blele. lblbelbelellbleble!","http://www.koty.pl/wp-content/uploads/2017/11/shutterstock_589722092-e1510059950350.jpg" )
        // }
        console.log(this.wantedArticles.length);
        return this.wantedArticles;
    };
    return NewsProvider;
}());



/***/ }),

/***/ "./src/app/logic/weather.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weather; });
var Weather = /** @class */ (function () {
    function Weather(temp, name, windSpeed, pressure, humidity, description, icon, clouds) {
        this._temp = temp;
        this._name = name;
        this._speed = windSpeed;
        this._pressure = pressure;
        this._humidity = humidity;
        this._description = description;
        this._icon = icon;
        this._clouds = clouds;
    }
    Object.defineProperty(Weather.prototype, "temp", {
        get: function () {
            return this._temp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "pressure", {
        get: function () {
            return this._pressure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "humidity", {
        get: function () {
            return this._humidity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "clouds", {
        get: function () {
            return this._clouds;
        },
        enumerable: true,
        configurable: true
    });
    return Weather;
}());



/***/ }),

/***/ "./src/app/logic/weatherApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather__ = __webpack_require__("./src/app/logic/weather.ts");


var WeatherProvider = /** @class */ (function () {
    function WeatherProvider() {
        this.MAIN_URL = "https://api.openweathermap.org/data/2.5/";
        this.ENDPOINT = "weather";
        this.warsawId = "756135";
        this.krakowId = "3094802";
        this.cityId = "?id=" + this.krakowId;
        this.metricUnits = "&units=metric";
        this.langPl = "&lang=en";
        this.APIKEY = "&APPID=e7aa07ccc31d9b3a6b07d4e7e5ed9349";
        //day weather icons
        this.img01d = "assets/01d.png";
        this.img02d = "assets/02d.png";
        this.img03d = "assets/03d.png";
        this.img04d = "assets/04d.png";
        this.img09d = "assets/09d.png";
        this.img10d = "assets/10d.png";
        this.img11d = "assets/11d.png";
        this.img13d = "assets/13d.png";
        this.img50d = "assets/50d.png";
        //night weather icons
        this.img01n = "assets/01n.png";
        this.img02n = "assets/02n.png";
        this.img03n = "assets/03n.png";
        this.img04n = "assets/04n.png";
        this.img09n = "assets/09n.png";
        this.img10n = "assets/10n.png";
        this.img11n = "assets/11n.png";
        this.img13n = "assets/13n.png";
        this.img50n = "assets/50n.png";
    }
    WeatherProvider.prototype.getWeather = function () {
        var _this = this;
        var tempxx, namexx, speedxx, pressxx, humxx, descxx, iconxx, cloudsxx;
        __WEBPACK_IMPORTED_MODULE_0_jquery__["ajaxSetup"]({ 'async': false });
        __WEBPACK_IMPORTED_MODULE_0_jquery__["getJSON"](this.MAIN_URL + this.ENDPOINT + this.cityId + this.metricUnits + this.langPl + this.APIKEY, function (data) {
            if (data.main.temp !== null && data.name !== null && data.wind.speed !== null
                && data.main.pressure !== null && data.main.humidity !== null && data.weather[0].description !== null
                && data.weather[0].icon !== null && data.clouds.all !== null) {
                _this.tempx = data.main.temp;
                _this.namex = data.name;
                _this.windSpeedx = data.wind.speed;
                _this.pressurex = data.main.pressure;
                _this.humidityx = data.main.humidity;
                _this.descriptionx = data.weather[0].description;
                _this.cloudsx = data.clouds.all;
                switch (data.weather[0].icon) {
                    //day
                    case '01d':
                        _this.iconx = _this.img01d;
                        break;
                    case '02d':
                        _this.iconx = _this.img02d;
                        break;
                    case '03d':
                        _this.iconx = _this.img03d;
                        break;
                    case '04d':
                        _this.iconx = _this.img04d;
                        break;
                    case '09d':
                        _this.iconx = _this.img09d;
                        break;
                    case '10d':
                        _this.iconx = _this.img10d;
                        break;
                    case '11d':
                        _this.iconx = _this.img11d;
                        break;
                    case '13d':
                        _this.iconx = _this.img13d;
                        break;
                    case '50d':
                        _this.iconx = _this.img50d;
                        break;
                    //night
                    case '01n':
                        _this.iconx = _this.img01n;
                        break;
                    case '02n':
                        _this.iconx = _this.img02n;
                        break;
                    case '03n':
                        _this.iconx = _this.img03n;
                        break;
                    case '04n':
                        _this.iconx = _this.img04n;
                        break;
                    case '09n':
                        _this.iconx = _this.img09n;
                        break;
                    case '10n':
                        _this.iconx = _this.img10n;
                        break;
                    case '11n':
                        _this.iconx = _this.img11n;
                        break;
                    case '13n':
                        _this.iconx = _this.img13n;
                        break;
                    case '50n':
                        _this.iconx = _this.img50n;
                        break;
                    //default - full_sun.png
                    default:
                        _this.iconx = "assets/full_sun.png";
                }
            }
            tempxx = _this.tempx;
            namexx = _this.namex;
            speedxx = _this.windSpeedx;
            pressxx = _this.pressurex;
            humxx = _this.humidityx;
            descxx = _this.descriptionx;
            iconxx = _this.iconx;
            cloudsxx = _this.cloudsx;
        });
        return new __WEBPACK_IMPORTED_MODULE_1__weather__["a" /* Weather */](tempxx, namexx, speedxx, pressxx, humxx, descxx, iconxx, cloudsxx);
    };
    return WeatherProvider;
}());



/***/ }),

/***/ "./src/app/loginContainer/loginContainer.component.css":
/***/ (function(module, exports) {

module.exports = "#loginContent {\n  width: 100%;\n  height: 30vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3vw;\n  /*background-color: #1c94c4;*/\n}\n\n#profileContent {\n  width: 100%;\n  overflow: hidden;\n}\n\n#napis{\n  text-align: center;\n  font-size: 1.8vw;\n  font-weight: lighter;\n  font-family: 'Lora', serif;\n}\n\n.hr{\n  background-color: #717171;\n  height: 1px;\n  width: 40%;\n  margin-top: 1vw;\n  margin-bottom: 1vw;\n  margin-left: 30%;\n}\n\n#fireAuthCont {\n  width: 60%;\n  height: 23vw;\n  margin-left: auto;\n  margin-right: auto;\n  /*background-color: #9ECBDA;*/\n}\n\np {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 1vw;\n}\n\nh5 {\n  font-size: 1.2vw;\n  font-weight: 400;\n  text-align: center;\n  font-family: 'Lora', serif;\n  margin-bottom: 0.8vw;\n}\n\nlabel {\n  text-align: right;\n  font-size: 0.9vw;\n}\n\nlabel img {\n  margin-bottom: 0.2vw;\n}\n\n.form-control {\n  font-size: 0.9vw;\n}\n\n.dl .col-sm-2.col-form-label {\n  padding-top: 0;\n}\n\n.form-group.row {\n  height: 2.5vw;\n  margin-left: 11vw;\n  margin-bottom: 0.2vw;\n}\n\n#signupSubmit {\n  float: left;\n  border: none;\n  margin-top: 0.7vw;\n  margin-left: 16.1vw;\n  color: white;\n  width: 7vw;\n  height: 2vw;\n  font-weight: 600;\n  -webkit-box-shadow: 0.1vw 1vw #000;\n  box-shadow: 0 0.1vw 5px #888888;\n  background-color: #FF8080;\n}\n\n#signupSubmit:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n}\n\n#logOutCommunicate {\n  text-align: center;\n}\n\n#goToProfile {\n  color: dodgerblue;\n}\n\n#goToProfile:hover, #goToProfile:focus {\n  text-decoration: underline;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/loginContainer/loginContainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginDiv\"></div>\n<div id=\"loginContent\">\n  <div id=\"napis\">\n    Log in to your account\n    <div class=\"hr\"></div>\n  </div>\n  <div id=\"fireAuthCont\">\n    <div id=\"firebaseui-auth-container\"></div>\n    <p>or</p>\n    <form id=\"signupForm\">\n      <h5>Sign up with email and password</h5>\n      <div class=\"form-group row\">\n        <label for=\"signupEmail\" class=\"col-sm-1 col-form-label\"><img src=\"assets/envelope.png\" alt=\"\"></label>\n        <div class=\"col-sm-6\">\n          <input type=\"email\" class=\"form-control\" id=\"signupEmail\" placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"signupPasswd\" class=\"col-sm-1 col-form-label\"><img src=\"assets/padlock.png\" alt=\"\"></label>\n        <div class=\"col-sm-6\">\n          <input type=\"password\" class=\"form-control\" id=\"signupPasswd\" placeholder=\"Password\">\n        </div>\n      </div>\n    </form>\n    <button type=\"submit\" class=\"btn btn-light\" form=\"signupForm\" id=\"signupSubmit\">SIGN UP</button>\n  </div>\n  <h4 id=\"logOutCommunicate\" class=\"hidden\">\n    You are already logged in as <strong><span id=\"logUsername\"></span></strong>.<br>Please, log out at the bottom of\n    <a id=\"goToProfile\" routerLink=\"../profile\">this site</a> first, to log in to other account.\n  </h4>\n</div>\n"

/***/ }),

/***/ "./src/app/loginContainer/loginContainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginContainerComponent = /** @class */ (function () {
    function LoginContainerComponent() {
    }
    LoginContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loginContainer',
            template: __webpack_require__("./src/app/loginContainer/loginContainer.component.html"),
            styles: [__webpack_require__("./src/app/loginContainer/loginContainer.component.css")]
        })
    ], LoginContainerComponent);
    return LoginContainerComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand img {\n  margin-right: 2%;\n}\n\n#hamburgerBtn {\n  float: left;\n  cursor: pointer;\n  margin-right: 1%;\n  padding: 11px;\n  margin-top: 0;\n}\n\n.dropdown {\n  position: relative;\n  display: inline;\n}\n\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #53A2BE;\n  padding: 5px;\n}\n\n.dropdown-content hr {\n  padding: 0;\n  width: 94%;\n  margin: 0 auto;\n  background-color: #333333;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  top: 70px;\n  left: -124px;\n  background-color: #53A2BE;\n  min-width: 250px;\n  -webkit-box-shadow: 2px 3px 10px #707070;\n          box-shadow: 2px 3px 10px #707070;\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  cursor: pointer;\n}\n\n.dropdown-content a:hover {\n  background-color: #6FB1C8;\n  width: 100%;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.hoverDropdown-content {\n  display: none;\n  position: absolute;\n  left: 250px;\n  top: -54px;\n  background-color: #6FB1C8;\n  min-width: 180px;\n  -webkit-box-shadow: 2px 3px 10px #707070;\n          box-shadow: 2px 3px 10px #707070;\n  z-index: 1;\n}\n\n.hoverDropdown-content a {\n  color: white;\n  font-weight: 600;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  /*cursor: pointer;*/\n}\n\n.hoverDropdown-content a:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.ddHover:hover .hoverDropdown-content {\n  display: block;\n}\n\n.ddHover:hover .dropbtn {\n  background-color: #6FB1C8;\n  width: 100%;\n}\n\n.hamburgerBackground {\n  background-color: #53A2BE;\n}\n\n"

/***/ }),

/***/ "./src/app/menu/menu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n  <img id=\"hamburgerBtn\" class=\"dropbtn\" src=\"assets/menu.png\">\n  <div class=\"dropdown-content\">\n    <div class=\"dropdown ddHover\">\n      <a class=\"navbar-brand dropbtn\">\n        <img src=\"assets/category.png\" width=\"30\" height=\"30\" class=\"d-inline align-top\" alt=\"\">\n        Kategorie\n      </a>\n      <div class=\"hoverDropdown-content\">\n        <a><span>Biznes</span></a>\n        <a><span>Rozrywka</span></a>\n        <a><span>Zdrowie</span></a>\n        <a><span>Nauka</span></a>\n        <a><span>Sport</span></a>\n        <a><span>Technologia</span></a>\n      </div>\n    </div>\n    <div class=\"dropdown ddHover\">\n      <a class=\"navbar-brand dropbtn\">\n        <img src=\"assets/city.png\" width=\"30\" height=\"30\" class=\"d-inline align-top\" alt=\"\">\n        Miasta\n      </a>\n      <div class=\"hoverDropdown-content\">\n        <a><span>Miasto 1</span></a>\n        <a><span>Miasto 2</span></a>\n        <a><span>Miasto 3</span></a>\n        <a><span>Miasto 4</span></a>\n        <a><span>Miasto 5</span></a>\n      </div>\n    </div>\n    <div class=\"dropdown ddHover\">\n      <a class=\"navbar-brand dropbtn\">\n        <img src=\"assets/user.png\" width=\"30\" height=\"30\" class=\"d-inline align-top\" alt=\"\">\n        Profil\n      </a>\n      <div class=\"hoverDropdown-content\">\n        <a id=\"zaloguj\">Zaloguj</a>\n      </div>\n    </div>\n    <hr>\n    <a class=\"navbar-brand\" routerLink=\"about\">\n      <img src=\"assets/feedback.png\" width=\"30\" height=\"30\" class=\"d-inline align-top\" alt=\"\">\n      O projekcie\n    </a>\n    <a class=\"navbar-brand\">\n      <img src=\"assets/contact.png\" width=\"30\" height=\"30\" class=\"d-inline align-top\" alt=\"\">\n      Zespół\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/menu/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hamburgerBtn',
            template: __webpack_require__("./src/app/menu/menu.html"),
            styles: [__webpack_require__("./src/app/menu/menu.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/profileContainer/profileContainer.component.css":
/***/ (function(module, exports) {

module.exports = "#profileContent {\n  width: 100%;\n  overflow: hidden;\n}\n\n#profileFiller {\n  width: 100%;\n  height: 60vh;\n  /*background-color: #9ECBDA;*/\n}\n\nh1 {\n  font-weight: 700;\n  text-align: center;\n  margin-top: 2vw;\n  margin-bottom: 2vw;\n}\n\n#logInCommunicate {\n  text-align: center;\n}\n\n#logOutBtn {\n  margin-top: 3vw;\n  margin-left: 24vw;\n  color: white;\n  font-weight: 700;\n  font-size: 1vw;\n  height: 3vw;\n  width: 15vw;\n  border: none;\n  background-color: #FF8080;\n}\n\n#logOutBtn:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n  font-weight: 700;\n  font-size: 1vw;\n}\n"

/***/ }),

/***/ "./src/app/profileContainer/profileContainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"profileDiv\"></div>\n<div id=\"profileContent\">\n  <h1>Profile</h1>\n  <div id=\"profileMain\">\n    <userData></userData>\n    <categoriesChoice></categoriesChoice>\n    <weatherChoice></weatherChoice>\n    <button type=\"button\" class=\"btn btn-light\" id=\"logOutBtn\" (click)=\"signout()\">WYLOGUJ</button>\n  </div>\n  <h4 id=\"logInCommunicate\" class=\"hidden\">Log in to continue!</h4>\n  <div id=\"profileFiller\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/profileContainer/profileContainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileContainerComponent = /** @class */ (function () {
    function ProfileContainerComponent(authService) {
        this.authService = authService;
    }
    ProfileContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById('logOutBtn').addEventListener('click', function () {
            var logOut = document.getElementById('logOutBtn');
            if (logOut.innerHTML == 'logout' || logOut.innerHTML == 'WYLOGUJ') {
                _this.authService.logout();
            }
        });
    };
    ProfileContainerComponent.prototype.signout = function () {
        this.authService.logout();
    };
    ProfileContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profileContainer',
            template: __webpack_require__("./src/app/profileContainer/profileContainer.component.html"),
            styles: [__webpack_require__("./src/app/profileContainer/profileContainer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], ProfileContainerComponent);
    return ProfileContainerComponent;
}());



/***/ }),

/***/ "./src/app/profileMenu/profileMenu.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  .profileBtn {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n.profileBtn {\n  position: relative;\n  display: inline;\n}\n\n.profileBtn:hover {\n  display: block;\n}\n\n#profileBtn {\n  padding: 11px;\n  float: right;\n  margin-right: 10px;\n}\n\n#profileBtn:hover, #profileBtn:focus {\n  background-color: #53A2BE;\n  padding: 11px;\n  margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/profileMenu/profileMenu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileBtn\">\n  <img id=\"profileBtn\" routerLink=\"profile\" src=\"assets/user.png\">\n</div>\n"

/***/ }),

/***/ "./src/app/profileMenu/profileMenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileMenuComponent = /** @class */ (function () {
    function ProfileMenuComponent() {
    }
    ProfileMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profileMenu',
            template: __webpack_require__("./src/app/profileMenu/profileMenu.html"),
            styles: [__webpack_require__("./src/app/profileMenu/profileMenu.css")]
        })
    ], ProfileMenuComponent);
    return ProfileMenuComponent;
}());



/***/ }),

/***/ "./src/app/searchBar/searchBar.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1000px) {\n  #navbarForm {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n#navbarForm {\n  float: right;\n  margin-right: 1%;\n  margin-top: 15px;\n}\n\n#navbarSearch {\n  color: white;\n  background-color: #53A2BE;\n}\n\n#navbarSearch::-webkit-input-placeholder {\n  color: white;\n}\n\n#navbarSearch:-ms-input-placeholder {\n  color: white;\n}\n\n#navbarSearch::-ms-input-placeholder {\n  color: white;\n}\n\n#navbarSearch::placeholder {\n  color: white;\n}\n\n#searchBtn img {\n  height: 30px;\n  width: 30px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/searchBar/searchBar.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\" id=\"navbarForm\" (keydown)=\"hitEnter($event)\">\n  <input class=\"form-control mr-sm-2\" id=\"navbarSearch\" type=\"search\" placeholder=\"Search articles\" aria-label=\"Search\" (input)=\"sendTag($event)\">\n  <a [routerLink]=\"['/search', searchTag]\" id=\"searchBtn\">\n    <img src=\"assets/search.png\">\n  </a>\n</form>\n"

/***/ }),

/***/ "./src/app/searchBar/searchBar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.sendTag = function (event) {
        this.searchTag = event.target.value;
    };
    SearchComponent.prototype.hitEnter = function (event) {
        if (event.keyCode == 13) {
            document.getElementById("searchBtn").click();
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'searchBar',
            template: __webpack_require__("./src/app/searchBar/searchBar.html"),
            styles: [__webpack_require__("./src/app/searchBar/searchBar.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchContainer/searchContainer.css":
/***/ (function(module, exports) {

module.exports = "#info{\n  font-size: 1vw;\n  padding: 0.6vw;\n  padding-left: 5vw;\n}\n.special{\n  color: #008AA8;\n  font-size: 1.5vw;\n}\n"

/***/ }),

/***/ "./src/app/searchContainer/searchContainer.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"info\">You are looking for:<span class=\"special\"> {{searchTag}} </span>. Found<span class=\"special\"> {{articles.length}} </span>articles.</div>\n<article [articleFromArray]=articles[i]  *ngFor=\"let article of articles; let i = index\" [articleId]=\"i\"></article>\n"

/***/ }),

/***/ "./src/app/searchContainer/searchContainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_news__ = __webpack_require__("./src/app/logic/news.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchContainerComponent = /** @class */ (function () {
    function SearchContainerComponent(route) {
        this.route = route;
        this.newsx = new __WEBPACK_IMPORTED_MODULE_2__logic_news__["a" /* NewsProvider */]();
    }
    SearchContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.searchTag = params['tag'];
            _this.articles = _this.newsx.searchArticle(_this.searchTag);
        });
    };
    SearchContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'searchContainer',
            template: __webpack_require__("./src/app/searchContainer/searchContainer.html"),
            styles: [__webpack_require__("./src/app/searchContainer/searchContainer.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchContainerComponent);
    return SearchContainerComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.css":
/***/ (function(module, exports) {

module.exports = "* {-webkit-box-sizing: border-box;box-sizing: border-box;}\n\nbody {font-family: Verdana, sans-serif;}\n\n.slideshow-container {\n  width: 100%;\n  height: 20vw;\n  position: relative;\n  margin: 0vw auto 1vw auto;\n  padding: 2%;\n  background-color: #00506D;\n}\n\n.mySlides {\n  display: none;\n  /*font-size: 20px;*/\n}\n\n.dots {\n  text-align: center;\n  margin-bottom: 2.5vw;\n}\n\n.dot {\n  height: 0.8vw;\n  width: 0.8vw;\n  margin: 0 0.1vw;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-transition: background-color 0.6s ease;\n  transition: background-color 0.6s ease;\n}\n\n.first {display: block;}\n\n.active {\n  background-color: #717171;\n}\n\n\n"

/***/ }),

/***/ "./src/app/slider/slider.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slideshow-container\">\n  <div class=\"mySlides first w3-animate-opacity\">\n    <sliderArticle [article]=articles[0]></sliderArticle>\n  </div>\n  <div class=\"mySlides w3-animate-opacity\">\n    <sliderArticle [article]=articles[1]></sliderArticle>\n  </div>\n  <div class=\"mySlides w3-animate-opacity\">\n    <sliderArticle [article]=articles[2]></sliderArticle>\n  </div>\n  <div class=\"mySlides w3-animate-opacity\">\n    <sliderArticle [article]=articles[3]></sliderArticle>\n  </div>\n  <div class=\"mySlides w3-animate-opacity\">\n    <sliderArticle [article]=articles[4]></sliderArticle>\n  </div>\n</div>\n\n<div class=\"dots\">\n  <span class=\"dot active\"></span>\n  <span class=\"dot\"></span>\n  <span class=\"dot\"></span>\n  <span class=\"dot\"></span>\n  <span class=\"dot\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/slider/slider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_news__ = __webpack_require__("./src/app/logic/news.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.slideIndex = 1;
        this.newsx = new __WEBPACK_IMPORTED_MODULE_1__logic_news__["a" /* NewsProvider */]();
    }
    SliderComponent.prototype.showSlides = function () {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (var i_1 = 0; i_1 < slides.length; i_1++) {
            slides[i_1].style.display = "none";
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {
            this.slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    };
    SliderComponent.prototype.ngOnInit = function () {
        this.articles = this.newsx.getArticles(6);
    };
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slider',
            template: __webpack_require__("./src/app/slider/slider.html"),
            styles: [__webpack_require__("./src/app/slider/slider.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());

window.addEventListener('load', function () {
    var slider = new SliderComponent();
    window.setInterval(function () { return slider.showSlides(); }, 6000);
});


/***/ }),

/***/ "./src/app/sliderArticle/sliderArticle.css":
/***/ (function(module, exports) {

module.exports = "* {-webkit-box-sizing: border-box;box-sizing: border-box;}\n\nbody {font-family: Verdana, sans-serif;}\n\n.imageContainer {\n  position: absolute;\n  top: 0;\n  left: 1%;\n}\n\n.imageContainer img {\n  width: 25.7vw;\n  height: 16.8vw;\n  max-height: 85%;\n  display: block;\n  margin-top: 6%;\n  margin-bottom: auto;\n  border: 3px solid white;\n  border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  vertical-align: center;\n}\n\n.textShadow {\n  position: absolute;\n  top: 5%;\n  left: 42%;\n  width: 57%;\n  height: 89%;\n  border-radius: 10px;\n  background-color: rgba(255,255,255,0.4);\n}\n\n.title {\n  position: absolute;\n  font-weight: 700;\n  height: 54%;\n  width: 100%;\n  color: white;\n  text-align: center;\n}\n\n.title div {\n  position: absolute;\n  bottom: 0;\n  display: table-cell;\n  vertical-align: bottom;\n  font-size: 1.5vw;\n}\n\n.description {\n  position: absolute;\n  font-size: 0.9vw;\n  height: 37%;\n  max-height: 37%;\n  color: white;\n  text-align: center;\n  top: 10.5vw;\n  width: 100%;\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/sliderArticle/sliderArticle.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imageContainer\">\n  <img src=\"{{sliderArticle.urlToImg}}\" alt=\"HTML5\">\n</div>\n<div class=\"textShadow\">\n  <div class=\"title\">\n    <div>{{sliderArticle.title}}</div>\n  </div>\n  <div class=\"description\">\n    <div>{{sliderArticle.description}}</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sliderArticle/sliderArticle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_news__ = __webpack_require__("./src/app/logic/news.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_article__ = __webpack_require__("./src/app/logic/article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderArticleComponent = /** @class */ (function () {
    function SliderArticleComponent() {
        this.newsx = new __WEBPACK_IMPORTED_MODULE_1__logic_news__["a" /* NewsProvider */]();
    }
    SliderArticleComponent.prototype.ngOnChanges = function (chang) {
        this.sliderArticle = chang.sliderArticle.currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('article'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__logic_article__["a" /* Article */])
    ], SliderArticleComponent.prototype, "sliderArticle", void 0);
    SliderArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sliderArticle',
            template: __webpack_require__("./src/app/sliderArticle/sliderArticle.html"),
            styles: [__webpack_require__("./src/app/sliderArticle/sliderArticle.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderArticleComponent);
    return SliderArticleComponent;
}());



/***/ }),

/***/ "./src/app/userData/userData.css":
/***/ (function(module, exports) {

module.exports = "#userDataContent {\n  width: 96%;\n  height: 22vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2vw;\n  border-bottom: 1px solid lightgray;\n  /*background-color: #1c94c4;*/\n}\n\nlabel {\n  text-align: right;\n  font-size: 0.9vw;\n}\n\n.leftContent {\n  float: left;\n  width: 14vw;\n  height: 20vw;\n  margin-left: 2%;\n  border-right: 1px solid gray;\n  /*background-color: #6FB1C8;*/\n}\n\n#userImage {\n  width: 7vw;\n  height: 7vw;\n  margin-left: 3.5vw;\n  margin-top: 5vw;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n#username {\n  font-weight: 600;\n  font-size: 1.2vw;\n  text-align: center;\n}\n\nh5 {\n  display: inline-block;\n  font-size: 1vw;\n  font-weight: 700;\n  margin-left: 1.5vw;\n  margin-bottom: 0.8vw;\n}\n\n.form-control {\n  font-size: 0.9vw;\n}\n\n.dl .col-sm-2.col-form-label {\n  padding-top: 0;\n}\n\n.form-group.row {\n  height: 2.5vw;\n}\n\n#userSubmit {\n  float: right;\n  margin-top: 1vw;\n  border: none;\n  margin-right: 6.2vw;\n  color: white;\n  height: 2vw;\n  font-weight: 600;\n  -webkit-box-shadow: 0.1vw 1vw #000;\n  box-shadow: 0 0.1vw 5px #888888;\n  background-color: #FF8080;\n}\n\n#userSubmit:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/userData/userData.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"userDataContent\">\n  <div class=\"leftContent\">\n    <img id=\"userImage\" src=\"assets/user_color.png\" alt=\"user_image\">\n    <h3 id=\"username\">janek99</h3>\n  </div>\n\n  <form id=\"userDataForm\">\n    <h5>User data</h5>\n    <div class=\"form-group row\">\n      <label for=\"inputName\" class=\"col-sm-2 col-form-label\">First name</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputSurname\" class=\"col-sm-2 col-form-label\">Last name</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"inputSurname\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-group row dl\">\n      <label for=\"inputUsername\" class=\"col-sm-2 col-form-label\">Username</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"\" disabled>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputEmail\" class=\"col-sm-2 col-form-label\">E-mail</label>\n      <div class=\"col-sm-4\">\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"\" disabled>\n      </div>\n    </div>\n  </form>\n  <button type=\"submit\" class=\"btn btn-light\" form=\"userDataForm\" id=\"userSubmit\">SAVE</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/userData/userData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserDataComponent = /** @class */ (function () {
    function UserDataComponent() {
    }
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'userData',
            template: __webpack_require__("./src/app/userData/userData.html"),
            styles: [__webpack_require__("./src/app/userData/userData.css")]
        })
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.css":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1300px) {\n  #weatherContainer {\n    visibility: hidden;\n  }\n}\n\n#weatherContainer {\n  width: 27%;\n  max-width: 300px;\n  max-height: 19vw;\n  position: absolute;\n  right: -27%;\n  top: 0;\n  padding-bottom: 1vw;\n  -webkit-box-shadow: 0 3px 10px #888888;\n          box-shadow: 0 3px 10px #888888;\n  background-color: #9ECBDA;\n}\n\n#top {\n  padding-top: 1vw;\n  padding-bottom: 1vw;\n}\n\n#top h3 {\n  text-align: center;\n  font-size: 1.8vw;\n  font-weight: 700;\n  margin-top: 0;\n  color: #00506D;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n#top p {\n  margin: 0;\n}\n\n#dateCity {\n  text-align: center;\n  font-size: 0.8vw;\n  font-weight: 600;\n  color: #00506D;\n}\n\n#middle {\n  padding-top: 0.6vw;\n  padding-bottom: 1.1vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1vw;\n  width: 95%;\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#weatherImage {\n  width: 4.5vw;\n  height: 4.5vw;\n  float: left;\n  margin-left: 5%;\n  margin-bottom: 20px;\n  -webkit-filter: drop-shadow(2px 3px 2px gray);\n          filter: drop-shadow(2px 3px 2px gray);\n}\n\n#middle h2 {\n  margin: 0;\n}\n\n#temperature {\n  text-align: center;\n  vertical-align: baseline;\n  margin-top: 7px;\n  margin-bottom: 0;\n  font-size: 2.5vw;\n  font-weight: 700;\n  color: #333333;\n}\n\n#description {\n  text-align: center;\n  margin: 0;\n  font-size: 1.1vw;\n  font-weight: 600;\n  color: #333333;\n}\n\n.weatherInfo {\n  clear: both;\n  margin: 0;\n  padding: 0;\n  margin-left: 7%;\n  font-size: 0.9vw;\n}\n\n.weatherInfo span {\n  font-weight: 600;\n}\n"

/***/ }),

/***/ "./src/app/weather/weather.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"weatherContainer\">\n  <div id=\"top\">\n    <h3>Current weather</h3>\n    <p id=\"dateCity\"><date-pipe></date-pipe>, {{weather.name}}</p>\n  </div>\n  <div id=\"middle\">\n    <img src=\"{{weather.icon}}\" id=\"weatherImage\">\n    <h2 id=\"temperature\">{{weather.temp}}°C</h2>\n    <h6 id=\"description\">{{weather.description}}</h6>\n  </div>\n  <p class=\"weatherInfo\" id=\"wind\">Wind speed: <span>{{weather.speed}} m/s</span></p>\n  <p class=\"weatherInfo\" id=\"pressure\">Pressure: <span>{{weather.pressure}} hPa</span></p>\n  <p class=\"weatherInfo\" id=\"humidity\">Humidity: <span>{{weather.humidity}}%</span></p>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeatherComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_weatherApi__ = __webpack_require__("./src/app/logic/weatherApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
        this.weatherx = new __WEBPACK_IMPORTED_MODULE_1__logic_weatherApi__["a" /* WeatherProvider */]();
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.weather = this.weatherx.getWeather();
        // console.log(this.weather.temp);
        // console.log(this.weather.name);
        // console.log(this.weather.speed);
        // console.log(this.weather.pressure);
        // console.log(this.weather.humidity);
        // console.log(this.weather.description);
        // console.log(this.weather.icon);
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'weather',
            template: __webpack_require__("./src/app/weather/weather.html"),
            styles: [__webpack_require__("./src/app/weather/weather.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());

var DatePipeComponent = /** @class */ (function () {
    function DatePipeComponent() {
        this.today = Date.now();
    }
    DatePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-pipe',
            template: "<span>{{today|date:'dd.MM.yyyy'}}</span>"
        })
    ], DatePipeComponent);
    return DatePipeComponent;
}());



/***/ }),

/***/ "./src/app/weatherChoice/weatherChoice.css":
/***/ (function(module, exports) {

module.exports = "#weatherChoiceContent {\n  width: 96%;\n  height: 26vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2vw;\n  border-bottom: 1px solid lightgray;\n  /*background-color: #00FFFF;*/\n}\n\nh3 {\n  font-weight: 600;\n  font-size: 1.2vw;\n  text-align: center;\n}\n\nh5 {\n  display: block;\n  font-size: 1vw;\n  font-weight: 700;\n  margin-left: 1.5vw;\n  margin-top: 2vw;\n  margin-bottom: 0.8vw;\n}\n\n.leftContent {\n  float: left;\n  width: 14vw;\n  height: 24vw;\n  margin-left: 2%;\n  border-right: 1px solid gray;\n  /*background-color: #6FB1C8;*/\n}\n\n#weatherImage {\n  width: 9vw;\n  height: 8vw;\n  margin-left: 2.5vw;\n  margin-top: 4.2vw;\n}\n\n.rightContent {\n  float: left;\n  height: 20vw;\n  /*background-color: #1c94c4;*/\n}\n\n.first {\n  margin-left: 1.5vw;\n}\n\n.form-check-label {\n  font-size: 1.1vw;\n}\n\n.form-group.row {\n  height: 2.5vw;\n  margin-top: 1.3vw;\n  margin-left: 0.4vw;\n}\n\n.form-group.row label {\n  text-align: right;\n  font-size: 0.9vw;\n}\n\n.custom-select {\n  font-size: 0.9vw;\n}\n\n#weatherSubmit {\n  float: left;\n  margin-top: 0.5vw;\n  border: none;\n  margin-left: 36vw;\n  color: white;\n  height: 2vw;\n  font-weight: 600;\n  -webkit-box-shadow: 0.1vw 1vw #000;\n  box-shadow: 0 0.1vw 5px #888888;\n  background-color: #FF8080;\n}\n\n#weatherSubmit:hover {\n  background-color: #DE6F6F;\n  text-shadow: 1px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/weatherChoice/weatherChoice.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"weatherChoiceContent\">\n  <div class=\"leftContent\">\n    <img id=\"weatherImage\" src=\"assets/thermometer.png\" alt=\"weather_image\">\n    <h3>Weather</h3>\n  </div>\n\n  <div class=\"rightContent\">\n    <form id=\"weatherChoiceForm\">\n      <h5>Unit</h5>\n      <div class=\"form-check-inline first\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"units\" id=\"standardInput\" value=\"standard\">\n          Standard\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"units\" id=\"metricInput\" value=\"metric\" checked>\n          Metric\n        </label>\n      </div>\n      <div class=\"form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"units\" id=\"imperialInput\" value=\"imperial\">\n          Imperial\n        </label>\n      </div>\n      <h5>City</h5>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-4\">\n          <select class=\"custom-select\" id=\"selectCity\">\n            <option value=\"776069\">Białystok</option>\n            <option value=\"7530814\">Bydgoszcz</option>\n            <option value=\"7530986\">Bytom</option>\n            <option value=\"7530964\">Częstochowa</option>\n            <option value=\"7531646\">Ełk</option>\n            <option value=\"7531002\">Gdańsk</option>\n            <option value=\"3099424\">Gdynia</option>\n            <option value=\"3096472\">Katowice</option>\n            <option value=\"7532538\">Koszalin</option>\n            <option value=\"3094802\">Kraków</option>\n            <option value=\"7530993\">Leszno</option>\n            <option value=\"765876\">Lublin</option>\n            <option value=\"3093133\">Łódź</option>\n            <option value=\"7531264\">Malbork</option>\n            <option value=\"7532585\">Nowy Sącz</option>\n            <option value=\"763166\">Olsztyn</option>\n            <option value=\"7531521\">Oświęcim</option>\n            <option value=\"7530858\">Poznań</option>\n            <option value=\"7532212\">Radom</option>\n            <option value=\"7530790\">Rybnik</option>\n            <option value=\"7530819\">Rzeszów</option>\n            <option value=\"3083829\">Szczecin</option>\n            <option value=\"7532503\">Tarnobrzeg</option>\n            <option value=\"6695624\" selected>Warszawa</option>\n            <option value=\"3081368\">Wrocław</option>\n            <option value=\"7532192\">Zamość</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <button type=\"submit\" class=\"btn btn-light\" form=\"weatherChoiceForm\" id=\"weatherSubmit\">SAVE</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/weatherChoice/weatherChoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherChoiceComponent = /** @class */ (function () {
    function WeatherChoiceComponent() {
    }
    WeatherChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'weatherChoice',
            template: __webpack_require__("./src/app/weatherChoice/weatherChoice.html"),
            styles: [__webpack_require__("./src/app/weatherChoice/weatherChoice.css")]
        })
    ], WeatherChoiceComponent);
    return WeatherChoiceComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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