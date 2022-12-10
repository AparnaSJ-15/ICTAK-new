import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponseComponent } from './pages/response/response.component';

const routes: Routes = [
  { path: 'response', component: ResponseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
