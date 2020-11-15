import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userDialog: boolean;

  users: UserData[];

  user: UserData;

  selectedUser: UserData[];

  submitted: boolean;
 

  constructor(
    public crudService: CrudService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getDataFromDatabase()
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  getDataFromDatabase() {
		this.crudService.getUsers()
		.subscribe(result => this.users = result.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data() as UserData
      }}
    )),
    error => { error.message; console.log("Something wrong with data!" + error) };
  }

  editUser(user: UserData) {
    this.user = {...user};
    this.userDialog = true;
  }
  
  deleteUser(user: UserData) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + user.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.users = this.users.filter(val => val.id !== user.id);
            this.user = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
        }
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }
}
