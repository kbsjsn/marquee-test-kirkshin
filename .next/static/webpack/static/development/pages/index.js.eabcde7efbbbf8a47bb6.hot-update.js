webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.jsx");
/* harmony import */ var _DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataContext */ "./components/DataContext.jsx");
/* harmony import */ var _Marquee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Marquee */ "./components/Marquee.jsx");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout.scss */ "./components/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/kirkshin/Documents/code/career/job-takehomes/marquee-test-kirkshin/components/Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var HeadMetaData = __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Marquee Test"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  charSet: "utf-8",
  key: "viewport",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

function Layout(_ref) {
  var children = _ref.children,
      pageTitle = _ref.pageTitle;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DataContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      pages = _useContext.pages; // workaround when pages is initially set to undefined 


  if (!pages) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, HeadMetaData, __jsx("div", {
      className: "layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), children));
  }

  var pageData;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var data = _step.value;

      if (data.title === pageTitle) {
        pageData = data;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _pageData = pageData,
      blocks = _pageData.blocks;
  var content = blocks[0];
  var headline = content.headline,
      subhead = content.subhead,
      cta = content.cta,
      background = content.background;
  background = background.replace(/_/gi, '-');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, HeadMetaData, __jsx("div", {
    className: "background",
    style: {
      background: "url(/".concat(background, ") no-repeat center center fixed"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_Marquee__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headline: headline,
    subhead: subhead,
    cta: cta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.eabcde7efbbbf8a47bb6.hot-update.js.map