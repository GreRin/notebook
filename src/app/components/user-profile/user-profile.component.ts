import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { createLessThan } from 'typescript';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userForm: boolean = false;
  users: UserData[];
  user: UserData;
  id: string;
  currentUser: UserData;
  submitted: boolean;
  
  constructor(
    private router: Router,
		private route: ActivatedRoute,
    public crudService: CrudService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getDataFromDatabase();
    });
  }

  getDataFromDatabase() {
		this.crudService.getUsers()
		.subscribe(result => {
			this.users = result.map(e => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data() as UserData
				}
			}).filter(e => {return e.id === this.id});
      console.log(this.currentUser);
    });
  }
  
  editUser(user: UserData) {
    this.user = {...user};
    this.userForm = true;
  }
  
  deleteUser(user: UserData) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + user.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.crudService.deleteUser(this.id);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
        },
    });
  }

  hideForm() {
    this.userForm = false;
    this.submitted = false;
  }

  saveForm() {
  //   if (this.user.name.trim()) {
  //       if (this.user.id) {
  //           this.users[this.findIndexById(this.user.id)] = this.user;                
  //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'user Updated', life: 3000});
  //       }
  //       else {
  //           this.user.id = this.createId();
  //           this.user.image = 'user-placeholder.svg';
  //           this.users.push(this.user);
  //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'user Created', life: 3000});
  //       }

  //       this.users = [...this.users];
  //       this.userForm = false;
  //       this.user = {};
  //   }
  }

}
