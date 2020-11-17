import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
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

	updateUser(editableUser, id) {
		this.firestore.doc(`users/${id}`).update(editableUser);
	}

	deleteUser(userId) {
		this.firestore.collection('users').doc(userId).delete();
	}
}
