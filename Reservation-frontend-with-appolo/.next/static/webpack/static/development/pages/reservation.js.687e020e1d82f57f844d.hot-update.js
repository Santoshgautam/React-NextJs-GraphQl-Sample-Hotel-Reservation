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
      className: "jsx-1966680712" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1966680712" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1966680712" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1966680712",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-1966680712",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1966680712" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Book Hotel"), " Your Reservations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1966680712" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1966680712" + " " + "jumbotron",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1966680712" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-1966680712" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Hi ", reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Hotel Name:", reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "ChekIn:"), " ", reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "CheckOut:"), reservation.departureDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-1966680712",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Modify"));
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1966680712",
      css: "h1.jsx-1966680712{font-size:20px;}input.jsx-1966680712{display:block;margin-bottom:10px;}.panel-login.jsx-1966680712{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-1966680712{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-1966680712{border:2px solid gray;height:300px;width:80%;margin-left:10%;text-align:center;float:left;margin-top:5%;}.card_img.jsx-1966680712{padding:10px height:100px;width:100px;margin-top:10px;}.btn-primary.jsx-1966680712{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-1966680712{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFVVixBQUtELEFBV0EsWUFWQSxBQVdHLEVBNUNHLEFBWUcsQ0FmeEIsR0FPYSxJQWNHLEVBZ0JNLEVBTlAsQ0FpQlUsRUF4QzRCLElBSnJELEVBa0JhLENBTk8sRUFnQkQsS0FNSixFQWZJLFNBTkEsQUFnQm5CLENBTWtCLE1BZkcsU0FnQkMsRUF0QnRCLEtBK0JBLEVBeEJjLENBaEJvQyxTQWdDMUIsQ0FmUCxjQUNqQix3QkFqQjZDLFdBZ0MxQixnQkFFbkIsZ0JBakNlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2F2aS9EZXNrdG9wLzM2NTVfYWtzaGF5L1Jlc2VydmF0aW9uLWZyb250ZW5kLXdpdGgtYXBwb2xvL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgTmF2YmFyLE5hdixOYXZJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IGFsbFJlc2VydmF0aW9ucyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHJlc2VydmF0aW9ucyB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIGhvdGVsTmFtZVxuICAgICAgYXJyaXZhbERhdGVcbiAgICAgIGRlcGFydHVyZURhdGVcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2YXRpb25MaXN0ICgpIHsgIFxuICByZXR1cm4oXG4gICAgPFF1ZXJ5IHF1ZXJ5PXthbGxSZXNlcnZhdGlvbnN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHJlc2VydmF0aW9ucy4nIC8+XG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Cb29rIEhvdGVsPC9MaW5rPiBZb3VyIFJlc2VydmF0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucmVzZXJ2YXRpb25zLm1hcCgocmVzZXJ2YXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZ2lkczdmL2hvbGlkYXktSW5uLU5ldy1Zb3JrLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SGkge3Jlc2VydmF0aW9uLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvdGVsIE5hbWU6e3Jlc2VydmF0aW9uLmhvdGVsTmFtZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+Q2hla0luOjwvYj4ge3Jlc2VydmF0aW9uLmFycml2YWxEYXRlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkNoZWNrT3V0OjwvYj57cmVzZXJ2YXRpb24uZGVwYXJ0dXJlRGF0ZSB9PC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TW9kaWZ5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRjVGOUM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmstdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvUXVlcnk+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1966680712",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=reservation.js.687e020e1d82f57f844d.hot-update.js.map