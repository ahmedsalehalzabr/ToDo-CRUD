import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path:'', redirectTo:'/todos', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'todos', component:TodosComponent, title:'todos'},
  {path:'todos/:id', component:TodoDetailsComponent, title:'to do Detials'},
  {path:'contactus', component:ContactUsComponent, title:'Contact Us'},
  {path:'aboutus', component:AboutUsComponent, title:'About Us'},

  {path:'**', component:NotFoundError, title:'Not Found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
