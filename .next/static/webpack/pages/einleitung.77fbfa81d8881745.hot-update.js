"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/einleitung",{

/***/ "./src/components/ProgressCheck.tsx":
/*!******************************************!*\
  !*** ./src/components/ProgressCheck.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProgressCheck\": function() { return /* binding */ ProgressCheck; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/joy */ \"./node_modules/@mui/joy/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\nconst ProgressCheck = (props)=>{\n    const { done  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {\n        color: done === 100 ? \"success\" : \"danger\",\n        determinate: true,\n        value: done,\n        variant: \"soft\",\n        size: \"sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n            icon: done === 100 ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,\n            height: 112,\n            color: done === 100 ? \"#1A7D36 \" : \"#d3232f\"\n        }, void 0, false, {\n            fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/ProgressCheck.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/ProgressCheck.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProgressCheck;\nvar _c;\n$RefreshReg$(_c, \"ProgressCheck\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0NoZWNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ3FCO0FBQ0k7QUFNOUQsTUFBTUksZ0JBQWlDLENBQUNDO0lBQzdDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdEO0lBRWpCLHFCQUNFLDhEQUFDTCxzREFBZ0JBO1FBQUNPLE9BQU9ELFNBQVEsTUFBTSxZQUFZO1FBQVVFLFdBQVc7UUFBQ0MsT0FBT0g7UUFBTUksU0FBUTtRQUFPQyxNQUFLO2tCQUV4Ryw0RUFBQ1YsMkVBQWVBO1lBQ2RXLE1BQU1OLFNBQU8sTUFBTUosc0VBQU9BLEdBQUVDLHNFQUFPQTtZQUFFVSxRQUFRO1lBQzdDTixPQUFPRCxTQUFRLE1BQU0sYUFBYTs7Ozs7Ozs7Ozs7QUFJMUMsRUFBRTtLQVpXRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0NoZWNrLnRzeD85MGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9qb3lcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hlY2ssIGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRvbmU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ2hlY2s6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRvbmUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9e2RvbmUgPT09MTAwID8gXCJzdWNjZXNzXCIgOiBcImRhbmdlclwifSBkZXRlcm1pbmF0ZSB2YWx1ZT17ZG9uZX0gdmFyaWFudD1cInNvZnRcIiBzaXplPVwic21cIj5cbiAgICAgICAgey8qZmFDaGVjayBIYWtlbiBmYVRpbWVzIEtyZXV6ICovfVxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICBpY29uPXtkb25lPT09MTAwID8gZmFDaGVjazogZmFUaW1lc30gaGVpZ2h0PXsxMTJ9XG4gICAgICAgIGNvbG9yPXtkb25lID09PTEwMCA/IFwiIzFBN0QzNiBcIiA6IFwiI2QzMjMyZlwifSBcbiAgICAgIC8+XG4gICAgPC9DaXJjdWxhclByb2dyZXNzPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaGVjayIsImZhVGltZXMiLCJQcm9ncmVzc0NoZWNrIiwicHJvcHMiLCJkb25lIiwiY29sb3IiLCJkZXRlcm1pbmF0ZSIsInZhbHVlIiwidmFyaWFudCIsInNpemUiLCJpY29uIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProgressCheck.tsx\n"));

/***/ })

});