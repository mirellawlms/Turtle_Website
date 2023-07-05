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

/***/ "./src/components/CodeEditor.tsx":
/*!***************************************!*\
  !*** ./src/components/CodeEditor.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CodeEditor\": function() { return /* binding */ CodeEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/joy */ \"./node_modules/@mui/joy/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TurtleViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TurtleViewer */ \"./src/components/TurtleViewer.tsx\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monaco-editor/react */ \"./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var _styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/CodeEditor.module.css */ \"./src/styles/CodeEditor.module.css\");\n/* harmony import */ var _styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst server = \"http://localhost:5236/run\";\nconst CodeEditor = (props)=>{\n    _s();\n    //const title = props.title;\n    const { title , defaultValue , turtle , labyrinth  } = props;\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [output, setStdout] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleEditorDidMount = (editor, monaco)=>{\n        editorRef.current = editor;\n    };\n    const onRun = async ()=>{\n        setIsRunning(true);\n        fetch(server, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                code: editorRef.current ? editorRef.current.getValue() : \"\",\n                /*if labyrinth!null mach erstes ansonsten mach leeren String*/ labyrinth: labyrinth ? labyrinth.map((value)=>value.join(\",\")).join(\";\") : \"\"\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            setStdout(data.compile + data.output || \"\");\n            setPath(data.path || []);\n            setIsRunning(false);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                style: {\n                                    marginRight: \"5px\"\n                                },\n                                color: \"success\",\n                                variant: \"soft\",\n                                onClick: ()=>{\n                                    setStdout(\"\");\n                                    setPath([]);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faRotateRight,\n                                    height: 12\n                                }, void 0, false, {\n                                    fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                color: \"success\",\n                                onClick: onRun,\n                                children: isRunning ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {\n                                    size: \"sm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlay,\n                                    height: 12\n                                }, void 0, false, {\n                                    fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        height: \"200px\",\n                        defaultLanguage: \"cpp\",\n                        defaultValue: defaultValue,\n                        theme: \"vs\",\n                        onMount: handleEditorDidMount\n                    }, void 0, false, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            turtle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TurtleViewer__WEBPACK_IMPORTED_MODULE_3__.TurtleViewer, {\n                                path: path,\n                                field: labyrinth !== null && labyrinth !== void 0 ? labyrinth : [],\n                                width: 400,\n                                height: 400\n                            }, void 0, false, {\n                                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().terminal),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().terminalHeader),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Ausgabe\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    output && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_CodeEditor_module_css__WEBPACK_IMPORTED_MODULE_5___default().stdout),\n                                        children: output\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mirellawlms/Desktop/FH/Bachelorarbeit/Turtle_Website/src/components/CodeEditor.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditor, \"JMt1nQ4zwWrBLFl7GjWm3/LF/M8=\");\n_c = CodeEditor;\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBR25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEQsRUFBRTtHQWhGV1Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29kZUVkaXRvci50c3g/ZjExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYVBsYXksIGZhUm90YXRlUmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9qb3lcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCwgUGF0aCwgVHVydGxlVmlld2VyIH0gZnJvbSBcIi4vVHVydGxlVmlld2VyXCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0NvZGVFZGl0b3IubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZztcbiAgdHVydGxlOiBib29sZWFuO1xuICBsYWJ5cmludGg/OiBGaWVsZFtdW107XG59XG5cbmNvbnN0IHNlcnZlciA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MjM2L3J1blwiO1xuXG5leHBvcnQgY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vY29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgY29uc3QgeyB0aXRsZSwgZGVmYXVsdFZhbHVlLCB0dXJ0bGUsIGxhYnlyaW50aH0gPSBwcm9wcztcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3V0cHV0LCBzZXRTdGRvdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlPFBhdGhbXT4oW10pO1xuICBjb25zdCBoYW5kbGVFZGl0b3JEaWRNb3VudCA9IChlZGl0b3I6IGFueSwgbW9uYWNvOiBhbnkpID0+IHtcbiAgICBlZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcjtcbiAgfTtcblxuICBjb25zdCBvblJ1biA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgZmV0Y2goc2VydmVyLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IGVkaXRvclJlZi5jdXJyZW50ID8gKGVkaXRvclJlZi5jdXJyZW50IGFzIGFueSkuZ2V0VmFsdWUoKSA6IFwiXCIsXG4gICAgICAgIC8qaWYgbGFieXJpbnRoIW51bGwgbWFjaCBlcnN0ZXMgYW5zb25zdGVuIG1hY2ggbGVlcmVuIFN0cmluZyovXG4gICAgICAgIGxhYnlyaW50aDogbGFieXJpbnRoP2xhYnlyaW50aC5tYXAodmFsdWU9PnZhbHVlLmpvaW4oXCIsXCIpKS5qb2luKFwiO1wiKTooXCJcIilcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0ZG91dChkYXRhLmNvbXBpbGUgKyBkYXRhLm91dHB1dCB8fCBcIlwiKTtcbiAgICAgICAgc2V0UGF0aChkYXRhLnBhdGggfHwgW10pO1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjVweFwifX1cbiAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICB2YXJpYW50PVwic29mdFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFN0ZG91dChcIlwiKTtcbiAgICAgICAgICAgICAgc2V0UGF0aChbXSk7XG4gICAgICAgICAgICB9fT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUm90YXRlUmlnaHR9IGhlaWdodD17MTJ9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCIgb25DbGljaz17b25SdW59PlxuICAgICAgICAgIHtpc1J1bm5pbmcgPyAoXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPVwic21cIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGxheX0gaGVpZ2h0PXsxMn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxFZGl0b3JcbiAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwiY3BwXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICB0aGVtZT1cInZzXCJcbiAgICAgICAgICBvbk1vdW50PXtoYW5kbGVFZGl0b3JEaWRNb3VudH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dHVydGxlICYmIChcbiAgICAgICAgICAgIDxUdXJ0bGVWaWV3ZXIgcGF0aD17cGF0aH0gZmllbGQ9e2xhYnlyaW50aCA/PyBbXX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlcm1pbmFsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVybWluYWxIZWFkZXJ9PlxuICAgICAgICAgICAgICA8cD5BdXNnYWJlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7b3V0cHV0ICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0ZG91dH0+e291dHB1dH08L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJmYVBsYXkiLCJmYVJvdGF0ZVJpZ2h0IiwiRm9udEF3ZXNvbWVJY29uIiwiQnV0dG9uIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUdXJ0bGVWaWV3ZXIiLCJFZGl0b3IiLCJzdHlsZXMiLCJzZXJ2ZXIiLCJDb2RlRWRpdG9yIiwicHJvcHMiLCJ0aXRsZSIsImRlZmF1bHRWYWx1ZSIsInR1cnRsZSIsImxhYnlyaW50aCIsImVkaXRvclJlZiIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsIm91dHB1dCIsInNldFN0ZG91dCIsInBhdGgiLCJzZXRQYXRoIiwiaGFuZGxlRWRpdG9yRGlkTW91bnQiLCJlZGl0b3IiLCJtb25hY28iLCJjdXJyZW50Iiwib25SdW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZGUiLCJnZXRWYWx1ZSIsIm1hcCIsInZhbHVlIiwiam9pbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29tcGlsZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaDIiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJoZWlnaHQiLCJzaXplIiwiY29udGVudCIsImRlZmF1bHRMYW5ndWFnZSIsInRoZW1lIiwib25Nb3VudCIsImZpZWxkIiwid2lkdGgiLCJ0ZXJtaW5hbCIsInRlcm1pbmFsSGVhZGVyIiwicCIsInNwYW4iLCJzdGRvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CodeEditor.tsx\n"));

/***/ })

});