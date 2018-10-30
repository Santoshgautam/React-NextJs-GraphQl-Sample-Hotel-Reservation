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
      className: "jsx-1435371594" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1435371594" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1435371594" + " " + "panel panel-login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("marquee", {
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eeV0Sf/1.jpg",
      alt: "1",
      border: "1",
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/eSiLSf/2.jpg",
      alt: "2",
      border: "0",
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/fQW77f/3.jpg",
      alt: "3",
      border: "0",
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.ibb.co/cLVjnf/4.jpg",
      alt: "4",
      border: "0",
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1435371594" + " " + "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Available Hotels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1435371594" + " " + "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, data.hotels.map(function (hotels, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1435371594" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: hotels.cover,
        className: "jsx-1435371594" + " " + "card_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1435371594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1435371594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, hotels.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1435371594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, hotels.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1435371594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Room Ava: ", hotels.available), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1435371594" + " " + "btn-primary",
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
      styleId: "1435371594",
      css: "h1.jsx-1435371594{font-size:30px;}h2.jsx-1435371594{font-size:20px;}h3.jsx-1435371594{font-size:15px;}input.jsx-1435371594{display:block;margin-bottom:10px;}.panel-login.jsx-1435371594{border-color:grey;width:100%;-webkit-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);box-shadow:0px 2px 3px 0px rgba(0,0,0,0.2);padding:15px;}.panel-heading.jsx-1435371594{color:#00415d;background-color:#fff;border-color:#fff;text-align:center;}.card.jsx-1435371594{border:2px solid gray;height:400px;width:280px;margin-left:7%;text-align:center;float:left;margin-top:5%;font-size:10px;}.card_img.jsx-1435371594{padding:20px height:250px;width:250px;margin-top:10px;margin-left:11px;}.btn-primary.jsx-1435371594{height:30px;width:180px;background:#49E4CF;color:black;font-size:15px;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;margin-left:18%;}.link-text.jsx-1435371594{color:black;font-size:15px;-webkit-text-decoration:none;text-decoration:none;}.container.jsx-1435371594{border-radius:5px;background-color:#f2f2f2;padding:20px;}.marquee.jsx-1435371594{background-color:#ddd;width:500px;margin:0 auto;overflow:hidden;white-space:nowrap;}.marquee.jsx-1435371594 span.jsx-1435371594{display:inline-block;font-size:20px;position:relative;left:100%;-webkit-animation:marquee-jsx-1435371594 8s linear infinite;animation:marquee-jsx-1435371594 8s linear infinite;}.marquee.jsx-1435371594:hover span.jsx-1435371594{-webkit-animation-play-state:paused;animation-play-state:paused;}.marquee.jsx-1435371594 span.jsx-1435371594:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s;}.marquee.jsx-1435371594 span.jsx-1435371594:nth-child(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.marquee.jsx-1435371594 span.jsx-1435371594:nth-child(3){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.marquee.jsx-1435371594 span.jsx-1435371594:nth-child(4){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.marquee.jsx-1435371594 span.jsx-1435371594:nth-child(5){-webkit-animation-delay:3.2s;animation-delay:3.2s;}@-webkit-keyframes marquee-jsx-1435371594{0%{left:100%;}100%{left:-100%;}}@keyframes marquee-jsx-1435371594{0%{left:100%;}100%{left:-100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmkvRGVza3RvcC8zNjU1X2Frc2hheS9SZXNlcnZhdGlvbi1mcm9udGVuZC13aXRoLWFwcG9sby9jb21wb25lbnRzL0hvdGVsTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDRCLEFBR3VDLEFBR0QsQUFHRSxBQUdILEFBSUksQUFRSixBQU1VLEFBV1YsQUFNRCxBQVdBLEFBS08sQUFLSSxBQU9ELEFBT08sQUFJVCxBQUdFLEFBR0EsQUFHQSxBQUdBLEFBSUwsQUFDQyxVQURBLENBQ0MsQ0F2RFAsQUFXRyxFQTlDRyxBQVlHLENBckJ4QixBQUdBLEFBR0EsR0FPYSxBQStDZ0IsR0FZVixDQTdDSCxBQXNDQSxFQXBCTSxFQVBQLENBa0JVLEVBMUM0QixJQUpyRCxDQXdEa0IsQ0F0Q0gsQ0FOSyxBQW1ERSxFQWxDSCxLQU9KLEFBZUUsR0FzQmYsQ0F0RGdCLENBc0NFLEVBbUJsQixBQUdBLEFBR0EsQUFHQSxJQXhFaUIsQUFpQkMsQUFrQ04sQ0EzQkksQ0FlbEIsTUFoQ3FCLEVBc0NFLEFBT2tCLEFBSXZDLE1BL0JvQixDQVB0QixDQWpCQSxLQWlDQSxHQTFDa0QsQUFnQnBDLEdBc0NaLE1BcEJzQixFQWpCUCxjQUNDLGVBQ2xCLFFBbEI2QyxXQWtDMUIsZ0JBRW5CLGdCQW5DZSxLQTJEYixRQTFERiIsImZpbGUiOiIvVXNlcnMvYXZpL0Rlc2t0b3AvMzY1NV9ha3NoYXkvUmVzZXJ2YXRpb24tZnJvbnRlbmQtd2l0aC1hcHBvbG8vY29tcG9uZW50cy9Ib3RlbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXAsIENvbnRyb2xMYWJlbCwgQnV0dG9uLCBNb2RhbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IGFsbEhvdGVscyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGhvdGVscyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhaWxhYmxlXG4gICAgICBjaXR5XG4gICAgICBjb3ZlclxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3RlbExpc3QgKCkgeyAgXG4gICAgXG4gICAgcmV0dXJuKCAgICAgXG4gICAgICA8UXVlcnkgcXVlcnk9e2FsbEhvdGVsc30+XG4gICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGhvdGVscy4nIC8+XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFycXVlZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vZWVWMFNmLzEuanBnXCIgYWx0PVwiMVwiIGJvcmRlcj1cIjFcIi8+LlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmliYi5jby9lU2lMU2YvMi5qcGdcIiBhbHQ9XCIyXCIgYm9yZGVyPVwiMFwiLz4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuaWJiLmNvL2ZRVzc3Zi8zLmpwZ1wiIGFsdD1cIjNcIiBib3JkZXI9XCIwXCIvPi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5pYmIuY28vY0xWam5mLzQuanBnXCIgYWx0PVwiNFwiIGJvcmRlcj1cIjBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hcnF1ZWU+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5BdmFpbGFibGUgSG90ZWxzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmhvdGVscy5tYXAoKGhvdGVscywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hvdGVscy5jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1nXCIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aG90ZWxzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntob3RlbHMuY2l0eX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Um9vbSBBdmE6IHtob3RlbHMuYXZhaWxhYmxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ib29raW5nJyBjbGFzc05hbWU9XCJsaW5rLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayBIb3RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA0MTVkO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzQ5RTRDRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE4JTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFycXVlZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBtYXJxdWVlIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWU6aG92ZXIgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXJxdWVlIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLm1hcnF1ZWUgc3BhbjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAubWFycXVlZSBzcGFuOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbWFycXVlZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwJSAgIHsgbGVmdDogMTAwJTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IGxlZnQ6IC0xMDAlOyB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/avi/Desktop/3655_akshay/Reservation-frontend-with-appolo/components/HotelList.js */",
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1435371594",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }));
  });
}

/***/ })

})
//# sourceMappingURL=index.js.9b9e43ca88647028fc86.hot-update.js.map