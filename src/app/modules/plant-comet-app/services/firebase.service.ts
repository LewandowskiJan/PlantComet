import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth: firebase.auth.Auth;
  dbRef: firebase.database.Reference;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService, public afAuth: AngularFireAuth) {
  }


  getConnectionToFirebase() {
    this.afAuth.user.subscribe(user => {
      this.dbRef = firebase.database().ref(`/Users/${user.uid}`);
    });

    return this.afAuth;
  }

  getConnection() {
    return this.auth;
  }

  logOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  addTodo() {
    this.dbRef.child('todo').push('cosnowego');
  }

}
