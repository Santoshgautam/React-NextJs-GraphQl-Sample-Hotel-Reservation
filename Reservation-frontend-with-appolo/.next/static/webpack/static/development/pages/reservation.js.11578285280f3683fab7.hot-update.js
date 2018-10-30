webpackHotUpdate("static/development/pages/reservation.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
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
      lineNumber: 21
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      message: "Error loading reservations.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#home",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "React-Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      eventKey: 1,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      eventKey: 2,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavDropdown, {
      eventKey: 3,
      title: "Dropdown",
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Action"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Another action"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      divider: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Separated link")))), ";", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-607176727" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Your Reservations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "jumbotron",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-607176727" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, reservation.departureDate, "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        className: "link-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Book Hotel")));
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "607176727",
      css: "h1.jsx-607176727{font-size:20px;}input.jsx-607176727{display:block;margin-bottom:10px;}.panel-login.jsx-607176727{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-607176727{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-607176727{border:2px solid gray;height:400px;width:280px;margin-left:10%;text-align:center;float:left;margin-top:5%;}.card_img.jsx-607176727{padding:10px height:250px;width:250px;margin-top:10px;}.btn-primary.jsx-607176727{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-607176727{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.navbar1.jsx-607176727{border:1px solid black;padding:10px;font-size:20px;background-color:#F5F9C4;color:yellow;border-radius:15px;margin-left:20px;margin-right:20;}.jsx-607176727,.navText1.jsx-607176727{color:yellow;margin-left:20;}.navText2.jsx-607176727{color:green;margin-left:20;}.navText3.jsx-607176727{color:red;margin-left:20;}.navLink.jsx-607176727{margin-left:15px;margin-top:-20px;margin-right:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RTRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFVVixBQUtELEFBV0EsQUFLVSxBQVVYLEFBSUQsQUFJRixBQUtPLFVBSkQsRUFsQ0YsQUFXRyxBQW1CRCxDQUpBLENBM0RJLEFBWUcsQ0FmeEIsRUEyRWtCLENBcEVMLElBY0csQ0ErQkYsQ0FmUSxDQW1DdEIsQ0F6Q2UsQ0FpQlUsQUFvQnpCLENBSkEsQ0F4RHFELElBSnJELENBd0VrQixDQXRESCxDQU5LLEFBcUNILEVBckJFLEtBTUosSUFmSSxHQXNEbkIsQ0F2QjBCLEdBckNQLEFBZ0JuQixDQU1rQixRQWZHLE9BZ0JDLEVBdEJ0QixJQXFDYyxDQU5kLEdBeENrRCxDQWdCcEMsUUFnQlUsQUFlSixHQTlCSCxjQUNqQixFQThCa0IsaUJBQ0EsR0FoRDJCLFdBZ0MxQixFQWlCbkIsY0FmQSxnQkFqQ2UsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5cbmV4cG9ydCBjb25zdCBhbGxSZXNlcnZhdGlvbnMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICByZXNlcnZhdGlvbnMge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICBob3RlbE5hbWVcbiAgICAgIGFycml2YWxEYXRlXG4gICAgICBkZXBhcnR1cmVEYXRlXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmF0aW9uTGlzdCAoKSB7ICBcbiAgcmV0dXJuKFxuICAgIDxRdWVyeSBxdWVyeT17YWxsUmVzZXJ2YXRpb25zfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyByZXNlcnZhdGlvbnMuJyAvPlxuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPE5hdmJhcj5cbiAgPE5hdmJhci5IZWFkZXI+XG4gICAgPE5hdmJhci5CcmFuZD5cbiAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPlJlYWN0LUJvb3RzdHJhcDwvYT5cbiAgICA8L05hdmJhci5CcmFuZD5cbiAgPC9OYXZiYXIuSGVhZGVyPlxuICA8TmF2PlxuICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiI1wiPlxuICAgICAgTGlua1xuICAgIDwvTmF2SXRlbT5cbiAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cIiNcIj5cbiAgICAgIExpbmtcbiAgICA8L05hdkl0ZW0+XG4gICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXszfSB0aXRsZT1cIkRyb3Bkb3duXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4xfT5BY3Rpb248L01lbnVJdGVtPlxuICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszLjJ9PkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4zfT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuNH0+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxuICAgIDwvTmF2RHJvcGRvd24+XG4gIDwvTmF2PlxuPC9OYXZiYXI+O1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5Zb3VyIFJlc2VydmF0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucmVzZXJ2YXRpb25zLm1hcCgocmVzZXJ2YXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZ2lkczdmL2hvbGlkYXktSW5uLU5ldy1Zb3JrLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Jlc2VydmF0aW9uLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntyZXNlcnZhdGlvbi5ob3RlbE5hbWUgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cmVzZXJ2YXRpb24uYXJyaXZhbERhdGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cmVzZXJ2YXRpb24uZGVwYXJ0dXJlRGF0ZSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT1cImxpbmstdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rIEhvdGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNDE1ZDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRjVGOUM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmstdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcjEge1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjVGOUM0O1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAubmF2VGV4dDF7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6eWVsbG93O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9Lm5hdlRleHQye1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9Lm5hdlRleHQze1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2TGlua3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=reservation.js.11578285280f3683fab7.hot-update.js.map