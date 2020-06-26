module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/UploadButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UploadButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);





var UploadButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadButton, _Component);

  function UploadButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadButton.prototype;

  _proto.init = function init() {
    this.isLoading = false;
    this.isSuccess = false;
    this.isError = false;
    document.addEventListener('paste', this.paste.bind(this));
  };

  _proto.view = function view() {
    var _this = this;

    var attrs = {
      className: 'Button hasIcon imgur-upload-button',
      title: app.translator.trans('imgur-upload.forum.upload'),
      config: function config(el) {
        _this.domElement = el;
        $(el).tooltip();
      }
    };
    var buttonIcon;
    if (this.isLoading) buttonIcon = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button-icon'
    });else if (this.isSuccess) buttonIcon = flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-check green', {
      className: 'Button-icon'
    });else if (this.isError) buttonIcon = flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-times red', {
      className: 'Button-icon'
    });else buttonIcon = flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('far fa-image', {
      className: 'Button-icon'
    });
    var label = '';
    if (this.isLoading) label = app.translator.trans('imgur-upload.forum.loading');else if (this.isSuccess) label = app.translator.trans('imgur-upload.forum.done');else if (this.isError) label = app.translator.trans('imgur-upload.forum.error'); // When there is no label, the component element should be shown as a square button

    if (label == '') {
      attrs.className += ' Button--icon';
    }

    return m('div', attrs, [buttonIcon, m('span', {
      className: 'Button-label'
    }, label), m('form#imgur-upload-form', [m('input', {
      type: 'file',
      accept: 'image/*',
      onchange: this.formUpload.bind(this),
      // disable button while doing things
      disabled: this.isLoading || this.isSuccess || this.isError
    })])]);
  };

  _proto.paste = function paste(e) {
    if (this.isLoading) return;

    if (e.clipboardData && e.clipboardData.items) {
      var item = e.clipboardData.items[0];

      if (!item.type.startsWith('image')) {
        return;
      }

      var file = item.getAsFile();
      this.upload(file);
    }
  };

  _proto.formUpload = function formUpload(e) {
    var file = $(e.target)[0].files[0];
    this.upload(file);
  };

  _proto.upload = function upload(file) {
    $(this.domElement).tooltip('hide'); // force removal of the tooltip

    this.isLoading = true;
    m.redraw();
    var formData = new FormData();
    formData.append('image', file);
    $.ajax({
      url: app.forum.attribute('imgur-upload.API-URL'),
      headers: {
        'Authorization': 'Client-ID ' + app.forum.attribute('imgur-upload.client-id')
      },
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: this.success.bind(this),
      error: this.error.bind(this)
    });
  };

  _proto.success = function success(response) {
    var _this2 = this;

    $('#imgur-upload-form input').val('');
    this.isLoading = false;
    this.isSuccess = true;
    m.redraw();
    var imageLink = response.data.link;
    var previewLink = imageLink; // If the image is large, use a smaller version as the preview image

    if (response.data.width > 1024) {
      var extensionIndex = previewLink.lastIndexOf('.');
      previewLink = previewLink.slice(0, extensionIndex) + 'h' + previewLink.slice(extensionIndex);
    }

    var proxyimageLink = imageLink.replace("https://i.imgur.com", app.forum.attribute('imgur-upload.image-URL'));
    var proxypreviewLink = previewLink.replace("https://i.imgur.com", app.forum.attribute('imgur-upload.image-URL'));
    var stringToInject = "[URL=" + proxyimageLink + "][IMG]" + proxypreviewLink + "[/IMG][/URL]\n";
    this.props.textArea.insertAtCursor(stringToInject); // After a bit, re-enable upload

    setTimeout(function () {
      _this2.isSuccess = false;
      m.redraw();
    }, 2000);
  };

  _proto.error = function error(response) {
    var _this3 = this;

    $('#imgur-upload-form').val('');
    this.isLoading = false;
    this.isError = true;
    m.redraw(); // Output the error to the console, for debugging purposes

    console.error(response); // After a bit, re-enable upload

    setTimeout(function () {
      _this3.isError = false;
      m.redraw();
    }, 2000);
  };

  return UploadButton;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UploadButton */ "./src/forum/components/UploadButton.js");



app.initializers.add('imgur-upload', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'controlItems', function (items) {
    items.add('imgur-upload', m(_components_UploadButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      textArea: this
    }));
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map