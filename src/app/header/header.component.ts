import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Message, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  msgs: Message[] = [];

  position: string;

  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Add new contact',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Congratulation!', detail:'New user added!'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Sorry!', detail:'Something goes wrong :('}];
        }
    });
  }
}
