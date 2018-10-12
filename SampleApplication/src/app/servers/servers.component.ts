import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  //selector: '.app-servers'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  allowNewServer : boolean = false;
  name : string = "thomas";
  serverCreationStatus : string = "no Server created!";
  serverName : string = "initial server name";

  onCreateServer(){
    this.serverCreationStatus = "Server is created!!!";
  }

  onTyping(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  
}
