
// Initialize Firebase
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");


//FIREBASE PART
const config = {
    apiKey: "AIzaSyCi6GgTgfvQn9N_n5U2VbCcLW0setuiCD4",
    authDomain: "widget-project-e0d47.firebaseapp.com",
    databaseURL: "https://widget-project-e0d47.firebaseio.com",
    projectId: "widget-project-e0d47",
    storageBucket: "widget-project-e0d47.appspot.com",
    messagingSenderId: "111641089365"
};
firebase.initializeApp(config);


function writeUserData({ id, type, message, time }) {
    console.log(`id: ${id}, type: ${type}, message: ${message}, time: ${time}`)
    let user = firebase.database().ref(`users/${id}`)
    let newMessage = user.push()

    newMessage.set({ type, message, time })
}



//WS part
const clients = {};

let WebSocketServer = new require('ws');
let webSocketServer = new WebSocketServer.Server({
  port: 8081
});

console.log('server listens on port 8081')

webSocketServer.on('connection', ws => {
        let id = Date.now()
        clients[id] = ws;
        console.log(`new connection: ${id}`);
        
        ws.onmessage = event => {
            let data = JSON.parse(event.data)
            writeUserData(data)
        }
        
        ws.on('close', () => {
            console.log(`connection closed: ${id}`)
            delete clients[id]
        })
    }
)
