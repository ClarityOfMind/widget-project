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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");

__webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

var _widget = __webpack_require__(/*! ./widget/widget */ "./src/js/widget/widget.js");

var _widget2 = _interopRequireDefault(_widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Получаю живую колекцию <script> 
var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];
// С помощью регулярного выражения удаляю левую часть url
var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

function parseQuery(query) {

    var Params = new Object();

    if (!query) {
        return Params;
    }

    var Pairs = query.split(/[;&]/);

    for (var i = 0; i < Pairs.length; i++) {

        var KeyVal = Pairs[i].split('=');

        if (!KeyVal || KeyVal.length != 2) continue;

        var key = KeyVal[0];
        var val = KeyVal[1];

        Params[key] = val;
    }
    return Params;
}

var widget = new _widget2.default();
widget.init(params.position);

/***/ }),

/***/ "./src/js/widget/CreateElement.js":
/*!****************************************!*\
  !*** ./src/js/widget/CreateElement.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateElement = function () {
    function CreateElement(name, post, linkImg) {
        _classCallCheck(this, CreateElement);

        var tagBody = document.body;

        // Создаю <div> тела чата
        var divChat = document.createElement('div');
        divChat.className = 'spchat spchat-hidden';
        divChat.setAttribute('id', 'spchat');

        // Кнопка закрыть
        var divBtnClose = document.createElement('div');
        divBtnClose.className = 'spchat__close';
        divBtnClose.setAttribute('id', 'spchat__close');
        divChat.appendChild(divBtnClose);

        // Секция описания менеджера
        var divHeader = document.createElement('div');
        divHeader.className = 'spchat__header';
        divHeader.setAttribute('id', 'spchat__header');
        // Обортка фото менеджера
        var divPhotoManager = document.createElement('div');
        divPhotoManager.className = 'spchat__photo-wrapp';
        // Фото менеджера
        var divPhoto = document.createElement('img');
        divPhoto.className = 'spchat__photo';
        divPhoto.setAttribute('src', linkImg);
        divPhotoManager.appendChild(divPhoto);
        divHeader.appendChild(divPhotoManager);
        // Имя и должность менеджера
        var divNameManager = document.createElement('div');
        divNameManager.className = 'spchat__manager';
        // Имя
        var divName = document.createElement('div');
        divName.className = 'spchat__manager-name';
        divName.innerHTML = name;
        divNameManager.appendChild(divName);
        // Должность
        var divPosition = document.createElement('div');
        divPosition.className = 'spchat__manager-position';
        divPosition.innerHTML = post;
        divNameManager.appendChild(divPosition);
        divHeader.appendChild(divNameManager);
        divChat.appendChild(divHeader);

        // Секция самого чата 
        var divHidden2 = document.createElement('div');
        divHidden2.className = 'spchat-hidden2';
        var divBody = document.createElement('div');
        divBody.className = 'spchat__body';
        divBody.setAttribute('id', 'spchat__body');
        // Обертка для сообщений
        var divMsg = document.createElement('div');
        divMsg.className = 'spchat__massages';
        divMsg.setAttribute('id', 'spchat__massages');
        divBody.appendChild(divMsg);
        divHidden2.appendChild(divBody);

        // Секция отправки сообщения
        var divFooter = document.createElement('div');
        divFooter.className = 'spchat__footer';
        // Textarea отправки сообщения
        var divFooterText = document.createElement('textarea');
        divFooterText.className = 'spchat__textarea';
        divFooterText.setAttribute('id', 'sendMessage');
        divFooterText.setAttribute('placeholder', 'Введите сообщение и нажмите Enter');
        divFooterText.setAttribute('autocomplete', 'off');
        divFooterText.setAttribute('maxlength', '1000');
        divFooter.appendChild(divFooterText);
        divHidden2.appendChild(divFooter);
        divChat.appendChild(divHidden2);

        // Вставляю в конец всех элементов в родителе BODY
        tagBody.appendChild(divChat);
    }

    // Создание html блока сообщения


    _createClass(CreateElement, [{
        key: 'createMessage',
        value: function createMessage(user, text) {

            // Создаю <div>
            var divMsg = document.createElement('div');
            divMsg.classList.add('spchat__massage');
            /**
             * Условия от кого сообщение (true/false)
             * взависимости от кого, добаляю разные css классы
             */
            if (user) {
                divMsg.classList.add('spchat__massage--user');
            } else {
                divMsg.classList.add('spchat__massage--manager');
            }

            // В созданный <div> вставляю текст сообщения
            divMsg.innerHTML = text;

            return divMsg;
        }
    }]);

    return CreateElement;
}();

