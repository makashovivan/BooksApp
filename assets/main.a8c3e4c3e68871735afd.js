/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  background-image: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n}\n\nul[class],\nol[class] {\n  list-style: none;\n}\n\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\narticle > * + * {\n  margin-top: 1em;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "312d95c8839ae15f087ee76da68a7b51.png");

/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7563dfaeb6eac31863b79ef220071995.gif");

/***/ }),

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 721:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(294));
var hooks_1 = __webpack_require__(573);
var BooksSlice_1 = __webpack_require__(691);
var BookListItem_1 = __importDefault(__webpack_require__(741));
var debounce_1 = __importDefault(__webpack_require__(808));
var styles_1 = __webpack_require__(3);
var SpinnerGif = __webpack_require__(971);
var DEBOUNCE_DELAY = 1000;
var App = function () {
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState(''), inputValue = _a[0], setInputValue = _a[1];
    var books = hooks_1.useAppSelector(BooksSlice_1.selectBooks);
    var isBooksLoading = hooks_1.useAppSelector(BooksSlice_1.selectStatus) === 'loading';
    var isNotFound = !!inputValue.length && !isBooksLoading && (books.length === 0);
    var onInputChange = function (event) {
        setInputValue(event.target.value);
        dispatch(BooksSlice_1.clearBooks());
        dispatch(BooksSlice_1.getBooksAsync(event.target.value));
    };
    var onInputChangeDebounced = debounce_1.default(onInputChange, DEBOUNCE_DELAY);
    return (react_1.default.createElement(styles_1.Wrapper, null,
        react_1.default.createElement(styles_1.SearchContainer, null,
            react_1.default.createElement(styles_1.SearchInput, { type: "text", onChange: onInputChangeDebounced, placeholder: "Book title" }),
            isBooksLoading && react_1.default.createElement(styles_1.Spinner, { src: SpinnerGif.default, alt: "spinner" }),
            react_1.default.createElement(styles_1.BooksList, null,
                isNotFound && react_1.default.createElement("div", null, "Books not found"),
                books.map(function (book, index) { return react_1.default.createElement(BookListItem_1.default, { book: book, key: index.toString() }); })))));
};
exports.default = App;


/***/ }),

/***/ 525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var App_1 = __webpack_require__(721);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(App_1).default; } }));


/***/ }),

/***/ 3:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BooksList = exports.Spinner = exports.SearchInput = exports.SearchContainer = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(__webpack_require__(163));
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 15px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  padding: 0 15px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
exports.SearchContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 400px;\n  padding: 1.4rem 2rem;\n  margin-top: 30px;\n  background: rgba(57, 63, 84, 0.8);\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 400px;\n  padding: 1.4rem 2rem;\n  margin-top: 30px;\n  background: rgba(57, 63, 84, 0.8);\n"])));
exports.SearchInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-grow: 1;\n  color: #BFD2FF;\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  vertical-align: middle;\n  border-style: none;\n  background: transparent;\n  outline: none;\n"], ["\n  flex-grow: 1;\n  color: #BFD2FF;\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  vertical-align: middle;\n  border-style: none;\n  background: transparent;\n  outline: none;\n"])));
exports.Spinner = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 26px;\n  height: 26px;\n"], ["\n  width: 26px;\n  height: 26px;\n"])));
exports.BooksList = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  list-style-type: none;\n  text-align: left;\n  font-size: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: aliceblue;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  list-style-type: none;\n  text-align: left;\n  font-size: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: aliceblue;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ 6:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCoverUrl = exports.fetchBooks = void 0;
function fetchBooks(titleQuery, limit) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch("http://openlibrary.org/search.json?title=" + titleQuery + "&limit=" + limit)];
                case 1:
                    res = _a.sent();
                    return [4, res.json()];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
exports.fetchBooks = fetchBooks;
var getCoverUrl = function (id, size) { return "http://covers.openlibrary.org/b/id/" + id + "-" + size + ".jpg"; };
exports.getCoverUrl = getCoverUrl;


/***/ }),

/***/ 382:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(294));
var react_dom_1 = __importDefault(__webpack_require__(935));
var styles_1 = __webpack_require__(618);
var ModalWindow = function (_a) {
    var children = _a.children, closeHandler = _a.closeHandler;
    var el = document.createElement('div');
    react_1.useEffect(function () {
        document.body.appendChild(el);
        return function () {
            document.body.removeChild(el);
        };
    }, []);
    return (react_dom_1.default.createPortal(react_1.default.createElement(styles_1.WindowOverlay, { onClick: closeHandler },
        react_1.default.createElement(styles_1.WindowContainer, { onClick: function (e) { return e.stopPropagation(); } }, children)), el));
};
exports.default = ModalWindow;


