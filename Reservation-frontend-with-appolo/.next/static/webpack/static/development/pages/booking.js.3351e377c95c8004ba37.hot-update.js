webpackHotUpdate("static/development/pages/booking.js",{

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Submit; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReservationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReservationList */ "./components/ReservationList.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Submit.js";



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      mutation createReservation($input: ReservationInput){\n        createReservation(input: $input) {\n          hotelName\n          arrivalDate\n          name\n          departureDate\n          _id\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function Submit() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-184675431" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-184675431" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-184675431" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-184675431" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Available Hotel"), " Create Reservation ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/reservation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Your Reservation")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      placeholder: "Enter name",
      required: true,
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Hotel name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "hotelName",
      placeholder: "Enter Hotel name",
      required: true,
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Arrival Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      name: "arrivalDate",
      placeholder: "Enter Arrival date",
      required: true,
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ControlLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Departure Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      name: "departureDate",
      placeholder: "Enter Departure date",
      required: true,
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Submit"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "184675431",
      css: "h1.jsx-184675431{font-size:20px;}input.jsx-184675431{display:block;margin-bottom:10px;}.panel-login.jsx-184675431{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-184675431{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}input[type=text].jsx-184675431,select.jsx-184675431{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-184675431{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-184675431:hover{background-color:#45a049;}div.jsx-184675431{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1N1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBRzhCLEFBR0QsQUFJSSxBQVFKLEFBTUgsQUFTQSxBQVdjLEFBSVAsV0F2QkEsQUFTTyxHQTNCTixBQVlHLENBZnhCLEdBT2EsQUFzQ2MsT0FKN0IsSUFqQ3VELEFBY3RDLElBbEJmLEdBWW9CLEFBZU4sTUFSUyxDQXVCUixLQWRLLE1BZkQsRUE4QnJCLE9BdkIwQixHQVNULE1BZmYsT0FnQmMsQ0F6Qm9DLEtBZ0I5QixNQVVBLFlBVEksTUFVUCxlQUNuQixDQVZBLEdBakIrQywyQ0FDOUIsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9TdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBhbGxSZXNlcnZhdGlvbnMgfSBmcm9tICcuL1Jlc2VydmF0aW9uTGlzdCdcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdCAoKSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtbG9naW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KX0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QXZhaWxhYmxlIEhvdGVsPC9MaW5rPiBDcmVhdGUgUmVzZXJ2YXRpb24gPExpbmsgaHJlZj1cIi9yZXNlcnZhdGlvblwiPllvdXIgUmVzZXJ2YXRpb248L0xpbms+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5Ib3RlbCBuYW1lPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvdGVsTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgSG90ZWwgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRcIj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPkFycml2YWwgRGF0ZTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJhcnJpdmFsRGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXJyaXZhbCBkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+RGVwYXJ0dXJlIERhdGU8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGVwYXJ0dXJlRGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGVwYXJ0dXJlIGRhdGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFuZWwtaGVhZGluZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0IChldmVudCwgY2xpZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldFxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSlcblxuICBjb25zdCBSZXNlcnZhdGlvbklucHV0ID0ge1xuICAgIFwiaW5wdXRcIjoge1xuICAgICAgXCJhcnJpdmFsRGF0ZVwiOiBmb3JtRGF0YS5nZXQoJ2Fycml2YWxEYXRlJyksXG4gICAgICBcImRlcGFydHVyZURhdGVcIjogZm9ybURhdGEuZ2V0KCdkZXBhcnR1cmVEYXRlJyksXG4gICAgICBcImhvdGVsTmFtZVwiOiBmb3JtRGF0YS5nZXQoJ2hvdGVsTmFtZScpLFxuICAgICAgXCJuYW1lXCI6IGZvcm1EYXRhLmdldCgnbmFtZScpXG4gICAgfVxuICB9XG5cbiAgZm9ybS5yZXNldCgpXG5cbiAgY2xpZW50Lm11dGF0ZSh7XG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgIG11dGF0aW9uIGNyZWF0ZVJlc2VydmF0aW9uKCRpbnB1dDogUmVzZXJ2YXRpb25JbnB1dCl7XG4gICAgICAgIGNyZWF0ZVJlc2VydmF0aW9uKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICBob3RlbE5hbWVcbiAgICAgICAgICBhcnJpdmFsRGF0ZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXBhcnR1cmVEYXRlXG4gICAgICAgICAgX2lkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczogUmVzZXJ2YXRpb25JbnB1dCxcbiAgICB1cGRhdGU6IChwcm94eSwgeyBkYXRhOiB7IGNyZWF0ZVJlc2VydmF0aW9uIH0gfSkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoe1xuICAgICAgICBxdWVyeTogYWxsUmVzZXJ2YXRpb25zLFxuICAgICAgfSlcbiAgICAgIGxldCByZXNlcnZhdGlvbnMgPSBkYXRhLnJlc2VydmF0aW9uc1xuXG4gICAgICBwcm94eS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGFsbFJlc2VydmF0aW9ucyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLnJlc2VydmF0aW9ucyxcbiAgICAgICAgICByZXNlcnZhdGlvbnM6IFsgY3JlYXRlUmVzZXJ2YXRpb24sIC4uLmRhdGEucmVzZXJ2YXRpb25zXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Submit.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-184675431",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  });
}

function handleSubmit(event, client) {
  event.preventDefault();
  var form = event.target;
  var formData = new window.FormData(form);
  var ReservationInput = {
    "input": {
      "arrivalDate": formData.get('arrivalDate'),
      "departureDate": formData.get('departureDate'),
      "hotelName": formData.get('hotelName'),
      "name": formData.get('name')
    }
  };
  form.reset();
  client.mutate({
    mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
    variables: ReservationInput,
    update: function update(proxy, _ref) {
      var createReservation = _ref.data.createReservation;
      var data = proxy.readQuery({
        query: _ReservationList__WEBPACK_IMPORTED_MODULE_4__["allReservations"]
      });
      var reservations = data.reservations;
      proxy.writeQuery({
        query: _ReservationList__WEBPACK_IMPORTED_MODULE_4__["allReservations"],
        data: _objectSpread({}, reservations, {
          reservations: [createReservation].concat(_toConsumableArray(data.reservations))
        })
      });
    }
  });
}

/***/ })

})
//# sourceMappingURL=booking.js.3351e377c95c8004ba37.hot-update.js.map