exports.default = CreateElement;

/***/ }),

/***/ "./src/js/widget/CreateStyleSheet.js":
/*!*******************************************!*\
  !*** ./src/js/widget/CreateStyleSheet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateStyleSheet = function () {
    function CreateStyleSheet() {
        _classCallCheck(this, CreateStyleSheet);

        // Создаю <style>
        var styleTag = document.createElement('style');

        styleTag.innerHTML = '\n            .spchat { display: flex; z-index: 10;\n                flex-direction: column; position: fixed;\n                /* right: 30px; bottom: 10px;*/ width: 300px; height: 400px;\n                font-size: 14px; font-family: Arial, Helvetica, sans-serif;\n                box-shadow: 0 12px 25px 8px rgba(0, 0, 0, 0.17);\n                transition: all 0.3s cubic-bezier(0.39, 0.24, 0.21, 0.99);\n                transform-origin: 0 100%; overflow: hidden; }\n            .spchat__close { position: absolute; right: 10px; top: 10px; width: 26px;\n                height: 26px; border-radius: 50%; border: 2px solid #333;\n                background-color: #fff; cursor: pointer; box-sizing: border-box; }\n            .spchat__close:before, .spchat__close:after { position: absolute;\n                left: 10px; top: 5px; content: \'\'; height: 12px; width: 2px;\n                background-color: #333; }\n            .spchat__close:before { transform: rotate(45deg); }\n            .spchat__close:after { transform: rotate(-45deg); }\n            .spchat__header { display: flex; align-items: center; background-color: #23283c;\n                border-radius: 3px 3px 0 0; color: #f0f1f1; padding: 20px;\n                min-height: 75px; box-sizing: border-box; }\n            .spchat__photo { display: block; border-radius: 50%; margin-right: 20px;\n                height: 50px; width: 50px; }\n            .spchat__manager-name { margin-bottom: 5px; }\n            .spchat__manager-position { font-size: 12px; opacity: 0.7; }\n            .spchat__body { background-color: #fff; height: 245px; overflow-x: hidden;\n                overflow-y: scroll; padding: 10px 5px; }\n            .spchat__massage-wrap { position: relative; margin: 5px 0; }\n            .spchat__massage-wrap:after { visibility: hidden; display: block;\n                font-size: 0; content: \'\'; clear: both; height: 0; }\n            .spchat__footer { min-height: 80px; background-color: #eef1f5;\n                padding: 10px 15px; }\n            .spchat__textarea {height: 60px; padding: 5px; overflow: hidden;\n                overflow-y: auto; width: 270px; border: 1px solid #299f53;\n                border-radius: 3px; resize: none; color: #545d6b;\n                margin-bottom: 10px; line-height: 15px; box-sizing: border-box; }\n            .spchat-hidden { height: 70px; cursor: pointer; }\n            .spchat-hidden2 { transition: all 0.3s; transform-origin: top;\n                transform: scaleY(1); }\n            .spchat-hidden .spchat-hidden2 { transform: scaleY(0); }\n            .rb { right: 30px; bottom: 10px;}\n            .lb { left: 30px; bottom: 10px;}\n            .rt { right: 30px; top: 10px;}\n            .lt { left: 30px; top: 10px;}\n            .spchat__massage { color: #f0f1f1; border-radius: 3px;\n                background-color: #e4eefd; width: 85%; /*max-width: 210px;*/\n                padding: 7px 11px; margin: 5px 0; margin-right: 11px;\n                animation-duration: 0.4s; animation-timing-function: cubic-bezier(0, 0.79, 0.34, 1.38); }\n            .spchat__massage:after { content: \'\'; position: absolute; width: 0;\n                height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }\n            .spchat__massage--manager { position: relative; background-color: #3cb868;\n                float: left; text-align: left; margin-left: 11px;\n                animation-name: showMsgMng; }\n            .spchat__massage--manager:after { left: -4px; top: 5px;\n                border-right: 5px solid #3cb868; }\n            .spchat__massage--user { position: relative; background-color: #e4eefd;\n                float: right; color: #414243; text-align: right; margin-right: 11px;\n                animation-name: showMsgUser; }\n            .spchat__massage--user:after { right: -5px; top: 5px; border-left: 5px solid #e4eefd; }\n            @keyframes showMsgMng { from { left: -240px; } to { left: 0px; } }\n            @keyframes showMsgUser { from { right: -240px; } to { right: 0; } }';

        // Вставляю <style> в head
        document.head.appendChild(styleTag);
    }

    _createClass(CreateStyleSheet, [{
        key: 'getClassPosition',
        value: function getClassPosition(pos) {
            var divChat = document.getElementById('spchat');
            // let styleSheet = styleTag.sheet

            switch (pos) {
                case 'lb':
                    // styleSheet.insertRule(" .lb {left: 30px; bottom: 10px;} ", 0);
                    divChat.classList.add('lb');
                    break;
                case 'rt':
                    // styleSheet.insertRule(" .rt { font-style: italic } ", 0);
                    divChat.classList.add('rt');
                    break;
                case 'lt':
                    // styleSheet.insertRule(" .lt { font-style: italic } ", 0);
                    divChat.classList.add('lt');
                    break;
                default:
                    console.log('Стиль по умолчанию');
                    // styleSheet.insertRule(" .rb {right: 30px; bottom: 10px;} ", 0);
                    divChat.classList.add('rb');
            }
        }
    }]);

    return CreateStyleSheet;
}();

