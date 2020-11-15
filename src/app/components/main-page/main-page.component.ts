import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userData: UserData[];

  constructor(
    public crudService: CrudService,
  ) { }

  ngOnInit(): void {
    this.getDataFromDatabase()
  }

  getDataFromDatabase() {
		// this.crudService.getUsers()
		// .subscribe(result => this.userData = result),
    // error => { error.message; console.log("Something wrong with data!" + error) };
	}
}
