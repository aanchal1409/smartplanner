import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-homeplanner')
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-homeplanner')
  }
}
