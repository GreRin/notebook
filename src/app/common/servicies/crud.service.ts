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
    	return this.firestore.collection('users').valueChanges();
	}

	// updateUser(editableQuestion) {
	// 	this.firestore.doc(`users/${editableQuestion.id}`).update(editableQuestion);
	// }

	// deleteUser(questionId) {
	// 	this.firestore.collection('users').doc(questionId).delete();
	// }
}