/***/ }),

/***/ 72:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var ModalWindow_1 = __webpack_require__(382);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(ModalWindow_1).default; } }));


/***/ }),

/***/ 618:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowContainer = exports.WindowOverlay = void 0;
var styled_components_1 = __importDefault(__webpack_require__(163));
exports.WindowOverlay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"], ["\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"])));
exports.WindowContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 999;\n  transform: translate(-50%, -50%);\n"], ["\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 999;\n  transform: translate(-50%, -50%);\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function debounce(fn, delay) {
    var timeout;
    function wrappedFunc() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var fnCall = function () { fn.apply(_this, args); };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, delay);
    }
    return wrappedFunc;
}
exports.default = debounce;


/***/ }),

/***/ 899:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(294));
var API_1 = __webpack_require__(6);
var styles_1 = __webpack_require__(689);
var SheetArrow_1 = __importDefault(__webpack_require__(852));
var BookCoverPlaceholder = __webpack_require__(69);
var BookFullInfo = function (_a) {
    var book = _a.book;
    var _b = react_1.useState(false), isSheetOpen = _b[0], setIsSheetOpen = _b[1];
    var publisher = book.publisher && book.publisher.length ? book.publisher[0] : '';
    var firstPublishYear = book.first_publish_year || null;
    var isbn = book.isbn && book.isbn.length ? book.isbn[0] : null;
    return (react_1.default.createElement("div", null,
        book.cover_i
            ? react_1.default.createElement("img", { src: API_1.getCoverUrl(book.cover_i, 'L'), alt: "cover", style: { maxWidth: '100%' } })
            : react_1.default.createElement("img", { src: BookCoverPlaceholder.default, alt: "cover" }),
        react_1.default.createElement(styles_1.BottomSheet, null,
            react_1.default.createElement(styles_1.SheetHeader, { onClick: function () { return setIsSheetOpen(function (isOpen) { return !isOpen; }); } },
                react_1.default.createElement(styles_1.ArrowContainer, null,
                    react_1.default.createElement(SheetArrow_1.default, { color: "white", isSheetOpen: isSheetOpen }))),
            isSheetOpen
                && (react_1.default.createElement(styles_1.BookInfoContainer, null,
                    publisher && (react_1.default.createElement("div", null,
                        'Publisher: ',
                        publisher)),
                    firstPublishYear && (react_1.default.createElement("div", null,
                        'Publish year: ',
                        firstPublishYear)),
                    isbn && (react_1.default.createElement("div", null,
                        'ISBN: ',
                        isbn)))))));
};
exports.default = BookFullInfo;


/***/ }),

/***/ 852:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(294));
var SheetArrow = function (_a) {
    var isSheetOpen = _a.isSheetOpen, color = _a.color;
    return (react_1.default.createElement("svg", { fill: "none", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: isSheetOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7', fill: color })));
};
exports.default = SheetArrow;


/***/ }),

/***/ 288:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var BookFullInfo_1 = __webpack_require__(899);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(BookFullInfo_1).default; } }));


/***/ }),

/***/ 689:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookInfoContainer = exports.ArrowContainer = exports.BottomSheet = exports.SheetHeader = void 0;
var styled_components_1 = __importDefault(__webpack_require__(163));
var SHEET_BACKGROUND = 'rgba(0, 0, 0, 0.8)';
exports.SheetHeader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 40px;\n  border-radius: 13px 13px 0px 0px;\n  border-top: 1px solid white;\n  background-color: ", ";\n  text-align: center;\n"], ["\n  height: 40px;\n  border-radius: 13px 13px 0px 0px;\n  border-top: 1px solid white;\n  background-color: ", ";\n  text-align: center;\n"])), SHEET_BACKGROUND);
exports.BottomSheet = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n"], ["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n"])));
exports.ArrowContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n"])));
exports.BookInfoContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #BFD2FF;\n  font-size: 1.4rem;\n  padding: 1rem;\n  background-color: ", ";\n"], ["\n  color: #BFD2FF;\n  font-size: 1.4rem;\n  padding: 1rem;\n  background-color: ", ";\n"])), SHEET_BACKGROUND);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ 241:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(294));
var API_1 = __webpack_require__(6);
var styles_1 = __webpack_require__(206);
var ModalWindow_1 = __importDefault(__webpack_require__(72));
var BookFullInfo_1 = __importDefault(__webpack_require__(288));
var BookCoverPlaceholder = __webpack_require__(69);
var BookListItem = function (_a) {
    var book = _a.book;
    var _b = react_1.useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var authorsString = book.author_name ? book.author_name.join(', ') : '';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.BookListItemContainer, { onClick: function () { setIsModalOpen(true); } },
            react_1.default.createElement(styles_1.CoverContainer, null, book.cover_i
                ? react_1.default.createElement("img", { src: API_1.getCoverUrl(book.cover_i, 'S'), alt: "cover", style: { maxWidth: '100%' } })
                : react_1.default.createElement("img", { src: BookCoverPlaceholder.default, alt: "cover placeholder", style: { width: 40 } })),
            react_1.default.createElement(styles_1.BookInfo, null,
                react_1.default.createElement(styles_1.BookTitle, { title: book.title }, book.title),
                react_1.default.createElement(styles_1.AuthorName, { title: authorsString }, authorsString))),
        isModalOpen
            && (react_1.default.createElement(ModalWindow_1.default, { closeHandler: function () { setIsModalOpen(false); } },
                react_1.default.createElement(BookFullInfo_1.default, { book: book })))));
};
exports.default = BookListItem;


