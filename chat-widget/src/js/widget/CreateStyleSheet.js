'use strict';

export default class CreateStyleSheet {

    constructor(){

        // Создаю <style>
        let styleTag = document.createElement('style');

        styleTag.innerHTML = `
            .spchat { display: flex; z-index: 10;
                flex-direction: column; position: fixed;
                /* right: 30px; bottom: 10px;*/ width: 300px; height: 400px;
                font-size: 14px; font-family: Arial, Helvetica, sans-serif;
                box-shadow: 0 12px 25px 8px rgba(0, 0, 0, 0.17);
                transition: all 0.3s cubic-bezier(0.39, 0.24, 0.21, 0.99);
                transform-origin: 0 100%; overflow: hidden; }
            .spchat__close { position: absolute; right: 10px; top: 10px; width: 26px;
                height: 26px; border-radius: 50%; border: 2px solid #333;
                background-color: #fff; cursor: pointer; box-sizing: border-box; }
            .spchat__close:before, .spchat__close:after { position: absolute;
                left: 10px; top: 5px; content: ''; height: 12px; width: 2px;
                background-color: #333; }
            .spchat__close:before { transform: rotate(45deg); }
            .spchat__close:after { transform: rotate(-45deg); }
            .spchat__header { display: flex; align-items: center; background-color: #23283c;
                border-radius: 3px 3px 0 0; color: #f0f1f1; padding: 20px;
                min-height: 75px; box-sizing: border-box; }
            .spchat__photo { display: block; border-radius: 50%; margin-right: 20px;
                height: 50px; width: 50px; }
            .spchat__manager-name { margin-bottom: 5px; }
            .spchat__manager-position { font-size: 12px; opacity: 0.7; }
            .spchat__body { background-color: #fff; height: 245px; overflow-x: hidden;
                overflow-y: scroll; padding: 10px 5px; }
            .spchat__massage-wrap { position: relative; margin: 5px 0; }
            .spchat__massage-wrap:after { visibility: hidden; display: block;
                font-size: 0; content: ''; clear: both; height: 0; }
            .spchat__footer { min-height: 80px; background-color: #eef1f5;
                padding: 10px 15px; }
            .spchat__textarea {height: 60px; padding: 5px; overflow: hidden;
                overflow-y: auto; width: 270px; border: 1px solid #299f53;
                border-radius: 3px; resize: none; color: #545d6b;
                margin-bottom: 10px; line-height: 15px; box-sizing: border-box; }
            .spchat-hidden { height: 70px; cursor: pointer; }
            .spchat-hidden2 { transition: all 0.3s; transform-origin: top;
                transform: scaleY(1); }
            .spchat-hidden .spchat-hidden2 { transform: scaleY(0); }
            .rb { right: 30px; bottom: 10px;}
            .lb { left: 30px; bottom: 10px;}
            .rt { right: 30px; top: 10px;}
            .lt { left: 30px; top: 10px;}
            .spchat__massage { color: #f0f1f1; border-radius: 3px;
                background-color: #e4eefd; width: 85%; /*max-width: 210px;*/
                padding: 7px 11px; margin: 5px 0; margin-right: 11px;
                animation-duration: 0.4s; animation-timing-function: cubic-bezier(0, 0.79, 0.34, 1.38); }
            .spchat__massage:after { content: ''; position: absolute; width: 0;
                height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
            .spchat__massage--manager { position: relative; background-color: #3cb868;
                float: left; text-align: left; margin-left: 11px;
                animation-name: showMsgMng; }
            .spchat__massage--manager:after { left: -4px; top: 5px;
                border-right: 5px solid #3cb868; }
            .spchat__massage--user { position: relative; background-color: #e4eefd;
                float: right; color: #414243; text-align: right; margin-right: 11px;
                animation-name: showMsgUser; }
            .spchat__massage--user:after { right: -5px; top: 5px; border-left: 5px solid #e4eefd; }
            @keyframes showMsgMng { from { left: -240px; } to { left: 0px; } }
            @keyframes showMsgUser { from { right: -240px; } to { right: 0; } }`;

       // Вставляю <style> в head
        document.head.appendChild(styleTag);
    }

    getClassPosition(pos){
        let divChat = document.getElementById('spchat');
        // let styleSheet = styleTag.sheet

        switch(pos) {
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
                console.log( 'Стиль по умолчанию' );
                // styleSheet.insertRule(" .rb {right: 30px; bottom: 10px;} ", 0);
                divChat.classList.add('rb');
        }
    }


}