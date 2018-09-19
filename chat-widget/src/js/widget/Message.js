'use strict';

export default class Message {

    constructor(type, data, text) {

        this.data = data;
        this.text = text;
        this.type = type;
    }
}

