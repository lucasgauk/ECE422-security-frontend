import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {FileComponent} from "./component/file/file.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'file', component: FileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
