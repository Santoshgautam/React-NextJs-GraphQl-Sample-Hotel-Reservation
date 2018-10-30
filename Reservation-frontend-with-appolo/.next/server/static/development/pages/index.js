module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/App.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-3354999716",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css",
    rel: "stylesheet",
    className: "jsx-3354999716",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3354999716",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPdUIsQUFLMkIsQUFHVCxBQUlLLEFBR0MsQUFJRCxBQUlLLEFBUU0sQUFJWixTQTFCSyxJQTJCcEIsQ0F2QkEsQUFPa0IsQ0FKQyxVQWdCZ0IsRUF0Qm5DLEdBV0EsRUFKQSw2REFPMkIsTUFTM0IsbUJBUlcsU0FDRyxXQXBCZCxDQXFCZSwwRUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2F2aS9EZXNrdG9wLzM2NTVfYWtzaGF5L1Jlc2VydmF0aW9uLWZyb250ZW5kLXdpdGgtYXBwb2xvL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIC8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/App.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ErrorMessage.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-160792485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "160792485",
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHdUIsY0FDQyxlQUNILFlBQ1MscUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG1lc3NhZ2UgfSkgPT4gKFxuICA8YXNpZGU+XG4gICAge21lc3NhZ2V9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ErrorMessage.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HotelList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Header.js";



function HotelList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1127670528" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1127670528" + " " + "navbar1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://image.ibb.co/ihpr00/logo.png",
    alt: "logo",
    border: "0",
    className: "jsx-1127670528",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "navLink",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1127670528" + " " + "navText1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "     Available Hotels     ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "navLink",
    href: "/booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1127670528" + " " + "navText2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "     Book  Hotel   ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "navLink",
    href: "/reservation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1127670528" + " " + "navText3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "     Your  Reservations   "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1127670528",
    css: ".navbar1.jsx-1127670528{border:1px solid black;padding:10px;font-size:20px;background-color:#49E4CF;color:yellow;border-radius:15px;margin-left:20px;margin-right:20;}.jsx-1127670528,.navText1.jsx-1127670528{color:yellow;margin-left:20;}.navText2.jsx-1127670528{color:green;margin-left:20;}.navText3.jsx-1127670528{color:red;margin-left:20;}.navLink.jsx-1127670528{margin-left:15px;margin-right:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBRzhDLEFBVVgsQUFJRCxBQUlGLEFBS08sVUFKRCxFQUpBLENBSkEsSUFhQyxNQXZCSixFQW9CZCxFQUpBLENBSkEsS0FZQSxHQXZCaUIsZUFDUyx5QkFDWixhQUNNLG1CQUNGLGlCQUNBLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3RlbExpc3QgKCkgeyAgXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyMVwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2locHIwMC9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBib3JkZXI9XCIwXCIgLz5cbiAgICAgICBcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2TGlua1wiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2VGV4dDFcIj4gICAgIEF2YWlsYWJsZSBIb3RlbHMgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPiBcblxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIi9ib29raW5nXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2VGV4dDJcIiA+ICAgICBCb29rICBIb3RlbCAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIi9yZXNlcnZhdGlvblwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdlRleHQzXCI+ICAgICBZb3VyICBSZXNlcnZhdGlvbnMgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcjEge1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNDlFNENGO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAubmF2VGV4dDF7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6eWVsbG93O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9Lm5hdlRleHQye1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9Lm5hdlRleHQze1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2TGlua3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+KVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Header.js */",
    __self: this
  }));
}

/***/ }),

/***/ "./components/HotelList.js":
/*!*********************************!*\
  !*** ./components/HotelList.js ***!
  \*********************************/
