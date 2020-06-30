import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userservice: UserserviceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.userservice.logout();
  }
}
