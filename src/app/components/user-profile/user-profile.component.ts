import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  currentUser: UserData[];
  submitted: boolean;
  editUserForm: FormGroup;
  
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public crudService: CrudService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getDataFromDatabase();

      this.editUserForm = new FormGroup({
        name: new FormControl('', [Validators.pattern(/[A-z]/), Validators.required]),
        birth: new FormControl(''),
        phone1: new FormControl('', [Validators.pattern(/[0-9]/), Validators.required]),
        phone2: new FormControl('', [Validators.pattern(/[0-9]/), Validators.required]),
        email1: new FormControl('', [Validators.email]),
        email2: new FormControl('', [Validators.email]),
        adress: new FormControl(''),
        postcode: new FormControl('', [Validators.pattern(/[0-9]/)]),
      });
    });
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userForm = true;
  }

  getDataFromDatabase() {
		this.crudService.getUsers()
		.subscribe(result => {
			this.currentUser = result.map(e => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data() as UserData
				}
      }).filter(e => {return e.id === this.id});
      this.editForm();
    });
  }
  
  editUser() {
    this.userForm = true;
    this.user = this.currentUser[0];
    Object.keys(this.user).forEach((key) => {this.editUserForm.get(key)?.setValue(this.user[key])});
  }

  deleteUser() {
    this.crudService.deleteUser(this.id);
    this.router.navigate(['/main']);
  }

  hideForm() {
    this.userForm = false;
    this.submitted = false;
  }

  editForm() {

  }

  saveForm() {
    if (!this.editUserForm.valid) {
      return false;
    }
    if(this.editUserForm.valid) {
      this.crudService.updateUser(this.editUserForm.value, this.id);
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      this.userForm = false;
      this.submitted = false;
    }
  }
}
