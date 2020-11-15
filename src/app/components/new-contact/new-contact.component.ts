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
  phone: any;
  email: any;
	isSubmitted = false;
	newUserForm: FormGroup;
  userData: UserData;
  sortedQuestions: string[];

  constructor(
    private router: Router,
		private crudService: CrudService,
  ) { }

  ngOnInit(): void {
    this.createNewQuestion()
  }

  createNewQuestion() {
		this.newUserForm = new FormGroup({
			name: new FormControl("", [Validators.pattern(/[A-z]/)]),
      phone: new FormControl("", [Validators.pattern(/[0-9]/)]),
      email: new FormControl("", [Validators.email])
    });
	}

	onSubmit(value) {
    this.isSubmitted = true;
    if (!this.newUserForm.valid) {
      return false;""
    }
    this.userData = {
      name: value.name,
      phone: value.phone,
      email: value.email
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
