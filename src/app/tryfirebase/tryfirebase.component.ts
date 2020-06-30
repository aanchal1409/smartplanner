import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tryfirebase',
  templateUrl: './tryfirebase.component.html',
  styleUrls: ['./tryfirebase.component.css']
})
export class TryfirebaseComponent implements OnInit {
public items:Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.items=db.collection('/items').valueChanges();
  }

  ngOnInit(): void {
  }

}