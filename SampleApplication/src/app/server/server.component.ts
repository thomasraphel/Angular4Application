import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  serverStatus : string = 'offline';
  serverId : number = 200;
  serverCost ; number = 1000;
  

  

  getServerColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerCost(){
    return this.serverCost;
  }

}
