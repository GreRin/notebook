import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user', component: UserProfileComponent, pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, pathMatch: 'full' },
  // { path: 'main/:id', component: QuestionComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
