import { UserDetails } from '../models/UserDetails';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: firebase.auth.Auth;
  user: User;
  userDetails: UserDetails;
  passwordOrEmailWrongError: boolean = false;
  emailExistsError: boolean = false;

  constructor(public afAuth: AngularFireAuth, public router: Router, private firestore: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password).catch(err => {
      this.passwordOrEmailWrongError = true;
    }).then(() => {
      setTimeout(() => this.router.navigate(['/plant-comet/dashboard']), 0);
    });
  }

  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password).catch(err => {
      this.emailExistsError = true;
    }).then(() => {
      this.sendEmailVerification();
    });
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    this.router.navigate(['/plant-comet/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/plant-comet/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    setTimeout(() => this.router.navigate(['/plant-comet/dashboard']), 0);
  }

  createAccountDetails(user: User) {
    this.userDetails = {
      userId: user.uid,
      firstName: "jan",
      lastName: "lewandowski",
      email: user.email,
      todo: [],
      plants: [],
    }
    this.firestore.collection('users').add(this.userDetails);
  }
}


