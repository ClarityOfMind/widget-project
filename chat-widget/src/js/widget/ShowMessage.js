'use strict';

export default class ShowMessage {

    show(createdElem){
        // Поиск элемента куда вставить 
        let divMsg = document.getElementById('spchat__massages');
        // Вставляю в конец всех элементов в родителе
        divMsg.appendChild(createdElem);
    }
}