exports.default = CreateStyleSheet;

/***/ }),

/***/ "./src/js/widget/EventOpenCloseChat.js":
/*!*********************************************!*\
  !*** ./src/js/widget/EventOpenCloseChat.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventOpenCloseChat = function () {
            function EventOpenCloseChat() {
                        _classCallCheck(this, EventOpenCloseChat);
            }

            _createClass(EventOpenCloseChat, [{
                        key: 'openClose',
                        value: function openClose(isOpen) {

                                    // Выбор чата для добавления/удаления класса 
                                    var chatId = document.getElementById('spchat');

                                    // проверка, открыт ли чат
                                    if (!isOpen) {

                                                // удаляю класс
                                                chatId.classList.remove('spchat-hidden');

                                                return true;
                                    } else {

                                                // добавляю класс
                                                chatId.classList.add('spchat-hidden');

                                                return false;
                                    }
                        }
            }]);

            return EventOpenCloseChat;
}();

exports.default = EventOpenCloseChat;

/***/ }),

/***/ "./src/js/widget/Message.js":
/*!**********************************!*\
  !*** ./src/js/widget/Message.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(type, data, text) {
    _classCallCheck(this, Message);

    this.data = data;
    this.text = text;
    this.type = type;
};

exports.default = Message;

/***/ }),

/***/ "./src/js/widget/RandomMessage.js":
/*!****************************************!*\
  !*** ./src/js/widget/RandomMessage.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomMessage = function () {
    function RandomMessage() {
        _classCallCheck(this, RandomMessage);
    }

    _createClass(RandomMessage, [{
        key: 'random',
        value: function random(lengthArray) {
            var rand = 0 - 0.5 + Math.random() * (lengthArray - 0 + 1);
            rand = Math.round(rand);
            // Если ссгенерировано -0, тогда присваеваем 0
            if (rand === -0) rand = 0;

            return rand;
        }
    }]);

    return RandomMessage;
}();

exports.default = RandomMessage;

/***/ }),

/***/ "./src/js/widget/ShowMessage.js":
/*!**************************************!*\
  !*** ./src/js/widget/ShowMessage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShowMessage = function () {
    function ShowMessage() {
        _classCallCheck(this, ShowMessage);
    }

    _createClass(ShowMessage, [{
        key: 'show',
        value: function show(createdElem) {
            // Поиск элемента куда вставить 
            var divMsg = document.getElementById('spchat__massages');
            // Вставляю в конец всех элементов в родителе
            divMsg.appendChild(createdElem);
        }
    }]);

    return ShowMessage;
}();

exports.default = ShowMessage;

/***/ }),

/***/ "./src/js/widget/User.js":
/*!*******************************!*\
  !*** ./src/js/widget/User.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Message = __webpack_require__(/*! ./Message */ "./src/js/widget/Message.js");

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(id, type, data, text) {
    _classCallCheck(this, User);

    this.id = id;
    this.messages = [new _Message2.default(type, data, text)];
};

exports.default = User;

