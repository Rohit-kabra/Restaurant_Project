import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component'
import {LoginComponent} from './login/login.component'
import {ListRestoComponent} from './list-resto/list-resto.component'
import {RegisterComponent} from './register/register.component'
import {UpdateRestoComponent} from './update-resto/update-resto.component'
const routes: Routes = [
  {
    component:AddComponent,
    path:'add'
  },
  {
    component:LoginComponent,
    path:'Login'
  },
  {
    component:RegisterComponent,
    path:'Register'
  },
  {
    component:UpdateRestoComponent,
    path:'Update/:id'
  },
  {
    component:ListRestoComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
