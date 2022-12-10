import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { ResponseComponent } from './pages/response/response.component';

const routes: Routes = [
  { path: 'response', component: ResponseComponent },
];
=======
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacultyHomeComponent } from './pages/faculty-home/faculty-home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'header',component:HeaderComponent},
                        {path:'footer',component:FooterComponent},
                        {path:'faculty-home',canActivate:[AuthGuard],component:FacultyHomeComponent}
                      ];
>>>>>>> 73b6dbd4d72ac8bd2b5b7fab5f12e3e545be9387

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
