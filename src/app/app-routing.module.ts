import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'about', component:AboutComponent}
    ]
    
  },
  {
    component:ContactComponent,
    path:'contact',
    children:[
      {path:'contact', component:ContactComponent}
    ]    
  },
  {
    component:HomeComponent,
    path:'',
    children:[
      {path:'', component:HomeComponent}
    ] 
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
