import { Component } from '../../../node_modules/@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId = 10;
  serverStatus: String = 'Offline';

  getServerStatus() {


    return this.serverStatus;
  }
}
