"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Accordion.tsx":
/*!**************************************!*\
  !*** ./src/components/Accordion.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy */ \"./node_modules/@mui/joy/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Accordion_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Accordion.module.css */ \"./src/styles/Accordion.module.css\");\n/* harmony import */ var _styles_Accordion_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Accordion_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Accordion = (props)=>{\n    _s();\n    const { titel , inhalt  } = props;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Accordion_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Accordion_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChevronContainer),\n                onClick: ()=>setIsOpen(!isOpen),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        children: titel\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/Accordion.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: isOpen ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronUp : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown,\n                        color: \"#1A7D36\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/Accordion.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/Accordion.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                children: inhalt\n            }, void 0, false, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/Accordion.tsx\",\n                lineNumber: 21,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/Accordion.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Accordion, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Accordion;\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNMO0FBQ21CO0FBQ2E7QUFDYztBQU94RSxNQUFNTSxZQUE2QixDQUFDQzs7SUFDekMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRSxHQUFHRjtJQUMxQixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVdYLCtFQUFnQlk7OzBCQUM5Qiw4REFBQ0Y7Z0JBQUlDLFdBQVdYLHNGQUF1QmE7Z0JBQUVDLFNBQVMsSUFBTUwsVUFBVSxDQUFDRDs7a0NBQ2pFLDhEQUFDVixnREFBVUE7a0NBQUVROzs7Ozs7a0NBQ2IsOERBQUNMLDJFQUFlQTt3QkFBQ2MsTUFBTVAsU0FBU0wsMEVBQVdBLEdBQUdELDRFQUFhQTt3QkFBRWMsT0FBTTs7Ozs7Ozs7Ozs7O1lBRXBFUix3QkFBVSw4REFBQ1YsZ0RBQVVBOzBCQUFFUzs7Ozs7Ozs7Ozs7O0FBRzlCLEVBQUU7R0FaV0g7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uLnRzeD9lZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9qb3lcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQWNjb3JkaW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblVwIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRlbDogc3RyaW5nO1xuICBpbmhhbHQ6IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0ZWwsIGluaGFsdCB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGV2cm9uQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICA8VHlwb2dyYXBoeT57dGl0ZWx9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzT3BlbiA/IGZhQ2hldnJvblVwIDogZmFDaGV2cm9uRG93bn0gY29sb3I9XCIjMUE3RDM2XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNPcGVuICYmIDxUeXBvZ3JhcGh5PntpbmhhbHR9PC9UeXBvZ3JhcGh5Pn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsInVzZVN0YXRlIiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaGV2cm9uRG93biIsImZhQ2hldnJvblVwIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJ0aXRlbCIsImluaGFsdCIsImlzT3BlbiIsInNldElzT3BlbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIkNoZXZyb25Db250YWluZXIiLCJvbkNsaWNrIiwiaWNvbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Accordion.tsx\n"));

/***/ })

});