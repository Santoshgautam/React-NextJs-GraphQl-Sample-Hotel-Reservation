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
      border: "0",
      margin: "10px",
      className: "jsx-3898518386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
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
      css: "h1.jsx-3898518386{font-size:30px;}h2.jsx-3898518386{font-size:20px;}h3.jsx-3898518386{font-size:15px;}input.jsx-3898518386{display:block;margin-bottom:10px;}.panel-login.jsx-3898518386{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-3898518386{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-3898518386{border:2px solid gray;height:400px;width:280px;margin-left:7%;text-align:center;float:left;margin-top:5%;font-size:10px;}.card_img.jsx-3898518386{padding:20px height:250px;width:250px;margin-top:10px;margin-left:11px;}.btn-primary.jsx-3898518386{height:30px;width:180px;background:#49E4CF;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-3898518386{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDRCLEFBR3VDLEFBR0QsQUFHRSxBQUdILEFBSUksQUFRSixBQU1VLEFBV1YsQUFNRCxBQVdBLFlBVkEsQUFXRyxFQTlDRyxBQVlHLENBckJ4QixBQUdBLEFBR0EsR0FPYSxJQWNHLEVBa0JNLEVBUFAsQ0FrQlUsRUExQzRCLElBSnJELEVBa0JlLENBTkssRUFpQkQsS0FPSixJQWpCRyxPQU5DLEFBaUJDLENBT0YsT0FqQkcsUUFrQkMsQ0FQdEIsQ0FqQkEsS0FpQ0EsR0ExQ2tELEFBZ0JwQyxTQWtCVSxFQWpCUCxjQUNDLGVBQ2xCLFFBbEI2QyxXQWtDMUIsZ0JBRW5CLGdCQW5DZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBCdXR0b24sIE1vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgY29uc3QgYWxsSG90ZWxzID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgaG90ZWxzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBhdmFpbGFibGVcbiAgICAgIGNpdHlcbiAgICAgIGNvdmVyXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvdGVsTGlzdCAoKSB7ICBcbiAgICBcbiAgICByZXR1cm4oICAgICBcbiAgICAgIDxRdWVyeSBxdWVyeT17YWxsSG90ZWxzfT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgaG90ZWxzLicgLz5cbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXJxdWVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9lZVYwU2YvMS5qcGdcIiBhbHQ9XCIxXCIgYm9yZGVyPVwiMFwiIG1hcmdpbj1cIjEwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2VTaUxTZi8yLmpwZ1wiIGFsdD1cIjJcIiBib3JkZXI9XCIwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9mUVc3N2YvMy5qcGdcIiBhbHQ9XCIzXCIgYm9yZGVyPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vY0xWam5mLzQuanBnXCIgYWx0PVwiNFwiIGJvcmRlcj1cIjBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hcnF1ZWU+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5BdmFpbGFibGUgSG90ZWxzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmhvdGVscy5tYXAoKGhvdGVscywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hvdGVscy5jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1nXCIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aG90ZWxzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntob3RlbHMuY2l0eX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Um9vbSBBdmE6IHtob3RlbHMuYXZhaWxhYmxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ib29raW5nJyBjbGFzc05hbWU9XCJsaW5rLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayBIb3RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzQ5RTRDRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE4JTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG59Il19 */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js */",
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
//# sourceMappingURL=index.js.5f2fc27cf9db551496b5.hot-update.js.map