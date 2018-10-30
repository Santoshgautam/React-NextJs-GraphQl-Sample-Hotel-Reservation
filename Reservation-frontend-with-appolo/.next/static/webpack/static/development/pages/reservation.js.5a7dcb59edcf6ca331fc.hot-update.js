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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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
      className: "jsx-607176727" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#home",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "React-Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      eventKey: 1,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      eventKey: 2,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavDropdown, {
      eventKey: 3,
      title: "Dropdown",
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Action"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Another action"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      divider: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
      eventKey: 3.4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Separated link")))), ";", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-607176727" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Your Reservations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "jumbotron",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-607176727" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, reservation.departureDate, "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        className: "link-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Book Hotel")));
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "607176727",
      css: "h1.jsx-607176727{font-size:20px;}input.jsx-607176727{display:block;margin-bottom:10px;}.panel-login.jsx-607176727{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-607176727{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-607176727{border:2px solid gray;height:400px;width:280px;margin-left:10%;text-align:center;float:left;margin-top:5%;}.card_img.jsx-607176727{padding:10px height:250px;width:250px;margin-top:10px;}.btn-primary.jsx-607176727{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-607176727{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.navbar1.jsx-607176727{border:1px solid black;padding:10px;font-size:20px;background-color:#F5F9C4;color:yellow;border-radius:15px;margin-left:20px;margin-right:20;}.jsx-607176727,.navText1.jsx-607176727{color:yellow;margin-left:20;}.navText2.jsx-607176727{color:green;margin-left:20;}.navText3.jsx-607176727{color:red;margin-left:20;}.navLink.jsx-607176727{margin-left:15px;margin-top:-20px;margin-right:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RTRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFVVixBQUtELEFBV0EsQUFLVSxBQVVYLEFBSUQsQUFJRixBQUtPLFVBSkQsRUFsQ0YsQUFXRyxBQW1CRCxDQUpBLENBM0RJLEFBWUcsQ0FmeEIsRUEyRWtCLENBcEVMLElBY0csQ0ErQkYsQ0FmUSxDQW1DdEIsQ0F6Q2UsQ0FpQlUsQUFvQnpCLENBSkEsQ0F4RHFELElBSnJELENBd0VrQixDQXRESCxDQU5LLEFBcUNILEVBckJFLEtBTUosSUFmSSxHQXNEbkIsQ0F2QjBCLEdBckNQLEFBZ0JuQixDQU1rQixRQWZHLE9BZ0JDLEVBdEJ0QixJQXFDYyxDQU5kLEdBeENrRCxDQWdCcEMsUUFnQlUsQUFlSixHQTlCSCxjQUNqQixFQThCa0IsaUJBQ0EsR0FoRDJCLFdBZ0MxQixFQWlCbkIsY0FmQSxnQkFqQ2UsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOYXZiYXIsTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IGFsbFJlc2VydmF0aW9ucyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHJlc2VydmF0aW9ucyB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIGhvdGVsTmFtZVxuICAgICAgYXJyaXZhbERhdGVcbiAgICAgIGRlcGFydHVyZURhdGVcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2YXRpb25MaXN0ICgpIHsgIFxuICByZXR1cm4oXG4gICAgPFF1ZXJ5IHF1ZXJ5PXthbGxSZXNlcnZhdGlvbnN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHJlc2VydmF0aW9ucy4nIC8+XG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyPlxuICAgICAgICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+UmVhY3QtQm9vdHN0cmFwPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIExpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBMaW5rXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXszfSB0aXRsZT1cIkRyb3Bkb3duXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuMX0+QWN0aW9uPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuMn0+QW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4zfT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My40fT5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj47XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPllvdXIgUmVzZXJ2YXRpb25zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5yZXNlcnZhdGlvbnMubWFwKChyZXNlcnZhdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9naWRzN2YvaG9saWRheS1Jbm4tTmV3LVlvcmsuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1nXCIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cmVzZXJ2YXRpb24ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Jlc2VydmF0aW9uLmhvdGVsTmFtZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntyZXNlcnZhdGlvbi5hcnJpdmFsRGF0ZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntyZXNlcnZhdGlvbi5kZXBhcnR1cmVEYXRlIH19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPVwibGluay10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgSG90ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9pbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGNUY5QzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxOCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGluay10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyMSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNUY5QzQ7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6eWVsbG93O1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC5uYXZUZXh0MXtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH0ubmF2VGV4dDJ7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6Z3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH0ubmF2VGV4dDN7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXZMaW5re1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvUXVlcnk+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=reservation.js.5a7dcb59edcf6ca331fc.hot-update.js.map