import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './../models/user';

@Injectable()
export class AuthService {
  user: Observable<User | null>;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ){ 
    this.user = this.afAuth.authState
      .switchMap(this.user=>{
        if (user){
          ReturnStatement
        }
      })
   }
}
