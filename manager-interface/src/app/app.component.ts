import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users = this._websocketService.users$;
  public messageControl: FormControl;

  constructor (private _websocketService: WebsocketService) {
  }

  ngOnInit () {
    this.users.subscribe(
      array => console.log(array)
    );
    this.messageControl = new FormControl('', [Validators.required]);
    console.log(typeof this.users);
  }

  sendMessage () {
    if (this.messageControl.valid) {
      this._websocketService.sendMessage(this.messageControl.value);
      this.messageControl.reset();
    }
  }
}
