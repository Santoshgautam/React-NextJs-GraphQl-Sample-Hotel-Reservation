webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HotelList.js":
/*!*********************************!*\
  !*** ./components/HotelList.js ***!
  \*********************************/
/*! exports provided: allHotels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allHotels", function() { return allHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HotelList; });
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
var _jsxFileName = "/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    hotels {\n      id\n      name\n      available\n      city\n      cover\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var allHotels = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function HotelList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: allHotels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: "Error loading hotels.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3898518386" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3898518386" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3898518386" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("marquee", {
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eeV0Sf/1.jpg",
      alt: "1",
      border: "1",
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), "&nbsp", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eSiLSf/2.jpg",
      alt: "2",
      border: "0",
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/fQW77f/3.jpg",
      alt: "3",
      border: "0",
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/cLVjnf/4.jpg",
      alt: "4",
      border: "0",
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3898518386" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Available Hotels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3898518386" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, data.hotels.map(function (hotels, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3898518386" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: hotels.cover,
        className: "jsx-3898518386" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3898518386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3898518386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, hotels.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3898518386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, hotels.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3898518386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Room Ava: ", hotels.available), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3898518386" + " " + "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/booking",
        className: "link-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Book Hotel")));
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3898518386",
      css: "h1.jsx-3898518386{font-size:30px;}h2.jsx-3898518386{font-size:20px;}h3.jsx-3898518386{font-size:15px;}input.jsx-3898518386{display:block;margin-bottom:10px;}.panel-login.jsx-3898518386{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-3898518386{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-3898518386{border:2px solid gray;height:400px;width:280px;margin-left:7%;text-align:center;float:left;margin-top:5%;font-size:10px;}.card_img.jsx-3898518386{padding:20px height:250px;width:250px;margin-top:10px;margin-left:11px;}.btn-primary.jsx-3898518386{height:30px;width:180px;background:#49E4CF;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-3898518386{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDRCLEFBR3VDLEFBR0QsQUFHRSxBQUdILEFBSUksQUFRSixBQU1VLEFBV1YsQUFNRCxBQVdBLFlBVkEsQUFXRyxFQTlDRyxBQVlHLENBckJ4QixBQUdBLEFBR0EsR0FPYSxJQWNHLEVBa0JNLEVBUFAsQ0FrQlUsRUExQzRCLElBSnJELEVBa0JlLENBTkssRUFpQkQsS0FPSixJQWpCRyxPQU5DLEFBaUJDLENBT0YsT0FqQkcsUUFrQkMsQ0FQdEIsQ0FqQkEsS0FpQ0EsR0ExQ2tELEFBZ0JwQyxTQWtCVSxFQWpCUCxjQUNDLGVBQ2xCLFFBbEI2QyxXQWtDMUIsZ0JBRW5CLGdCQW5DZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBCdXR0b24sIE1vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgY29uc3QgYWxsSG90ZWxzID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgaG90ZWxzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBhdmFpbGFibGVcbiAgICAgIGNpdHlcbiAgICAgIGNvdmVyXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvdGVsTGlzdCAoKSB7ICBcbiAgICBcbiAgICByZXR1cm4oICAgICBcbiAgICAgIDxRdWVyeSBxdWVyeT17YWxsSG90ZWxzfT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgaG90ZWxzLicgLz5cbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXJxdWVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9lZVYwU2YvMS5qcGdcIiBhbHQ9XCIxXCIgYm9yZGVyPVwiMVwiLz4mbmJzcFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9lU2lMU2YvMi5qcGdcIiBhbHQ9XCIyXCIgYm9yZGVyPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZlFXNzdmLzMuanBnXCIgYWx0PVwiM1wiIGJvcmRlcj1cIjBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2NMVmpuZi80LmpwZ1wiIGFsdD1cIjRcIiBib3JkZXI9XCIwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXJxdWVlPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+QXZhaWxhYmxlIEhvdGVsczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ob3RlbHMubWFwKChob3RlbHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtob3RlbHMuY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2hvdGVscy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aG90ZWxzLmNpdHl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJvb20gQXZhOiB7aG90ZWxzLmF2YWlsYWJsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYm9va2luZycgY2xhc3NOYW1lPVwibGluay10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgSG90ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNDE1ZDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjclO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX2ltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0OUU0Q0Y7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxOCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGluay10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=index.js.f87e17219111aa476ed1.hot-update.js.map