import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacloginComponent } from './pages/faclogin/faclogin.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'faclogin',component:FacloginComponent},
                        {path:'header',component:HeaderComponent},
                        {path:'footer',component:FooterComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
