webpackHotUpdate("static/development/pages/booking.js",{

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
      className: "jsx-2135156268" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2135156268" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2135156268" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2135156268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-2135156268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2135156268" + " " + "panel-heading",
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
      className: "jsx-2135156268" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2135156268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), data.reservations.map(function (reservation, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2135156268" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg",
        className: "jsx-2135156268" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Hi ", reservation.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Hotel Name:", reservation.hotelName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "ChekIn:"), " ", reservation.arrivalDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "CheckOut:"), reservation.departureDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2135156268",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Modify"));
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2135156268",
      css: "h1.jsx-2135156268{font-size:20px;}input.jsx-2135156268{display:block;margin-bottom:10px;}.panel-login.jsx-2135156268{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-2135156268{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-2135156268{border:2px solid gray;height:300px;width:80%;margin-left:10%;text-align:center;float:left;margin-top:1%;border-radius:5px;background-color:#f2f2f2;padding:20px;}.card_img.jsx-2135156268{padding:10px height:100px;width:100px;margin-top:10px;}.btn-primary.jsx-2135156268{height:30px;width:180px;background:#F5F9C4;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-2135156268{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.panel-body.jsx-2135156268{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RDRCLEFBR3NDLEFBR0QsQUFJSSxBQVFKLEFBTVUsQUFhVixBQUtELEFBV0EsQUFLSyxZQWZMLEFBV0csRUEvQ0csQUFZRyxDQWZ4QixHQU9hLEFBZ0RjLElBbENYLEVBbUJNLEVBTlAsQ0FpQlUsRUEzQzRCLElBSnJELEVBa0JhLENBTk8sRUFtQkQsS0FNSixBQWVBLEVBakNJLFNBTkEsQUFtQm5CLENBTWtCLENBZWxCLEtBakNxQixTQW1CQyxFQXpCdEIsS0FrQ0EsRUEzQmMsQ0FoQm9DLFNBbUMxQixDQWxCUCxjQUNLLGtCQUNLLE1BbEJrQixXQW1DMUIsUUFoQkosUUFrQmYsS0FqQkEsV0FuQmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOYXZiYXIsTmF2LE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgY29uc3QgYWxsUmVzZXJ2YXRpb25zID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgcmVzZXJ2YXRpb25zIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgaG90ZWxOYW1lXG4gICAgICBhcnJpdmFsRGF0ZVxuICAgICAgZGVwYXJ0dXJlRGF0ZVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNlcnZhdGlvbkxpc3QgKCkgeyAgXG4gIHJldHVybihcbiAgICA8UXVlcnkgcXVlcnk9e2FsbFJlc2VydmF0aW9uc30+XG4gICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgcmVzZXJ2YXRpb25zLicgLz5cbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tpbmdcIj5Cb29rIEhvdGVsPC9MaW5rPiBZb3VyIFJlc2VydmF0aW9ucyA8TGluayBocmVmPVwiL1wiPkF2YWlsYWJsZSBIb3RlbDwvTGluaz48L2gxPiBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnJlc2VydmF0aW9ucy5tYXAoKHJlc2VydmF0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2dpZHM3Zi9ob2xpZGF5LUlubi1OZXctWW9yay5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9pbWdcIi8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhpIHtyZXNlcnZhdGlvbi5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3RlbCBOYW1lOntyZXNlcnZhdGlvbi5ob3RlbE5hbWUgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkNoZWtJbjo8L2I+IHtyZXNlcnZhdGlvbi5hcnJpdmFsRGF0ZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj5DaGVja091dDo8L2I+e3Jlc2VydmF0aW9uLmRlcGFydHVyZURhdGUgfTwvc3Bhbj48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk1vZGlmeTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFuZWwtbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFuZWwtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDQxNWQ7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRjVGOUM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmstdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/ReservationList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-2135156268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=booking.js.e87ea249c976ff72ac17.hot-update.js.map