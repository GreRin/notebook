import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (
		private router: Router,
		private ngzone: NgZone
	) {}

  	ngOnInit() {
		this.ngzone.run(() => this.router.navigate(['/main']));
	}
}
