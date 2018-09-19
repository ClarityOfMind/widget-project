'use strict';

export default class EventOpenCloseChat {

    openClose(isOpen){

        // Выбор чата для добавления/удаления класса 
        let chatId = document.getElementById('spchat');

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

}