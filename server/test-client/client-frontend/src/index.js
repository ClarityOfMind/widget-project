if (!window.WebSocket) {
    document.body.innerHTML = 'WebSocket is not supported in this browser.';
}
const socket = new WebSocket('ws://localhost:8081');

document.forms.widget.onsubmit = function() {

    let storedUser = localStorage.getItem('widget-user')
    if (!storedUser) {
        localStorage.setItem('widget-user', `${String(Math.random()).slice(2)}${Date.now()}`)
        storedUser = localStorage.getItem('widget-user')
    }

    let dataToSend = {
        type: 'user',
        id: storedUser,
        message: this.message.value,
        time: new Date()
    } 
    return new Promise((resolve, reject) => {            
        connect('localhost', '8081').then(server => {
            server.send(JSON.stringify(dataToSend));
        })
    })
};

socket.onmessage = function(event) {
    const incomingMessage = event.data;
    showMessage(incomingMessage);
};

function showMessage(message) {
    const messageElem = document.createElement('div');
    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('incoming').appendChild(messageElem);
}

const connect = (url, port) => {
    return new Promise((resolve, reject) => {
        var server = new WebSocket(`ws://${url}:${port}`);
        server.onopen = function() {
            resolve(server);
        };
        server.onerror = function(err) {
            reject(err);
        };
    });
}
