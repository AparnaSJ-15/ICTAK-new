import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultySignupComponent } from './pages/faculty-signup/faculty-signup.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'faculty-signup', component: FacultySignupComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
