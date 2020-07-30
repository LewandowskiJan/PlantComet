import { FirebaseService } from './../../../services/firebase.service';
import { UserDetails } from './../../../models/UserDetails';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Observable<any[]>;
  users: Observable<UserDetails[]>;
  plants: Observable<UserDetails[]>;

  constructor(
    public authService: AuthService,
    public firestore: AngularFirestore,
    public firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) {
    this.tasks = firestore.collection('tasks').valueChanges({ idField: 'id' }) as Observable<any[]>;
    this.users = firestore.collection(`users`).valueChanges() as Observable<UserDetails[]>;
    this.plants = firestore.collection(`plants`).valueChanges() as Observable<UserDetails[]>;
  }

  ngOnInit() { }

  deleteTask(id: string) {
    return this.firestore
      .collection('tasks')
      .doc(id)
      .delete().then(() => {
        console.log('Document successfully deleted!');
      }).catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  editTask(id: string) {
    const element = document.getElementById(id);
    if (element.className === 'hidden') {
      element.className = 'visible';
    } else {
      element.className = 'hidden';
    }

  }
}
