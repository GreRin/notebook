import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CardModule } from 'primeng/card';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { DialogModule } from 'primeng/dialog';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    UserProfileComponent,
    NotFoundPageComponent,
    NewContactComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    MessagesModule,
    InputTextModule,
    KeyFilterModule,
    CardModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  exports: [
		AngularFireModule
	],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
