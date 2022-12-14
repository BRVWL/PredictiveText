"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var _server_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/server/trpc */ \"(api)/./src/server/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__, _server_trpc__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__, _server_trpc__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the API-handler of your app that contains all your API routes.\n */ \n\n\nconst appRouter = (0,_server_trpc__WEBPACK_IMPORTED_MODULE_2__.router)({\n    greeting: _server_trpc__WEBPACK_IMPORTED_MODULE_2__.publicProcedure.input(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({\n        name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullish()\n    })).query(({ input  })=>{\n        // This is what you're returning to your client\n        return {\n            text: `hello ${input?.name ?? \"world\"}`\n        };\n    })\n});\n// export API handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUNzRDtBQUMvQjtBQUNnQztBQUV4RCxNQUFNSSxZQUFZRCxvREFBTUEsQ0FBQztJQUN2QkUsVUFBVUgsK0RBRUYsQ0FDSkQseUNBQVEsQ0FBQztRQUNQTyxNQUFNUCx5Q0FBUSxHQUFHUyxPQUFPO0lBQzFCLElBRURDLEtBQUssQ0FBQyxDQUFDLEVBQUVMLE1BQUssRUFBRSxHQUFLO1FBQ3BCLCtDQUErQztRQUMvQyxPQUFPO1lBQ0xNLE1BQU0sQ0FBQyxNQUFNLEVBQUVOLE9BQU9FLFFBQVEsUUFBUSxDQUFDO1FBQ3pDO0lBQ0Y7QUFDSjtBQU1BLHFCQUFxQjtBQUNyQixpRUFBZVIsNEVBQTZCLENBQUM7SUFDM0NHLFFBQVFDO0lBQ1JVLGVBQWUsSUFBTyxFQUFDO0FBQ3pCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY3RpdmV0ZXh0Ly4vc3JjL3BhZ2VzL2FwaS90cnBjL1t0cnBjXS50cz9jZTUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyB0aGUgQVBJLWhhbmRsZXIgb2YgeW91ciBhcHAgdGhhdCBjb250YWlucyBhbGwgeW91ciBBUEkgcm91dGVzLlxuICovXG5pbXBvcnQgKiBhcyB0cnBjTmV4dCBmcm9tIFwiQHRycGMvc2VydmVyL2FkYXB0ZXJzL25leHRcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm9jZWR1cmUsIHJvdXRlciB9IGZyb20gXCJ+L3NlcnZlci90cnBjXCI7XG5cbmNvbnN0IGFwcFJvdXRlciA9IHJvdXRlcih7XG4gIGdyZWV0aW5nOiBwdWJsaWNQcm9jZWR1cmVcbiAgICAvLyBUaGlzIGlzIHRoZSBpbnB1dCBzY2hlbWEgb2YgeW91ciBwcm9jZWR1cmVcbiAgICAuaW5wdXQoXG4gICAgICB6Lm9iamVjdCh7XG4gICAgICAgIG5hbWU6IHouc3RyaW5nKCkubnVsbGlzaCgpLFxuICAgICAgfSlcbiAgICApXG4gICAgLnF1ZXJ5KCh7IGlucHV0IH0pID0+IHtcbiAgICAgIC8vIFRoaXMgaXMgd2hhdCB5b3UncmUgcmV0dXJuaW5nIHRvIHlvdXIgY2xpZW50XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBgaGVsbG8gJHtpbnB1dD8ubmFtZSA/PyBcIndvcmxkXCJ9YCxcbiAgICAgIH07XG4gICAgfSksXG59KTtcblxuLy8gZXhwb3J0IG9ubHkgdGhlIHR5cGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBOb25lIG9mIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gaXMgZXhwb3NlZCB0byB0aGUgY2xpZW50XG5leHBvcnQgdHlwZSBBcHBSb3V0ZXIgPSB0eXBlb2YgYXBwUm91dGVyO1xuXG4vLyBleHBvcnQgQVBJIGhhbmRsZXJcbmV4cG9ydCBkZWZhdWx0IHRycGNOZXh0LmNyZWF0ZU5leHRBcGlIYW5kbGVyKHtcbiAgcm91dGVyOiBhcHBSb3V0ZXIsXG4gIGNyZWF0ZUNvbnRleHQ6ICgpID0+ICh7fSksXG59KTtcbiJdLCJuYW1lcyI6WyJ0cnBjTmV4dCIsInoiLCJwdWJsaWNQcm9jZWR1cmUiLCJyb3V0ZXIiLCJhcHBSb3V0ZXIiLCJncmVldGluZyIsImlucHV0Iiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm51bGxpc2giLCJxdWVyeSIsInRleHQiLCJjcmVhdGVOZXh0QXBpSGFuZGxlciIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./src/server/trpc.ts":
/*!****************************!*\
  !*** ./src/server/trpc.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware),\n/* harmony export */   \"publicProcedure\": () => (/* binding */ publicProcedure),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/**\n * This is your entry point to setup the root configuration for tRPC on the server.\n * - `initTRPC` should only be used once per app.\n * - We export only the functionality that we use so we can enforce which base procedures should be used\n *\n * Learn how to create protected base procedures and other things below:\n * @see https://trpc.io/docs/v10/router\n * @see https://trpc.io/docs/v10/procedures\n */ \nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\n/**\n * Unprotected procedure\n **/ const publicProcedure = t.procedure;\nconst router = t.router;\nconst middleware = t.middleware;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3RycGMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztDQVFDLEdBQ3VDO0FBRXhDLE1BQU1DLElBQUlELHlEQUFlO0FBRXpCOztFQUVFLEdBQ0ssTUFBTUcsa0JBQWtCRixFQUFFRyxTQUFTLENBQUM7QUFFcEMsTUFBTUMsU0FBU0osRUFBRUksTUFBTSxDQUFDO0FBQ3hCLE1BQU1DLGFBQWFMLEVBQUVLLFVBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY3RpdmV0ZXh0Ly4vc3JjL3NlcnZlci90cnBjLnRzPzQ1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIHlvdXIgZW50cnkgcG9pbnQgdG8gc2V0dXAgdGhlIHJvb3QgY29uZmlndXJhdGlvbiBmb3IgdFJQQyBvbiB0aGUgc2VydmVyLlxuICogLSBgaW5pdFRSUENgIHNob3VsZCBvbmx5IGJlIHVzZWQgb25jZSBwZXIgYXBwLlxuICogLSBXZSBleHBvcnQgb25seSB0aGUgZnVuY3Rpb25hbGl0eSB0aGF0IHdlIHVzZSBzbyB3ZSBjYW4gZW5mb3JjZSB3aGljaCBiYXNlIHByb2NlZHVyZXMgc2hvdWxkIGJlIHVzZWRcbiAqXG4gKiBMZWFybiBob3cgdG8gY3JlYXRlIHByb3RlY3RlZCBiYXNlIHByb2NlZHVyZXMgYW5kIG90aGVyIHRoaW5ncyBiZWxvdzpcbiAqIEBzZWUgaHR0cHM6Ly90cnBjLmlvL2RvY3MvdjEwL3JvdXRlclxuICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy92MTAvcHJvY2VkdXJlc1xuICovXG5pbXBvcnQgeyBpbml0VFJQQyB9IGZyb20gXCJAdHJwYy9zZXJ2ZXJcIjtcblxuY29uc3QgdCA9IGluaXRUUlBDLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFVucHJvdGVjdGVkIHByb2NlZHVyZVxuICoqL1xuZXhwb3J0IGNvbnN0IHB1YmxpY1Byb2NlZHVyZSA9IHQucHJvY2VkdXJlO1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gdC5yb3V0ZXI7XG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IHQubWlkZGxld2FyZTtcbiJdLCJuYW1lcyI6WyJpbml0VFJQQyIsInQiLCJjcmVhdGUiLCJwdWJsaWNQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJyb3V0ZXIiLCJtaWRkbGV3YXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/trpc.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();