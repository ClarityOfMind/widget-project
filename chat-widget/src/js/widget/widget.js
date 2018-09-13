'use strict';

import CreateStyleSheet from './CreateStyleSheet';
import RandomMessage from './RandomMessage';
import CreateElement from './CreateElement';
import ShowMessage from './ShowMessage';

export default class Widget {

    init(){

        // Класс создания и подключения <style>
        let createStyleSheet  = new CreateStyleSheet();
        // createStyleSheet.insertTagStyle();

        // Класс генерации чисел 
        let randomMessage = new RandomMessage();

        // Класс создания html элементов
        let сreateElement = new CreateElement();
        // Создаю HTML скилет чата 
        сreateElement.createBody();

        // Класс показа сообщений в чате
        let showMessage = new ShowMessage();
        
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
                    setTimeout(function(){
                    
                        let divMsg = сreateElement.createMessage(false, 'Здравствуйте! Чем я могу вам помочь?');
                        
                        // Показываю сообщение
                        showMessage.show(divMsg);

                        // Добавляю в массив сообщение
                        messageArray.push({name: 'manager', msg: 'Здравствуйте! Чем я могу вам помочь?'})
                    }, 700);

                }

            console.log('Open')
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

                console.log('Close')
            }
        }

        function replyAi(){
            setTimeout(function(){
                // генерирую случайное число, по которому выбираю сообщение из массива
                let msgText = arrayMesgAi[ randomMessage.random(arrayMesgAi.length-1) ]; 
             
                // создаю HTML сообщения
                let msg = сreateElement.createMessage(false, msgText);

                // показываю 
                showMessage.show(msg);

                // Добавляю в массив сообщение
                messageArray.push({name: 'manager', msg: msgText})

                // Автопрокрутка скролла
                let scrollBodyMessage = getElem('spchat__body');
                scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

            }, 1000)

        }
        /**************START******************/

        // Флаг online
        let onlineUser = false;

        // Флаг, чат открыт/закрыт
        let chatOpen = false;

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
        ]

        // Выбор чата для добавления класса 
        let chatId = getElem('spchat');

        // Выбор кнопки закрыть для закрытия чата 
        let chatIdClose = getElem('spchat__close');

        // Выбор header чата
        let chatIdHead = getElem('spchat__header');

        // Событие на загрузку документа
        document.addEventListener('DOMContentLoaded', function(){

            setTimeout(function(){
                eventOpenChat();
                console.log('setTimeout - ok') 
            }, 3500);

            console.log('ready') 
        });

        // Событие на активность документа
        window.addEventListener("focus", function() {

            if (onlineUser) {
                // Открыть чат автоматически по истечению 3,5с
                setTimeout(function(){
                    eventOpenChat();
                    console.log('setTimeout - ok') 
                }, 4500);
            }
            
            console.log('active') 
        });

        // Событие на уход со страницы
        window.addEventListener("blur", function() {
            onlineUser = true;
        });

        // Вешаю событие клик на header 
        chatIdHead.addEventListener('click', eventOpenChat);

        // Устанавливаю событие на Enter в поле textarea
        let sendMessage = getElem('sendMessage');

        // Вешаю событиние на Enter
        sendMessage.addEventListener('keydown', function(e){

            // Если нажата кнопка Enter(13)
            if (e.keyCode === 13) {
                // Отменяю перенос строки, действие по умолчанию
                e.preventDefault();

                // Если сообщение пустое
                if( this.value !== '') {

                    // Создаю html разметку с собщением 
                    let msg = сreateElement.createMessage(true, this.value);
                    // 
                    showMessage.show(msg);
                    messageArray.push({name: 'user', msg: this.value})
                
                    // Ответа манагера
                    replyAi();
                }

                // Автопрокрутка скролла
                let scrollBodyMessage = getElem('spchat__body');
                scrollBodyMessage.scrollTop = scrollBodyMessage.scrollHeight;

                // Сбрасываю значение поля
                sendMessage.value = '';

            }
        });
    }
}