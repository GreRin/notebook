import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/common/servicies/crud.service';
import { UserData } from '../../common/utils/user';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  closeResult: string;
  name: any;
  birth?:Date;
  phone1: any;
  phone2: any;
  email1: any;
  email2: any;
  adress?:string;
  postcode?:number;
	isSubmitted = false;
	newUserForm: FormGroup;
  userData: UserData;
  sortedQuestions: string[];
  value: Date;

  constructor(
    private router: Router,
		private crudService: CrudService,
  ) { }

  ngOnInit(): void {
    this.createNewQuestion()
  }

  createNewQuestion() {
		this.newUserForm = new FormGroup({
      name: new FormControl("", [Validators.pattern(/[A-z]/), Validators.required]),
      birth: new FormControl(""),
      phone1: new FormControl("", [Validators.pattern(/[0-9]/), Validators.required]),
      phone2: new FormControl("", [Validators.pattern(/[0-9]/), Validators.required]),
      email1: new FormControl("", [Validators.email]),
      email2: new FormControl("", [Validators.email]),
      adress: new FormControl(""),
      postcode: new FormControl("", [Validators.pattern(/[0-9]/)])
    });
	}

	onSubmit(value) {
    this.isSubmitted = true;
    if (!this.newUserForm.valid) {
      return false;
    }
    this.userData = {
      name: value.name,
      birth: value.birth,
      phone1: value.phone1,
      phone2: value.phone2,
      email1: value.email1,
      email2: value.email2,
      adress: value.adress,
      postcode: value.postcode
    }

    this.crudService.createNewUser(this.userData)
      .then(
        res => {
          this.newUserForm.reset()
          this.closePopup();
          this.router.navigate(['/main']);
        },
        err => {
          console.log(err);
          alert('Responce fail!');
        }
      )
  }

  closePopup() {
    const closeButton = document.getElementById('exampleModal');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    closeButton.classList.toggle('show');
    closeButton.setAttribute('style', 'display:none');
    modalBackdrop.remove();
  }

}
