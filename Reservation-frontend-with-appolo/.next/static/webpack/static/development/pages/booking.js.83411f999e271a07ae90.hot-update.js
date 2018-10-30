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
      className: "jsx-1009492301" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1009492301" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1009492301" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1009492301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      className: "jsx-1009492301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1009492301" + " " + "panel-heading",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
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
      className: "jsx-1009492301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      className: "jsx-1009492301",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1009492301",
      css: "h1.jsx-1009492301{font-size:20px;}input.jsx-1009492301{display:block;margin-bottom:10px;}.panel-login.jsx-1009492301{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-1009492301{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}input[type=text].jsx-1009492301,input[type=date].jsx-1009492301 select.jsx-1009492301{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-1009492301{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-1009492301:hover{background-color:#45a049;}div.jsx-1009492301{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1N1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBRzhCLEFBR0QsQUFJSSxBQVFKLEFBTUgsQUFTQSxBQVdjLEFBSVAsV0F2QkEsQUFTTyxHQTNCTixBQVlHLENBZnhCLEdBT2EsQUFzQ2MsT0FKN0IsSUFqQ3VELEFBY3RDLElBbEJmLEdBWW9CLEFBZU4sTUFSUyxDQXVCUixLQWRLLE1BZkQsRUE4QnJCLE9BdkIwQixHQVNULE1BZmYsT0FnQmMsQ0F6Qm9DLEtBZ0I5QixNQVVBLFlBVEksTUFVUCxlQUNuQixDQVZBLEdBakIrQywyQ0FDOUIsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9TdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBhbGxSZXNlcnZhdGlvbnMgfSBmcm9tICcuL1Jlc2VydmF0aW9uTGlzdCdcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdCAoKSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtbG9naW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KX0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QXZhaWxhYmxlIEhvdGVsPC9MaW5rPiBDcmVhdGUgUmVzZXJ2YXRpb24gPExpbmsgaHJlZj1cIi9yZXNlcnZhdGlvblwiPllvdXIgUmVzZXJ2YXRpb248L0xpbms+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SG90ZWwgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvdGVsTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgSG90ZWwgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QXJyaXZhbCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiYXJyaXZhbERhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFycml2YWwgZGF0ZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVwYXJ0dXJlIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkZXBhcnR1cmVEYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBEZXBhcnR1cmUgZGF0ZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFuZWwtbG9naW4ge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDQxNWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWRhdGVdIHNlbGVjdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxici8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQsIGNsaWVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXRcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKGZvcm0pXG5cbiAgY29uc3QgUmVzZXJ2YXRpb25JbnB1dCA9IHtcbiAgICBcImlucHV0XCI6IHtcbiAgICAgIFwiYXJyaXZhbERhdGVcIjogZm9ybURhdGEuZ2V0KCdhcnJpdmFsRGF0ZScpLFxuICAgICAgXCJkZXBhcnR1cmVEYXRlXCI6IGZvcm1EYXRhLmdldCgnZGVwYXJ0dXJlRGF0ZScpLFxuICAgICAgXCJob3RlbE5hbWVcIjogZm9ybURhdGEuZ2V0KCdob3RlbE5hbWUnKSxcbiAgICAgIFwibmFtZVwiOiBmb3JtRGF0YS5nZXQoJ25hbWUnKVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ucmVzZXQoKVxuXG4gIGNsaWVudC5tdXRhdGUoe1xuICAgIG11dGF0aW9uOiBncWxgXG4gICAgICBtdXRhdGlvbiBjcmVhdGVSZXNlcnZhdGlvbigkaW5wdXQ6IFJlc2VydmF0aW9uSW5wdXQpe1xuICAgICAgICBjcmVhdGVSZXNlcnZhdGlvbihpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgaG90ZWxOYW1lXG4gICAgICAgICAgYXJyaXZhbERhdGVcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVwYXJ0dXJlRGF0ZVxuICAgICAgICAgIF9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IFJlc2VydmF0aW9uSW5wdXQsXG4gICAgdXBkYXRlOiAocHJveHksIHsgZGF0YTogeyBjcmVhdGVSZXNlcnZhdGlvbiB9IH0pID0+IHtcbiAgICAgIGxldCBkYXRhID0gcHJveHkucmVhZFF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGFsbFJlc2VydmF0aW9ucyxcbiAgICAgIH0pXG4gICAgICBsZXQgcmVzZXJ2YXRpb25zID0gZGF0YS5yZXNlcnZhdGlvbnNcblxuICAgICAgcHJveHkud3JpdGVRdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBhbGxSZXNlcnZhdGlvbnMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5yZXNlcnZhdGlvbnMsXG4gICAgICAgICAgcmVzZXJ2YXRpb25zOiBbIGNyZWF0ZVJlc2VydmF0aW9uLCAuLi5kYXRhLnJlc2VydmF0aW9uc11cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG4iXX0= */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/Submit.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1009492301",
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
//# sourceMappingURL=booking.js.83411f999e271a07ae90.hot-update.js.map