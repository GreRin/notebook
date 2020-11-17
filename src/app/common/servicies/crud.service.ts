import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { UserData } from '../../common/utils/user';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

	editableUser: UserData;

  	constructor(private firestore: AngularFirestore) { }

  	createNewUser(value) {
    	return this.firestore.collection('users').add(value);
	}

	getUsers() {
    	return this.firestore.collection('users').snapshotChanges();
	}

	updateUser(editableUser) {
		this.firestore.doc(`users/${editableUser.id}`).update(editableUser);
	}

	deleteUser(userId) {
		this.firestore.collection('users').doc(userId).delete();
	}
}
