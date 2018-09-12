'use strict';

export default class CreateElement {

    createBody(){

        let tagBody = document.body;

        // Создаю <div> тела чата
        let divChat = document.createElement('div');
        divChat.className = 'spchat spchat-hidden';
        divChat.setAttribute('id', 'spchat')

        // Кнопка закрыть
        let divBtnClose = document.createElement('div');
        divBtnClose.className = 'spchat__close';
        divBtnClose.setAttribute('id', 'spchat__close')
        divChat.appendChild(divBtnClose);

        // Секция описания менеджера
        let divHeader = document.createElement('div');
        divHeader.className = 'spchat__header';
        divHeader.setAttribute('id', 'spchat__header')
            // Обортка фото менеджера
            let divPhotoManager = document.createElement('div');
            divPhotoManager.className = 'spchat__photo-wrapp';
                // Фото менеджера
                let divPhoto = document.createElement('img');
                divPhoto.className = 'spchat__photo';
                divPhoto.setAttribute('src', 'assets/img/news-01.jpg')
            divPhotoManager.appendChild(divPhoto);
        divHeader.appendChild(divPhotoManager);
            // Имя и должность менеджера
            let divNameManager = document.createElement('div');
            divNameManager.className = 'spchat__manager';
                // Имя
                let divName = document.createElement('div');
                divName.className = 'spchat__manager-name';
                divName.innerHTML = 'Артем Чичерин';
            divNameManager.appendChild(divName);
                // Должность
                let divPosition = document.createElement('div');
                divPosition.className = 'spchat__manager-position';
                divPosition.innerHTML = 'DB Engineer';
            divNameManager.appendChild(divPosition);
        divHeader.appendChild(divNameManager);
        divChat.appendChild(divHeader);

        // Секция самого чата 
        let divBody = document.createElement('div');
        divBody.className = 'spchat__body';
        divBody.setAttribute('id', 'spchat__body')
            // Обертка для сообщений
            let divMsg = document.createElement('div');
            divMsg.className = 'spchat__massages';
            divMsg.setAttribute('id', 'spchat__massages')
        divBody.appendChild(divMsg);
        divChat.appendChild(divBody);

        
        // Секция отправки сообщения
        let divFooter = document.createElement('div');
        divFooter.className = 'spchat__footer';
            // Textarea отправки сообщения
            let divFooterText = document.createElement('textarea');
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
    createMessage(user, text){

        // Создаю <div>
        let divMsg = document.createElement('div');
        divMsg.classList.add('spchat__massage');
        /**
         * Условия от кого сообщение (true/false)
         * взависимости от кого, добаляю разные css классы
         */ 
        if(user){
            divMsg.classList.add('spchat__massage--user');
        } else {
            divMsg.classList.add('spchat__massage--manager');
        }

        // В созданный <div> вставляю текст сообщения
        divMsg.innerHTML = text;
        
        return divMsg;
    }
}