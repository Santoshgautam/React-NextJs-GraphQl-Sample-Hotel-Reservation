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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/ReservationList.js":
/*!***************************************!*\
  !*** ./components/ReservationList.js ***!
  \***************************************/
/*! exports provided: allReservations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReservations", function() { return allReservations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReservationList; });
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
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    reservations {\n      _id\n      name\n      hotelName\n      arrivalDate\n      departureDate\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var allReservations = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function ReservationList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: allReservations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: "Error loading reservations.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3196818277" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3196818277" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3196818277" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3196818277",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-3196818277",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3196818277" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/booking",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Book Hotel"), " Your Reservations ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Available Hotel")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3196818277" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3196818277",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3196818277" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-3196818277" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Hi ", reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Hotel Name:", reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "ChekIn:"), " ", reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "CheckOut:"), reservation.departureDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-3196818277",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Modify"));
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3196818277",
      css: "h1.jsx-3196818277{font-size:20px;}input.jsx-3196818277{display:block;margin-bottom:10px;}.panel-login.jsx-3196818277{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-3196818277{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-3196818277{border:2px solid gray;height:300px;width:80%;margin-left:10%;text-align:center;float:left;margin-top:1%;border-radius:5px;background-color:#f2f2f2;padding:20px;}.card_img.jsx-3196818277{padding:10px height:100px;width:100px;margin-top:10px;}.btn-primary.jsx-3196818277{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-3196818277{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.panel-body.jsx-3196818277{border-radius:5px;background-color:#f2f2f2;padding:20px;}span.jsx-3196818277{margin:1%;}button.jsx-3196818277{height:50px;width:150px;border-radius:15px;margin:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RDRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFhVixBQUtELEFBV0EsQUFLSyxBQU1yQixBQUVjLFVBRmIsRUFyQmUsQUFXRyxBQWFMLEVBNURRLEFBWUcsQ0FmeEIsR0FPYSxBQWdEYyxJQWxDWCxFQW1CTSxBQXdCRixFQTlCTCxDQWlCVSxFQTNDNEIsSUFKckQsRUFrQmEsQ0FOTyxFQW1CRCxLQU1KLEFBZUEsQUFTSixFQTFDUSxRQTJDbkIsQ0FqRG1CLEFBbUJuQixDQU1rQixDQWVsQixLQWpDcUIsU0FtQkMsRUF6QnRCLEtBa0NBLEVBM0JjLENBaEJvQyxTQW1DMUIsQ0FsQlAsY0FDSyxrQkFDTyxNQWxCZ0IsV0FtQzFCLFFBaEJGLFFBa0JqQixLQWpCQSxXQW5CZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE5hdmJhcixOYXYsTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5cbmV4cG9ydCBjb25zdCBhbGxSZXNlcnZhdGlvbnMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICByZXNlcnZhdGlvbnMge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICBob3RlbE5hbWVcbiAgICAgIGFycml2YWxEYXRlXG4gICAgICBkZXBhcnR1cmVEYXRlXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmF0aW9uTGlzdCAoKSB7ICBcbiAgcmV0dXJuKFxuICAgIDxRdWVyeSBxdWVyeT17YWxsUmVzZXJ2YXRpb25zfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyByZXNlcnZhdGlvbnMuJyAvPlxuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZ1wiPkJvb2sgSG90ZWw8L0xpbms+IFlvdXIgUmVzZXJ2YXRpb25zIDxMaW5rIGhyZWY9XCIvXCI+QXZhaWxhYmxlIEhvdGVsPC9MaW5rPjwvaDE+IFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucmVzZXJ2YXRpb25zLm1hcCgocmVzZXJ2YXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZ2lkczdmL2hvbGlkYXktSW5uLU5ldy1Zb3JrLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SGkge3Jlc2VydmF0aW9uLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvdGVsIE5hbWU6e3Jlc2VydmF0aW9uLmhvdGVsTmFtZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+Q2hla0luOjwvYj4ge3Jlc2VydmF0aW9uLmFycml2YWxEYXRlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkNoZWNrT3V0OjwvYj57cmVzZXJ2YXRpb24uZGVwYXJ0dXJlRGF0ZSB9PC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TW9kaWZ5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNDE1ZDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjElO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRjVGOUM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmstdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxJVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3196818277",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }));
  });
}

/***/ }),

/***/ "./pages/reservation.js":
/*!******************************!*\
  !*** ./pages/reservation.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ReservationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ReservationList */ "./components/ReservationList.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/pages/reservation.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReservationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/reservation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/reservation.js */"./pages/reservation.js");


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
//# sourceMappingURL=reservation.js.map