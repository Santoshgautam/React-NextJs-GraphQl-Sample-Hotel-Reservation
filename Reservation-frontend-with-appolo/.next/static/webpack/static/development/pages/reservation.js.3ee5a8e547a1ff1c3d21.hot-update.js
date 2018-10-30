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
      className: "jsx-2845094952" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2845094952" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2845094952" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2845094952",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-2845094952",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2845094952" + " " + "panel-heading",
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
      className: "jsx-2845094952" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2845094952",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2845094952" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-2845094952" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Hi ", reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Hotel Name:", reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "ChekIn:"), " ", reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "CheckOut:"), reservation.departureDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2845094952",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Modify"));
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2845094952",
      css: "h1.jsx-2845094952{font-size:20px;}input.jsx-2845094952{display:block;margin-bottom:10px;}.panel-login.jsx-2845094952{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-2845094952{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-2845094952{border:2px solid gray;height:300px;width:80%;margin-left:10%;text-align:center;float:left;margin-top:1%;}.card_img.jsx-2845094952{padding:10px height:100px;width:100px;margin-top:10px;}.btn-primary.jsx-2845094952{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-2845094952{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.panel-body.jsx-2845094952{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RDRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFXVixBQUtELEFBV0EsQUFLSyxZQWZMLEFBV0csRUE3Q0csQUFZRyxDQWZ4QixHQU9hLEFBOENjLElBaENYLEVBaUJNLEVBTlAsQ0FpQlUsRUF6QzRCLElBSnJELEVBa0JhLENBTk8sRUFpQkQsS0FNSixBQWVBLEVBL0JJLFNBTkEsQUFpQm5CLENBTWtCLENBZWxCLEtBL0JxQixTQWlCQyxFQXZCdEIsS0FnQ0EsRUF6QmMsQ0FoQm9DLFNBaUMxQixDQWhCUCxjQUVqQix3QkFsQjZDLFdBaUMxQixnQkFFbkIsZ0JBbENlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2F2aS9EZXNrdG9wLzM2NTVfYWtzaGF5L1Jlc2VydmF0aW9uLWZyb250ZW5kLXdpdGgtYXBwb2xvL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgTmF2YmFyLE5hdixOYXZJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IGFsbFJlc2VydmF0aW9ucyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHJlc2VydmF0aW9ucyB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIGhvdGVsTmFtZVxuICAgICAgYXJyaXZhbERhdGVcbiAgICAgIGRlcGFydHVyZURhdGVcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2YXRpb25MaXN0ICgpIHsgIFxuICByZXR1cm4oXG4gICAgPFF1ZXJ5IHF1ZXJ5PXthbGxSZXNlcnZhdGlvbnN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHJlc2VydmF0aW9ucy4nIC8+XG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29raW5nXCI+Qm9vayBIb3RlbDwvTGluaz4gWW91ciBSZXNlcnZhdGlvbnMgPExpbmsgaHJlZj1cIi9cIj5BdmFpbGFibGUgSG90ZWw8L0xpbms+PC9oMT4gXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5yZXNlcnZhdGlvbnMubWFwKChyZXNlcnZhdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9naWRzN2YvaG9saWRheS1Jbm4tTmV3LVlvcmsuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1nXCIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IaSB7cmVzZXJ2YXRpb24ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG90ZWwgTmFtZTp7cmVzZXJ2YXRpb24uaG90ZWxOYW1lIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj5DaGVrSW46PC9iPiB7cmVzZXJ2YXRpb24uYXJyaXZhbERhdGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+Q2hlY2tPdXQ6PC9iPntyZXNlcnZhdGlvbi5kZXBhcnR1cmVEYXRlIH08L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Nb2RpZnk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9pbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGNUY5QzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxOCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGluay10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFuZWwtYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2845094952",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=reservation.js.3ee5a8e547a1ff1c3d21.hot-update.js.map