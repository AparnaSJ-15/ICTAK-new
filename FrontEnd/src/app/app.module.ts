import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { SignupFacaultyComponent } from './pages/signup-facaulty/signup-facaulty.component';
=======
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

>>>>>>> 1c20d84d951c845d8aa44be59e0b75af35c51b3f

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    SignupFacaultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    
>>>>>>> 1c20d84d951c845d8aa44be59e0b75af35c51b3f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
