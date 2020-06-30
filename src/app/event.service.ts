import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore) { }

  getByUserRef(userid) {
    return this.firestore.collection('events', ref => ref.where('user', '==', userid));
  }

  update(event) {
    
    const employeeObject = {...event};
    this.firestore.doc('events/' + event.id).update(employeeObject);
  }

  delete(id) {
    this.firestore.doc('events/' + id).delete();
  }
}