/***/ }),

/***/ 741:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var BookListItem_1 = __webpack_require__(241);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(BookListItem_1).default; } }));


/***/ }),

/***/ 206:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorName = exports.BookTitle = exports.BookInfo = exports.CoverContainer = exports.BookListItemContainer = void 0;
var styled_components_1 = __importDefault(__webpack_require__(163));
exports.BookListItemContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1.4rem 2rem;\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: row;\n  background-color: #1b2336;\n  color: #BFD2FF;\n"], ["\n  padding: 1.4rem 2rem;\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: row;\n  background-color: #1b2336;\n  color: #BFD2FF;\n"])));
exports.CoverContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 58px;\n  margin-right: 20px;\n"], ["\n  min-width: 58px;\n  margin-right: 20px;\n"])));
exports.BookInfo = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  white-space: nowrap;\n  overflow: hidden;\n"])));
exports.BookTitle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-bottom: 10px;\n  font-size: 1.8rem;\n  font-weight: 600;\n"], ["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-bottom: 10px;\n  font-size: 1.8rem;\n  font-weight: 600;\n"])));
exports.AuthorName = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 1.2rem;\n  font-weight: 300;\n"], ["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 1.2rem;\n  font-weight: 300;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ 629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(294));
var react_dom_1 = __importDefault(__webpack_require__(935));
var react_redux_1 = __webpack_require__(940);
var store_1 = __webpack_require__(54);
var App_1 = __importDefault(__webpack_require__(525));
__webpack_require__(548);
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(App_1.default, null))), document.getElementById('root'));


/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = __webpack_require__(940);
var useAppDispatch = function () { return react_redux_1.useDispatch(); };
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;


/***/ }),

/***/ 691:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectStatus = exports.selectBooks = exports.clearBooks = exports.booksSlice = exports.getBooksAsync = void 0;
var toolkit_1 = __webpack_require__(355);
var API_1 = __webpack_require__(6);
var initialState = {
    books: [],
    status: 'idle',
};
exports.getBooksAsync = toolkit_1.createAsyncThunk('books/fetchBooks', function (value) { return __awaiter(void 0, void 0, void 0, function () {
    var books;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!value)
                    return [2, { docs: [] }];
                value = value.replace(/\s+/g, '+');
                return [4, API_1.fetchBooks(value, 5)];
            case 1:
                books = _a.sent();
                return [2, books];
        }
    });
}); });
exports.booksSlice = toolkit_1.createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        clearBooks: function (state) {
            state.books = [];
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(exports.getBooksAsync.pending, function (state) {
            state.status = 'loading';
        })
            .addCase(exports.getBooksAsync.fulfilled, function (state, action) {
            state.status = 'idle';
            state.books = action.payload.docs || [];
        })
            .addCase(exports.getBooksAsync.rejected, function (state) {
            state.status = 'failed';
        });
    },
});
exports.clearBooks = exports.booksSlice.actions.clearBooks;
var selectBooks = function (state) { return state.books.books; };
exports.selectBooks = selectBooks;
var selectStatus = function (state) { return state.books.status; };
exports.selectStatus = selectStatus;
exports.default = exports.booksSlice.reducer;


/***/ }),

/***/ 54:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
var toolkit_1 = __webpack_require__(355);
var BooksSlice_1 = __importDefault(__webpack_require__(691));
exports.store = toolkit_1.configureStore({
    reducer: {
        books: BooksSlice_1.default,
    },
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbooksapp"] = self["webpackChunkbooksapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(629)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;