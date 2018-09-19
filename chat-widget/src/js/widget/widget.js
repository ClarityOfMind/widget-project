'use strict';

import CreateStyleSheet from './CreateStyleSheet';
import RandomMessage from './RandomMessage';
import CreateElement from './CreateElement';
import ShowMessage from './ShowMessage';
import EventOpenCloseChat from './EventOpenCloseChat';
import User from './User';

export default class Widget {

    constructor(){
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
            localStorage.setItem('widget-user', `${String(Math.random()).slice(2)}${Date.now()}`)
            this.storageIdUser = localStorage.getItem('widget-user')
        }
 
        // Ищю кнопку textarea
        this.sendMessage = document.getElementById('sendMessage');
        
    }

    init(posWidget){

        let id;

        // Класс создания и подключения <style>
        let createStyleSheet  = new CreateStyleSheet();

        // Класс генерации чисел 
        let randomMessage = new RandomMessage();

        // Класс создания html элементов
        let сreateElement = new CreateElement('Артем Чичерин', 'DB Engineer', 'assets/img/news-01.jpg');

        // Класс показа сообщений в чате
        let showMessage = new ShowMessage();
        
        //
        let eventOpenCloseChat = new EventOpenCloseChat();

        //
        createStyleSheet.getClassPosition(posWidget);

        function firstMsg(message){

            setTimeout(function(){
            
                let divMsg = сreateElement.createMessage(false, message);
                // Показываю сообщение
                showMessage.show(divMsg);
                // Добавляю в массив сообщение
                messageArray.push({name: 'manager', msg: message})
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
        let onlineUser = false;

        // Флаг, чат открыт/закрыт
        let chatOpen = false;

        // Выбор кнопки закрыть для закрытия чата 
        let chatIdClose = document.getElementById('spchat__close');

        // Выбор header чата
        let chatIdHead = document.getElementById('spchat__header');
        
        // Флаг, ответа пользователя
        let userReply = false;

        //
        let messageArray = [];

        // Временный массив ответов менеджера
        let arrayMesgAi = [
            ' Как к Вам обращаться ',
            ' Мне необходимо время на уточнение информации ',
            ' Пока жду ответа от руководства, могу рассказать анекдот ',
            ' Одну минуту, пожайлуста ',
            ' Время ожидания ответа истекло. Попробуйте обратиться позже ',
            ' Сообщите свой e-mail, я на него позже отвечу',
            ' Как с Вам связаться?',
            ' Прошу Вас подождать, я отвечу через несколько минут '
        ];

        // Событие на загрузку документа
        document.addEventListener('DOMContentLoaded', listenerDOMContentLoaded);

        function listenerDOMContentLoaded(){

            // через 3,5сек выполнить 
            setTimeout(function(){
                // Если чат закрыть, то открыть
                if(!chatOpen) {

                    // chatOpen = eventOpenCloseChat.openClose(chatOpen);
                    listenerOpenClose()

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

        function listenerOpenClose(){

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
      
        function listenerSendMessage(event){

            // Если нажата кнопка Enter(13)
            if (event.keyCode === 13) {

                // Отменяю перенос строки, действие по умолчанию
                event.preventDefault();

                // Если сообщение не пустое
                if( event.target.value !== '') {

                    // Создаю html разметку с собщением 
                    let msg = сreateElement.createMessage(true, event.target.value);

                    // Показываю в чате
                    showMessage.show(msg); 
                    // Добавляю в локальный массив
                    messageArray.push({name: 'user', msg: event.target.value})

                    // Отправляю сообщение по websocket
                    let msgString = JSON.stringify(new User(this.storageIdUser,  'user', Date.now(), event.target.value))

                    this.socket.send(msgString);
                
                    // Ответа манагера
                    // replyAi();
                }

                // Автопрокрутка скролла
                let scrollBodyMessage = document.getElementById('spchat__body');
                scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

                // Сбрасываю значение поля
                sendMessage.value = '';
            }
        }


        this.socket.onmessage = event => {
            
            
            let messageFromManager = JSON.parse(event.data);

            let msg = сreateElement.createMessage(false, messageFromManager.messages[0].message);
            showMessage.show(msg);

            // Добавляем в локальный массив переписки
            messageArray.push({name: 'manager', msg: messageFromManager.messages[0].message})
            console.log(messageArray);
            
            // Автопрокрутка скролла
            let scrollBodyMessage = document.getElementById('spchat__body');
            scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;
            
        };

  
    };


    
}

