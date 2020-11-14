import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserData } from '../../common/utils/user';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  encapsulation: ViewEncapsulation.None,
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

  constructor() { }

  ngOnInit(): void {
    this.createNewQuestion()
  }

  createNewQuestion() {
		this.newUserForm = new FormGroup({
			name: new FormControl("", [Validators.pattern(/[A-z]/)]),
      phone: new FormControl("", [Validators.pattern(/[0-9]/)]),
      email: new FormControl("", [Validators.email]),
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
    console.log(this.userData)

    // this.crudService.createNewQuestion(this.questionData)
    //   .then(
    //     res => {
    //       this.newQuestionForm.reset()
    //       this.closePopup();
    //       this.router.navigate(['/main']);
    //     },
    //     err => {
    //       console.log(err);
    //       alert('Responce fail!');
    //     }
    //   )
  }

  closePopup() {
    const closeButton = document.getElementById('exampleModal');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    closeButton.classList.toggle('show');
    closeButton.setAttribute('style', 'display:none');
    modalBackdrop.remove();
  }

}
