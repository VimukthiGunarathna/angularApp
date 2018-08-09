import { Component, OnInit } from '@angular/core';

@Component({
  // selector:[app-servers]  // selecting by attribute
  // selector:'.app-servers' // selecting by class
  selector: 'app-servers', // select by element
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {

    this.serverCreationStatus = 'Server was Created';
  }

}
