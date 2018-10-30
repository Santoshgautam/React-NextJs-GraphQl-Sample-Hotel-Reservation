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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      class: "navbar navbar-inverse",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "container-fluid",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "navbar-header",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      class: "navbar-brand",
      href: "#",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "WebSiteName")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      class: "nav navbar-nav",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      class: "active",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Page 1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Page 2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Page 3"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-607176727" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Your Reservations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-607176727" + " " + "jumbotron",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-607176727" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-607176727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, reservation.departureDate, "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-607176727" + " " + "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        className: "link-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Book Hotel")));
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "607176727",
      css: "h1.jsx-607176727{font-size:20px;}input.jsx-607176727{display:block;margin-bottom:10px;}.panel-login.jsx-607176727{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-607176727{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-607176727{border:2px solid gray;height:400px;width:280px;margin-left:10%;text-align:center;float:left;margin-top:5%;}.card_img.jsx-607176727{padding:10px height:250px;width:250px;margin-top:10px;}.btn-primary.jsx-607176727{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-607176727{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.navbar1.jsx-607176727{border:1px solid black;padding:10px;font-size:20px;background-color:#F5F9C4;color:yellow;border-radius:15px;margin-left:20px;margin-right:20;}.jsx-607176727,.navText1.jsx-607176727{color:yellow;margin-left:20;}.navText2.jsx-607176727{color:green;margin-left:20;}.navText3.jsx-607176727{color:red;margin-left:20;}.navLink.jsx-607176727{margin-left:15px;margin-top:-20px;margin-right:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRTRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFVVixBQUtELEFBV0EsQUFLVSxBQVVYLEFBSUQsQUFJRixBQUtPLFVBSkQsRUFsQ0YsQUFXRyxBQW1CRCxDQUpBLENBM0RJLEFBWUcsQ0FmeEIsRUEyRWtCLENBcEVMLElBY0csQ0ErQkYsQ0FmUSxDQW1DdEIsQ0F6Q2UsQ0FpQlUsQUFvQnpCLENBSkEsQ0F4RHFELElBSnJELENBd0VrQixDQXRESCxDQU5LLEFBcUNILEVBckJFLEtBTUosSUFmSSxHQXNEbkIsQ0F2QjBCLEdBckNQLEFBZ0JuQixDQU1rQixRQWZHLE9BZ0JDLEVBdEJ0QixJQXFDYyxDQU5kLEdBeENrRCxDQWdCcEMsUUFnQlUsQUFlSixHQTlCSCxjQUNqQixFQThCa0IsaUJBQ0EsR0FoRDJCLFdBZ0MxQixFQWlCbkIsY0FmQSxnQkFqQ2UsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5cbmV4cG9ydCBjb25zdCBhbGxSZXNlcnZhdGlvbnMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICByZXNlcnZhdGlvbnMge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICBob3RlbE5hbWVcbiAgICAgIGFycml2YWxEYXRlXG4gICAgICBkZXBhcnR1cmVEYXRlXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmF0aW9uTGlzdCAoKSB7ICBcbiAgcmV0dXJuKFxuICAgIDxRdWVyeSBxdWVyeT17YWxsUmVzZXJ2YXRpb25zfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyByZXNlcnZhdGlvbnMuJyAvPlxuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5XZWJTaXRlTmFtZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UGFnZSAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UGFnZSAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UGFnZSAzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+WW91ciBSZXNlcnZhdGlvbnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnJlc2VydmF0aW9ucy5tYXAoKHJlc2VydmF0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2dpZHM3Zi9ob2xpZGF5LUlubi1OZXctWW9yay5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9pbWdcIi8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntyZXNlcnZhdGlvbi5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cmVzZXJ2YXRpb24uaG90ZWxOYW1lIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Jlc2VydmF0aW9uLmFycml2YWxEYXRlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Jlc2VydmF0aW9uLmRlcGFydHVyZURhdGUgfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9XCJsaW5rLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayBIb3RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFuZWwtbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFuZWwtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDQxNWQ7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX2ltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0Y1RjlDNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE4JTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXIxIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjlDNDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLm5hdlRleHQxe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfS5uYXZUZXh0MntcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjA7XG5cbiAgICAgICAgICAgICAgICAgICAgfS5uYXZUZXh0M3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdkxpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-607176727",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=reservation.js.21b824f47d51efdb0bbe.hot-update.js.map