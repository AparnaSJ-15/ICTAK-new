import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FacultyHomeComponent } from './pages/faculty-home/faculty-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule ,Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"faculty-home",component:FacultyHomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyHomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
