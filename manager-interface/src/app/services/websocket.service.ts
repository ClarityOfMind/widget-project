import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public userInTouch: number;
  protected socket: WebSocket;
  public MessageEvent: Subject<any> = new Subject();
  public ServerMessages: Rx.Observable<any> = Rx.from( this.MessageEvent );

  /* public subject: Rx.Subject<MessageEvent>;
  public messages: Subject<any>;
 */
  public users = [];

  public users$: Rx.Observable<any> = Rx.of(this.users);

  constructor() {
    /* this.messages = this.connect(environment.PROD_CHAT_URL);
    this.messages.subscribe(res => {
      console.log(res);
      const data = JSON.parse(res.data);

      const newMessage = {
        type: data.messages[0].type,
        date: data.messages[0].time,
        text: data.messages[0].message
      };

      this.pushMessage(newMessage);
    }); */

    this.connect(environment.PROD_CHAT_URL);
    this.ServerMessages.subscribe(
      data => console.log(data)
    );
  }

  public connect(url) {
    this.socket = new WebSocket(url);

    this.socket.onmessage = this.MessageEvent.next;

    this.socket.onopen = () => {
      console.log('Successfully connected: ' + url);
      const usersRequest = {getAllUsers: true, id: 'manager'};
      this.socket.send(JSON.stringify(usersRequest));
    };
  }
  /* public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  public create (url): Rx.Subject<MessageEvent> {
    const ws = new WebSocket(url);

    const observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      });

      const observer = {
        next: (data: Object) => {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(data));
          }
        }
      };

      return Rx.Subject.create(observer, observable);
  } */

  setUserInTouch (id: number) {
    this.userInTouch = id;
  }

  sendMessage (text: string) {
    const message = {
      id: this.userInTouch,
      messages: new Message(text)
    };

    this.MessageEvent.next(message);
  }

  pushMessage (data): void {
    this.users[0].messages.push(data);
  }
}
