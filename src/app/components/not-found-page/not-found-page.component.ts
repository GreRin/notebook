import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  display: boolean = false;

  ngOnInit() {
    this.showDialog()
  }

  showDialog() {
      this.display = true;
  }
}