/***/ }),

/***/ "./src/js/widget/widget.js":
/*!*********************************!*\
  !*** ./src/js/widget/widget.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CreateStyleSheet = __webpack_require__(/*! ./CreateStyleSheet */ "./src/js/widget/CreateStyleSheet.js");

var _CreateStyleSheet2 = _interopRequireDefault(_CreateStyleSheet);

var _RandomMessage = __webpack_require__(/*! ./RandomMessage */ "./src/js/widget/RandomMessage.js");

var _RandomMessage2 = _interopRequireDefault(_RandomMessage);

var _CreateElement = __webpack_require__(/*! ./CreateElement */ "./src/js/widget/CreateElement.js");

var _CreateElement2 = _interopRequireDefault(_CreateElement);

var _ShowMessage = __webpack_require__(/*! ./ShowMessage */ "./src/js/widget/ShowMessage.js");

var _ShowMessage2 = _interopRequireDefault(_ShowMessage);

var _EventOpenCloseChat = __webpack_require__(/*! ./EventOpenCloseChat */ "./src/js/widget/EventOpenCloseChat.js");

var _EventOpenCloseChat2 = _interopRequireDefault(_EventOpenCloseChat);

var _User = __webpack_require__(/*! ./User */ "./src/js/widget/User.js");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = function () {
        function Widget() {
                _classCallCheck(this, Widget);

                // Проверка поддержки WebSocket 
                if (!window.WebSocket) {
                        document.body.innerHTML = 'WebSocket is not supported in this browser.';
                }
                // 
                this.socket = new WebSocket('ws://localhost:3001');

                // Получаю из localStorage значение
                this.storageIdUser = localStorage.getItem('widget-user');
                // Если нет, устанавливаю
                if (!this.storageIdUser) {
                        localStorage.setItem('widget-user', '' + String(Math.random()).slice(2) + Date.now());
                        this.storageIdUser = localStorage.getItem('widget-user');
                }

                // Ищю кнопку textarea
                this.sendMessage = document.getElementById('sendMessage');
        }

        _createClass(Widget, [{
                key: 'init',
                value: function init(posWidget) {

                        var id = void 0;

                        // Класс создания и подключения <style>
                        var createStyleSheet = new _CreateStyleSheet2.default();

                        // Класс генерации чисел 
                        var randomMessage = new _RandomMessage2.default();

                        // Класс создания html элементов
                        var сreateElement = new _CreateElement2.default('Артем Чичерин', 'DB Engineer', 'assets/img/news-01.jpg');

                        // Класс показа сообщений в чате
                        var showMessage = new _ShowMessage2.default();

                        //
                        var eventOpenCloseChat = new _EventOpenCloseChat2.default();

                        //
                        createStyleSheet.getClassPosition(posWidget);

                        function firstMsg(message) {

                                setTimeout(function () {

                                        var divMsg = сreateElement.createMessage(false, message);
                                        // Показываю сообщение
                                        showMessage.show(divMsg);
                                        // Добавляю в массив сообщение
                                        messageArray.push({ name: 'manager', msg: message });
                                }, 700);
                        }

                        // function replyAi(){
                        //     setTimeout(function(){
                        //         // генерирую случайное число, по которому выбираю сообщение из массива
                        //         let msgText = arrayMesgAi[ randomMessage.random(arrayMesgAi.length-1) ]; 

                        //         // создаю HTML сообщения
                        //         let msg = сreateElement.createMessage(false, msgText);

                        //         // показываю 
                        //         showMessage.show(msg);

                        //         // Добавляю в массив сообщение
                        //         messageArray.push({name: 'manager', msg: msgText})

                        //         // Автопрокрутка скролла
                        //         let scrollBodyMessage = document.getElementById('spchat__body');
                        //         scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

                        //     }, 1000)

                        // }
                        /**************START******************/

                        // Флаг online
                        var onlineUser = false;

                        // Флаг, чат открыт/закрыт
                        var chatOpen = false;

                        // Выбор кнопки закрыть для закрытия чата 
                        var chatIdClose = document.getElementById('spchat__close');

                        // Выбор header чата
                        var chatIdHead = document.getElementById('spchat__header');

                        // Флаг, ответа пользователя
                        var userReply = false;

                        //
                        var messageArray = [];

                        // Временный массив ответов менеджера
                        var arrayMesgAi = [' Как к Вам обращаться ', ' Мне необходимо время на уточнение информации ', ' Пока жду ответа от руководства, могу рассказать анекдот ', ' Одну минуту, пожайлуста ', ' Время ожидания ответа истекло. Попробуйте обратиться позже ', ' Сообщите свой e-mail, я на него позже отвечу', ' Как с Вам связаться?', ' Прошу Вас подождать, я отвечу через несколько минут '];

                        // Событие на загрузку документа
                        document.addEventListener('DOMContentLoaded', listenerDOMContentLoaded);

                        function listenerDOMContentLoaded() {

                                // через 3,5сек выполнить 
                                setTimeout(function () {
                                        // Если чат закрыть, то открыть
                                        if (!chatOpen) {

                                                // chatOpen = eventOpenCloseChat.openClose(chatOpen);
                                                listenerOpenClose();

                                                console.log('3.5');
                                        }
                                }, 3500);
                        }

                        // // Событие на активность документа
                        // window.addEventListener("focus", function() {

                        //     if (onlineUser) {
                        //         // Открыть чат автоматически по истечению 3,5с
                        //         setTimeout(function(){
                        //             eventOpenChat();
                        //             console.log('setTimeout - ok') 
                        //         }, 4500);
                        //     }

                        //     console.log('active') 
                        // });

                        // // Событие на уход со страницы
                        // window.addEventListener("blur", function() {
                        //     onlineUser = true;
                        // });


                        // Вешаю событие клик на header 
                        chatIdHead.addEventListener('click', listenerOpenClose);

                        function listenerOpenClose() {

                                chatOpen = eventOpenCloseChat.openClose(chatOpen);

                                if (chatOpen) {

                                        // удаляю прослушку события по header чата
                                        chatIdHead.removeEventListener('click', listenerOpenClose);

                                        // Вешаю прослушку события на кпонку закрытие
                                        chatIdClose.addEventListener('click', listenerOpenClose);

                                        // Пустой ли массив сообщений
                                        if (messageArray.length === 0) {
                                                // Функция 
                                                firstMsg('Здравствуйте! Чем я могу вам помочь?');
                                        }
                                        console.log('удалить событие на header и добавлено на close');
                                } else {
                                        // Вешаю событие клик на header 
                                        chatIdHead.addEventListener('click', listenerOpenClose);
                                        // удаляю прослушку события на кпонку закрытие
                                        chatIdClose.removeEventListener('click', listenerOpenClose);
                                        console.log('добавить');
                                }
                        };

                        // Вешаю событиние на Enter
                        sendMessage.addEventListener('keydown', listenerSendMessage.bind(this));

                        function listenerSendMessage(event) {

                                // Если нажата кнопка Enter(13)
                                if (event.keyCode === 13) {

                                        // Отменяю перенос строки, действие по умолчанию
                                        event.preventDefault();

                                        // Если сообщение не пустое
                                        if (event.target.value !== '') {

                                                // Создаю html разметку с собщением 
                                                var msg = сreateElement.createMessage(true, event.target.value);

                                                // Показываю в чате
                                                showMessage.show(msg);
                                                // Добавляю в локальный массив
                                                messageArray.push({ name: 'user', msg: event.target.value });

                                                // Отправляю сообщение по websocket
                                                var msgString = JSON.stringify(new _User2.default(this.storageIdUser, 'user', Date.now(), event.target.value));

                                                this.socket.send(msgString);

                                                // Ответа манагера
                                                // replyAi();
                                        }

                                        // Автопрокрутка скролла
                                        var scrollBodyMessage = document.getElementById('spchat__body');
                                        scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

                                        // Сбрасываю значение поля
                                        sendMessage.value = '';
                                }
                        }

                        this.socket.onmessage = function (event) {

                                var messageFromManager = JSON.parse(event.data);

                                var msg = сreateElement.createMessage(false, messageFromManager.messages[0].message);
                                showMessage.show(msg);

                                // Добавляем в локальный массив переписки
                                messageArray.push({ name: 'manager', msg: messageFromManager.messages[0].message });
                                console.log(messageArray);

                                // Автопрокрутка скролла
                                var scrollBodyMessage = document.getElementById('spchat__body');
                                scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;
                        };
                }
        }]);

        return Widget;
}();

exports.default = Widget;

/***/ })

/******/ });
//# sourceMappingURL=script.js.map