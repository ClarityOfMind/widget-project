'use strict';

import 'normalize.css';
import '../css/style.css';

import Widget from './widget/widget';

// Получаю живую колекцию <script> 
let scripts = document.getElementsByTagName('script');
let myScript = scripts[scripts.length - 1];
// С помощью регулярного выражения удаляю левую часть url
let queryString = myScript.src.replace(/^[^\?]+\??/,'');

let params = parseQuery(queryString);

function parseQuery (query){

    let Params = new Object();
    
    if (!query){
        return Params; 
    }

    let Pairs = query.split(/[;&]/);
    
    for (let i = 0; i < Pairs.length; i++ ){

        let KeyVal = Pairs[i].split('=');

        if (!KeyVal || KeyVal.length != 2) continue;

        let key = KeyVal[0];
        let val = KeyVal[1];

        Params[key] = val;
    }
    return Params;
}

let widget = new Widget;
widget.init(params.position);