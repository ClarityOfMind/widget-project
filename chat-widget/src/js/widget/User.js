'use strict';

import Message from './Message';

export default class User {

    constructor(id, type, data, text) {

        this.id = id;
        this.messages = [ new Message(type, data, text) ];
    }
}