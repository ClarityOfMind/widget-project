import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public id: number;
  public users;
  public messages: any[];

  constructor(
    private activateRoute: ActivatedRoute,
    private _websocketService: WebsocketService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params.id;
      /* this.messages = this._websocketService.users[this.getMessages()].messages; */
    });
  }

  getMessages () {
    for (let i = 0; i < this._websocketService.users.length; i++) {
      if (+this.id === +this._websocketService.users[i].id) {
        return i;
      }
    }
  }
}