/*! exports provided: allHotels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allHotels", function() { return allHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HotelList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    hotels {\n      id\n      name\n      available\n      city\n      cover\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var allHotels = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function HotelList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: allHotels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: "Error loading hotels.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-553567494" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-553567494" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-553567494" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-553567494" + " " + "marquee",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eeV0Sf/1.jpg",
      alt: "1",
      border: "1",
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eSiLSf/2.jpg",
      alt: "2",
      border: "0",
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/fQW77f/3.jpg",
      alt: "3",
      border: "0",
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/cLVjnf/4.jpg",
      alt: "4",
      border: "0",
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-553567494" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Available Hotels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-553567494" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, data.hotels.map(function (hotels, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-553567494" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: hotels.cover,
        className: "jsx-553567494" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-553567494",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-553567494",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, hotels.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-553567494",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, hotels.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-553567494",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Room Ava: ", hotels.available), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-553567494" + " " + "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/booking",
        className: "link-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Book Hotel")));
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "553567494",
      css: "h1.jsx-553567494{font-size:30px;}h2.jsx-553567494{font-size:20px;}h3.jsx-553567494{font-size:15px;}input.jsx-553567494{display:block;margin-bottom:10px;}.panel-login.jsx-553567494{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-553567494{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-553567494{border:2px solid gray;height:400px;width:280px;margin-left:7%;text-align:center;float:left;margin-top:5%;font-size:10px;}.card_img.jsx-553567494{padding:20px height:250px;width:250px;margin-top:10px;margin-left:11px;}.btn-primary.jsx-553567494{height:30px;width:180px;background:#49E4CF;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-553567494{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.container.jsx-553567494{border-radius:5px;background-color:#f2f2f2;padding:20px;}.marquee.jsx-553567494{background-color:#ddd;width:100%;margin:0 auto;overflow:hidden;white-space:nowrap;}.marquee.jsx-553567494 img.jsx-553567494{display:inline-block;font-size:20px;position:relative;left:100%;-webkit-animation:marquee-jsx-553567494 8s linear infinite;animation:marquee-jsx-553567494 8s linear infinite;}.marquee.jsx-553567494:hover img.jsx-553567494{-webkit-animation-play-state:paused;animation-play-state:paused;}.marquee.jsx-553567494 img.jsx-553567494:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s;}.marquee.jsx-553567494 img.jsx-553567494:nth-child(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.marquee.jsx-553567494 img.jsx-553567494:nth-child(3){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.marquee.jsx-553567494 img.jsx-553567494:nth-child(4){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.marquee.jsx-553567494 img.jsx-553567494:nth-child(5){-webkit-animation-delay:3.2s;animation-delay:3.2s;}@-webkit-keyframes marquee-jsx-553567494{0%{left:100%;}100%{left:-100%;}}@keyframes marquee-jsx-553567494{0%{left:100%;}100%{left:-100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDRCLEFBR3VDLEFBR0QsQUFHRSxBQUdILEFBSUksQUFRSixBQU1VLEFBV1YsQUFNRCxBQVdBLEFBS08sQUFLSSxBQU9ELEFBT08sQUFJVCxBQUdFLEFBR0EsQUFHQSxBQUdBLEFBSUwsQUFDQyxVQURBLENBQ0MsQ0F2RFAsQUFXRyxFQTlDRyxBQVlHLENBckJ4QixBQUdBLEFBR0EsR0FPYSxBQStDZ0IsR0FZVixDQTdDSCxBQXNDRCxFQXBCTyxFQVBQLENBa0JVLEVBMUM0QixJQUpyRCxBQXdEa0IsRUF0Q0gsQ0FOSyxBQW1ERSxFQWxDSCxLQU9KLEFBZUUsR0FzQmYsQ0F0RGdCLEFBc0NFLEdBbUJsQixBQUdBLEFBR0EsQUFHQSxJQXhFaUIsQUFpQkMsQUFrQ04sQ0EzQkksQ0FlbEIsTUFoQ3FCLENBc0NFLENBT2tCLEFBSXZDLE1BL0JvQixDQVB0QixDQWpCQSxLQWlDQSxHQTFDa0QsQUFnQnBDLEVBc0NaLE9BcEJzQixFQWpCUCxjQUNDLGVBQ2xCLFFBbEI2QyxXQWtDMUIsZ0JBRW5CLGdCQW5DZSxHQTJEYixVQTFERiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9Ib3RlbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXAsIENvbnRyb2xMYWJlbCwgQnV0dG9uLCBNb2RhbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IGFsbEhvdGVscyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGhvdGVscyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhaWxhYmxlXG4gICAgICBjaXR5XG4gICAgICBjb3ZlclxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3RlbExpc3QgKCkgeyAgXG4gICAgXG4gICAgcmV0dXJuKCAgICAgXG4gICAgICA8UXVlcnkgcXVlcnk9e2FsbEhvdGVsc30+XG4gICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGhvdGVscy4nIC8+XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXJxdWVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2VlVjBTZi8xLmpwZ1wiIGFsdD1cIjFcIiBib3JkZXI9XCIxXCIvPi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZVNpTFNmLzIuanBnXCIgYWx0PVwiMlwiIGJvcmRlcj1cIjBcIi8+LlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9mUVc3N2YvMy5qcGdcIiBhbHQ9XCIzXCIgYm9yZGVyPVwiMFwiLz4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2NMVmpuZi80LmpwZ1wiIGFsdD1cIjRcIiBib3JkZXI9XCIwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+QXZhaWxhYmxlIEhvdGVsczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ob3RlbHMubWFwKChob3RlbHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtob3RlbHMuY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2hvdGVscy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aG90ZWxzLmNpdHl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJvb20gQXZhOiB7aG90ZWxzLmF2YWlsYWJsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYm9va2luZycgY2xhc3NOYW1lPVwibGluay10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgSG90ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNDE1ZDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjclO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX2ltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0OUU0Q0Y7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxOCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGluay10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1hcnF1ZWUgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZTpob3ZlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUgaW1nOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZSBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUgaW1nOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXJxdWVlIGltZzpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZSBpbWc6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyBsZWZ0OiAxMDAlOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgbGVmdDogLTEwMCU7IH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG59Il19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-553567494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }));
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_HotelList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HotelList */ "./components/HotelList.js");
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HotelList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map