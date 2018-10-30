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
      className: "jsx-3814162929" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3814162929" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3814162929" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3814162929" + " " + "panel-heading",
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
      className: "jsx-3814162929",
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
      className: "jsx-3814162929",
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
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Hotel name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "hotelName",
      placeholder: "Enter Hotel name",
      required: true,
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Arrival Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      name: "arrivalDate",
      placeholder: "Enter Arrival date",
      required: true,
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      controlId: "formControlsText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Departure Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      name: "departureDate",
      placeholder: "Enter Departure date",
      required: true,
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3814162929",
      css: ".jsx-3814162929{input[type=text:select {              width: 100%;              padding: 12px 20px;              margin: 8px 0;              display: inline-block;              border: 1px solid #ccc;              border-radius: 4px;              box-sizing: border-box;          }          input[type=submit] {              width: 100%;              background-color: #4CAF50;              color: white;              padding: 14px 20px;              margin: 8px 0;              border: none;              border-radius: 4px;              cursor: pointer;          }                    input[type=submit]:hover {              background-color: #45a049;          }                    div {              border-radius: 5px;              background-color: #f2f2f2;              padding: 20px;          };}h1.jsx-3814162929{font-size:20px;}input.jsx-3814162929{display:block;margin-bottom:10px;}.panel-login.jsx-3814162929{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-3814162929{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1N1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBRzhCLEFBR0QsQUFJSSxBQVFKLEFBa0NsQixjQTdDdUIsQUFZRyxDQWZ4QixHQU9hLFdBQ3dDLElBSnJELEdBWW9CLGtCQUNELGtCQUNuQixRQVRrRCxnREFDTCwyQ0FDOUIsYUFDZix5bEJBb0NEIiwiZmlsZSI6Ii9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1N1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IGFsbFJlc2VydmF0aW9ucyB9IGZyb20gJy4vUmVzZXJ2YXRpb25MaXN0J1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBDb250cm9sTGFiZWwsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0ICgpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1sb2dpblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZXZlbnQgPT4gaGFuZGxlU3VibWl0KGV2ZW50LCBjbGllbnQpfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5BdmFpbGFibGUgSG90ZWw8L0xpbms+IENyZWF0ZSBSZXNlcnZhdGlvbiA8TGluayBocmVmPVwiL3Jlc2VydmF0aW9uXCI+WW91ciBSZXNlcnZhdGlvbjwvTGluaz5cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ib3RlbCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaG90ZWxOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBIb3RlbCBuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5BcnJpdmFsIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJhcnJpdmFsRGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXJyaXZhbCBkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXBhcnR1cmUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRlcGFydHVyZURhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIERlcGFydHVyZSBkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYW5lbC1sb2dpbiB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwNDE1ZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dCBzZWxlY3Qge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGV2ZW50LCBjbGllbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YShmb3JtKVxuXG4gIGNvbnN0IFJlc2VydmF0aW9uSW5wdXQgPSB7XG4gICAgXCJpbnB1dFwiOiB7XG4gICAgICBcImFycml2YWxEYXRlXCI6IGZvcm1EYXRhLmdldCgnYXJyaXZhbERhdGUnKSxcbiAgICAgIFwiZGVwYXJ0dXJlRGF0ZVwiOiBmb3JtRGF0YS5nZXQoJ2RlcGFydHVyZURhdGUnKSxcbiAgICAgIFwiaG90ZWxOYW1lXCI6IGZvcm1EYXRhLmdldCgnaG90ZWxOYW1lJyksXG4gICAgICBcIm5hbWVcIjogZm9ybURhdGEuZ2V0KCduYW1lJylcbiAgICB9XG4gIH1cblxuICBmb3JtLnJlc2V0KClcblxuICBjbGllbnQubXV0YXRlKHtcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgbXV0YXRpb24gY3JlYXRlUmVzZXJ2YXRpb24oJGlucHV0OiBSZXNlcnZhdGlvbklucHV0KXtcbiAgICAgICAgY3JlYXRlUmVzZXJ2YXRpb24oaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgICAgIGhvdGVsTmFtZVxuICAgICAgICAgIGFycml2YWxEYXRlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlcGFydHVyZURhdGVcbiAgICAgICAgICBfaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiBSZXNlcnZhdGlvbklucHV0LFxuICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlUmVzZXJ2YXRpb24gfSB9KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHByb3h5LnJlYWRRdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBhbGxSZXNlcnZhdGlvbnMsXG4gICAgICB9KVxuICAgICAgbGV0IHJlc2VydmF0aW9ucyA9IGRhdGEucmVzZXJ2YXRpb25zXG5cbiAgICAgIHByb3h5LndyaXRlUXVlcnkoe1xuICAgICAgICBxdWVyeTogYWxsUmVzZXJ2YXRpb25zLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4ucmVzZXJ2YXRpb25zLFxuICAgICAgICAgIHJlc2VydmF0aW9uczogWyBjcmVhdGVSZXNlcnZhdGlvbiwgLi4uZGF0YS5yZXNlcnZhdGlvbnNdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuIl19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Submit.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3814162929",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
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
//# sourceMappingURL=booking.js.719bdf739cce4ecd9a99.hot-update.js.map