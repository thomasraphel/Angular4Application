import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverStatus : string = 'Online';
  serverId : number = 200;
  serverCost ; number = 1000;

  getServerCost(){
    return this.serverCost;
  }

}
