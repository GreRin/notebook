import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
