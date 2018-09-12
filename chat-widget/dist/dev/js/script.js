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

var widget = new _widget2.default();
widget.init();

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
    function CreateElement() {
        _classCallCheck(this, CreateElement);
    }

    _createClass(CreateElement, [{
        key: 'createBody',
        value: function createBody() {

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
            divPhoto.setAttribute('src', 'assets/img/news-01.jpg');
            divPhotoManager.appendChild(divPhoto);
            divHeader.appendChild(divPhotoManager);
            // Имя и должность менеджера
            var divNameManager = document.createElement('div');
            divNameManager.className = 'spchat__manager';
            // Имя
            var divName = document.createElement('div');
            divName.className = 'spchat__manager-name';
            divName.innerHTML = 'Артем Чичерин';
            divNameManager.appendChild(divName);
            // Должность
            var divPosition = document.createElement('div');
            divPosition.className = 'spchat__manager-position';
            divPosition.innerHTML = 'DB Engineer';
            divNameManager.appendChild(divPosition);
            divHeader.appendChild(divNameManager);
            divChat.appendChild(divHeader);

            // Секция самого чата 
            var divBody = document.createElement('div');
            divBody.className = 'spchat__body';
            divBody.setAttribute('id', 'spchat__body');
            // Обертка для сообщений
            var divMsg = document.createElement('div');
            divMsg.className = 'spchat__massages';
            divMsg.setAttribute('id', 'spchat__massages');
            divBody.appendChild(divMsg);
            divChat.appendChild(divBody);

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
            divChat.appendChild(divFooter);

            // Вставляю в конец всех элементов в родителе BODY
            tagBody.appendChild(divChat);

            return divChat;
        }

        // Создание html блока сообщения

    }, {
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

var _RandomMessage = __webpack_require__(/*! ./RandomMessage */ "./src/js/widget/RandomMessage.js");

var _RandomMessage2 = _interopRequireDefault(_RandomMessage);

var _CreateElement = __webpack_require__(/*! ./CreateElement */ "./src/js/widget/CreateElement.js");

var _CreateElement2 = _interopRequireDefault(_CreateElement);

var _ShowMessage = __webpack_require__(/*! ./ShowMessage */ "./src/js/widget/ShowMessage.js");

var _ShowMessage2 = _interopRequireDefault(_ShowMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = function () {
        function Widget() {
                _classCallCheck(this, Widget);
        }

        _createClass(Widget, [{
                key: 'init',
                value: function init() {

                        // Класс генерации чисел 
                        var randomMessage = new _RandomMessage2.default();

                        // Класс создания html элементов
                        var сreateElement = new _CreateElement2.default();

                        // Класс показа сообщений в чате
                        var showMessage = new _ShowMessage2.default();

                        // Создаю HTML скилет чата 
                        сreateElement.createBody();

                        // Упрощаю поиск элемента
                        function getElem(id) {
                                return document.getElementById(id);
                        }

                        function eventOpenChat() {
                                // проверка, открыт ли чат
                                if (!chatOpen) {

                                        // удаляю класс
                                        chatId.classList.remove('spchat-hidden');

                                        // меняю флаг на открыт
                                        chatOpen = true;

                                        // удаляю прослушку события по header чата
                                        chatIdHead.removeEventListener('click', eventOpenChat);

                                        // вешаю прослушку события на кпонку закрытие
                                        chatIdClose.addEventListener('click', eventCloseChat);

                                        if (messageArray.length === 0) {
                                                setTimeout(function () {

                                                        var divMsg = сreateElement.createMessage(false, 'Здравствуйте! Чем я могу вам помочь?');

                                                        // Показываю сообщение
                                                        showMessage.show(divMsg);

                                                        // Добавляю в массив сообщение
                                                        messageArray.push({ name: 'manager', msg: 'Здравствуйте! Чем я могу вам помочь?' });
                                                }, 700);
                                        }

                                        console.log('Open');
                                }
                        }

                        function eventCloseChat() {
                                // проверка, открыт ли чат
                                if (chatOpen) {

                                        //Добавляю класс
                                        chatId.classList.add('spchat-hidden');

                                        // меняю флаг на закрыт
                                        chatOpen = false;

                                        // удаляю прослушку события на кпонку закрытие
                                        chatIdClose.removeEventListener('click', eventCloseChat);

                                        // вешаю прослушку события по header чата
                                        chatIdHead.addEventListener('click', eventOpenChat);

                                        console.log('Close');
                                }
                        }

                        function replyAi() {
                                setTimeout(function () {
                                        // генерирую случайное число, по которому выбираю сообщение из массива
                                        var msgText = arrayMesgAi[randomMessage.random(arrayMesgAi.length - 1)];

                                        // создаю HTML сообщения
                                        var msg = сreateElement.createMessage(false, msgText);

                                        // показываю 
                                        showMessage.show(msg);

                                        // Добавляю в массив сообщение
                                        messageArray.push({ name: 'manager', msg: msgText });

                                        // Автопрокрутка скролла
                                        var scrollBodyMessage = getElem('spchat__body');
                                        scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;
                                }, 1000);
                        }
                        /**************START******************/

                        // Флаг online
                        var onlineUser = false;

                        // Флаг, чат открыт/закрыт
                        var chatOpen = false;

                        // Флаг, ответа пользователя
                        var userReply = false;

                        //
                        var messageArray = [];

                        // Временный массив ответов менеджера
                        var arrayMesgAi = [' Как к Вам обращаться ', ' Мне необходимо время на уточнение информации ', ' Пока жду ответа от руководства, могу рассказать анекдот ', ' Одну минуту, пожайлуста ', ' Время ожидания ответа истекло. Попробуйте обратиться позже ', ' Сообщите свой e-mail, я на него позже отвечу', ' Как с Вам связаться?', ' Прошу Вас подождать, я отвечу через несколько минут '];

                        // Выбор чата для добавления класса 
                        var chatId = getElem('spchat');

                        // Выбор кнопки закрыть для закрытия чата 
                        var chatIdClose = getElem('spchat__close');

                        // Выбор header чата
                        var chatIdHead = getElem('spchat__header');

                        // Событие на загрузку документа
                        document.addEventListener('DOMContentLoaded', function () {

                                setTimeout(function () {
                                        eventOpenChat();
                                        console.log('setTimeout - ok');
                                }, 3500);

                                console.log('ready');
                        });

                        // Событие на активность документа
                        window.addEventListener("focus", function () {

                                if (onlineUser) {
                                        // Открыть чат автоматически по истечению 3,5с
                                        setTimeout(function () {
                                                eventOpenChat();
                                                console.log('setTimeout - ok');
                                        }, 4500);
                                }

                                console.log('active');
                        });

                        // Событие на уход со страницы
                        window.addEventListener("blur", function () {
                                onlineUser = true;
                        });

                        // Вешаю событие клик на header 
                        chatIdHead.addEventListener('click', eventOpenChat);

                        // Устанавливаю событие на Enter в поле textarea
                        var sendMessage = getElem('sendMessage');

                        // Вешаю событиние на Enter
                        sendMessage.addEventListener('keydown', function (e) {

                                // Если нажата кнопка Enter(13)
                                if (e.keyCode === 13) {
                                        // Отменяю перенос строки, действие по умолчанию
                                        e.preventDefault();

                                        // Если сообщение пустое
                                        if (this.value !== '') {

                                                // Создаю html разметку с собщением 
                                                var msg = сreateElement.createMessage(true, this.value);
                                                // 
                                                showMessage.show(msg);
                                                messageArray.push({ name: 'user', msg: this.value });

                                                // Ответа манагера
                                                replyAi();
                                        }

                                        // Автопрокрутка скролла
                                        var scrollBodyMessage = getElem('spchat__body');
                                        scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

                                        // Сбрасываю значение поля
                                        sendMessage.value = '';
                                }
                        });
                }
        }]);

        return Widget;
}();

exports.default = Widget;

/***/ })

/******/ });
//# sourceMappingURL=script.js.map