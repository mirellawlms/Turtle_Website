"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/uebung1",{

/***/ "./src/pages/uebung1.tsx":
/*!*******************************!*\
  !*** ./src/pages/uebung1.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TurtleViewer */ \"./src/components/TurtleViewer.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/joy */ \"./node_modules/@mui/joy/index.js\");\n/* harmony import */ var _components_TurtleViewer_Steuerung__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TurtleViewer_Steuerung */ \"./src/components/TurtleViewer_Steuerung.tsx\");\n\n\n\n\n\n\n\n//Standardwert, der hier steht\nconst code1_1 = '#include <iostream>\\n\\nint main() {\\n  std::cout<< \"Hallo Welt!\";\\n\\n};';\nconst code1_2 = '#include \"turtle.h\"\\n\\nint main(){\\n    Kroete pebble;\\n\\n    /*Alogrithmus, den Studis bsp schreiben*/\\n    pebble.moveDown();\\n    pebble.moveDown();\\n    pebble.moveDown();\\n    pebble.moveRight();\\n    pebble.moveRight();\\n    pebble.moveDown();\\n}';\n//übergabe erfolgt hier\nconst maze = [\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.START,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL\n    ],\n    [\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.WALL,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EMPTY,\n        _components_TurtleViewer__WEBPACK_IMPORTED_MODULE_2__.Field.EXIT\n    ]\n];\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Created by Mirella\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/kroete.webp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.Navigation, {\n                showback: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            level: \"h3\",\n                            children: \"Kapitel1 - Algrithmus auf Papier \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                            lineNumber: 169,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            level: \"body1\",\n                            children: \"Bewege die Turtle mit den pfeiltasten\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                            lineNumber: 170,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TurtleViewer_Steuerung__WEBPACK_IMPORTED_MODULE_4__.TurtleViewer_Steuerung, {\n                            field: maze,\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                            lineNumber: 173,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/pages/uebung1.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdWVidW5nMS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNNQTtBQVR1QjtBQUdtQztBQUNYO0FBQ2Y7QUFDdUM7QUFLN0UsOEJBQThCO0FBQzlCLE1BQU1NLFVBQVc7QUFPakIsTUFBTUMsVUFBVztBQWNqQix1QkFBdUI7QUFDdkIsTUFBTUMsT0FBa0I7SUFDdEI7UUFDRU4saUVBQVdPO1FBQ1hQLGdFQUFVUTtRQUNWUixnRUFBVVE7UUFDVlIsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsaUVBQVdTO0tBQ1o7SUFDRDtRQUNFVCxpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7S0FDWjtJQUNEO1FBQ0VULGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztLQUNaO0lBQ0Q7UUFDRVQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsaUVBQVdTO0tBQ1o7SUFDRDtRQUNFVCxpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxpRUFBV1M7S0FDWjtJQUNEO1FBQ0VULGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGlFQUFXUztLQUNaO0lBQ0Q7UUFDRVQsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixnRUFBVVE7UUFDVlIsaUVBQVdTO0tBQ1o7SUFDRDtRQUNFVCxpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGdFQUFVUTtRQUNWUixnRUFBVVE7UUFDVlIsZ0VBQVVRO1FBQ1ZSLGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7S0FDWjtJQUNEO1FBQ0VULGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGdFQUFVUTtRQUNWUixnRUFBVVE7UUFDVlIsaUVBQVdTO1FBQ1hULGdFQUFVUTtLQUNYO0lBQ0Q7UUFDRVIsaUVBQVdTO1FBQ1hULGdFQUFVUTtRQUNWUixpRUFBV1M7UUFDWFQsZ0VBQVVRO1FBQ1ZSLGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsaUVBQVdTO1FBQ1hULGlFQUFXUztRQUNYVCxpRUFBV1M7UUFDWFQsZ0VBQVVVO0tBQ1g7Q0FDRjtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFOzswQkFDRSw4REFBQ1osa0RBQUlBOztrQ0FDSCw4REFBQ2E7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ2pCLDhEQUFVQTtnQkFBQ2tCLFVBQVU7MEJBQ3BCLDRFQUFDQzs7c0NBQ0QsOERBQUNsQixnREFBVUE7NEJBQUNtQixPQUFNO3NDQUFLOzs7Ozs7c0NBQ3JCLDhEQUFDbkIsZ0RBQVVBOzRCQUFDbUIsT0FBTTtzQ0FBUTs7Ozs7O3NDQUcxQiw4REFBQ2xCLHNGQUFzQkE7NEJBQUNtQixPQUFPaEI7NEJBQU1pQixPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25FO0tBcEJ3QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VlYnVuZzEudHN4PzBmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgQ29kZUVkaXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ29kZUVkaXRvclwiO1xuaW1wb3J0IHsgRmllbGQsIFR1cnRsZVZpZXdlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvVHVydGxlVmlld2VyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvam95XCI7XG5pbXBvcnQgeyBUdXJ0bGVWaWV3ZXJfU3RldWVydW5nIH0gZnJvbSBcIkAvY29tcG9uZW50cy9UdXJ0bGVWaWV3ZXJfU3RldWVydW5nXCI7XG5cbi8vU2NocmlmdGFydCBoaWVyIEludGVyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbi8vU3RhbmRhcmR3ZXJ0LCBkZXIgaGllciBzdGVodFxuY29uc3QgY29kZTFfMSA9IGAjaW5jbHVkZSA8aW9zdHJlYW0+XG5cbmludCBtYWluKCkge1xuICBzdGQ6OmNvdXQ8PCBcIkhhbGxvIFdlbHQhXCI7XG5cbn07YDtcblxuY29uc3QgY29kZTFfMiA9IGAjaW5jbHVkZSBcInR1cnRsZS5oXCJcblxuaW50IG1haW4oKXtcbiAgICBLcm9ldGUgcGViYmxlO1xuXG4gICAgLypBbG9ncml0aG11cywgZGVuIFN0dWRpcyBic3Agc2NocmVpYmVuKi9cbiAgICBwZWJibGUubW92ZURvd24oKTtcbiAgICBwZWJibGUubW92ZURvd24oKTtcbiAgICBwZWJibGUubW92ZURvd24oKTtcbiAgICBwZWJibGUubW92ZVJpZ2h0KCk7XG4gICAgcGViYmxlLm1vdmVSaWdodCgpO1xuICAgIHBlYmJsZS5tb3ZlRG93bigpO1xufWA7XG5cbi8vw7xiZXJnYWJlIGVyZm9sZ3QgaGllclxuY29uc3QgbWF6ZTogRmllbGRbXVtdID0gW1xuICBbXG4gICAgRmllbGQuU1RBUlQsXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gIF0sXG4gIFtcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuRU1QVFksXG4gIF0sXG4gIFtcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLkVNUFRZLFxuICBdLFxuICBbXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5XQUxMLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgXSxcbiAgW1xuICAgIEZpZWxkLkVNUFRZLFxuICAgIEZpZWxkLldBTEwsXG4gICAgRmllbGQuRU1QVFksXG4gICAgRmllbGQuV0FMTCxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FTVBUWSxcbiAgICBGaWVsZC5FWElULFxuICBdXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGVkIGJ5IE1pcmVsbGFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9rcm9ldGUud2VicFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2aWdhdGlvbiBzaG93YmFjaz17dHJ1ZX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGxldmVsPVwiaDNcIj5LYXBpdGVsMSAtIEFsZ3JpdGhtdXMgYXVmIFBhcGllciA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgbGV2ZWw9XCJib2R5MVwiPlxuICAgICAgICAgICAgQmV3ZWdlIGRpZSBUdXJ0bGUgbWl0IGRlbiBwZmVpbHRhc3RlblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHVydGxlVmlld2VyX1N0ZXVlcnVuZyBmaWVsZD17bWF6ZX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9PjwvVHVydGxlVmlld2VyX1N0ZXVlcnVuZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L05hdmlnYXRpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiRmllbGQiLCJOYXZpZ2F0aW9uIiwiVHlwb2dyYXBoeSIsIlR1cnRsZVZpZXdlcl9TdGV1ZXJ1bmciLCJjb2RlMV8xIiwiY29kZTFfMiIsIm1hemUiLCJTVEFSVCIsIldBTEwiLCJFTVBUWSIsIkVYSVQiLCJIb21lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNob3diYWNrIiwiZGl2IiwibGV2ZWwiLCJmaWVsZCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/uebung1.tsx\n"));

/***/ })

});