import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from 'src/app/common/utils/user';

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
		this.crudService.getUsers()
		.subscribe(result => {
			this.userData = result.map(item => {
				return {
					id: item.payload.doc.id,
					...item.payload.doc.data() as UserData
				}
			}),
         	error => { error.message; console.log("Something wrong with data!" + error) };
		})
	}

}
