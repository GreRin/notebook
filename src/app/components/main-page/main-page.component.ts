import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  userForm: boolean;
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
    this.userForm = true;
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
}
