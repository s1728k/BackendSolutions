import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    children:[
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'database', loadChildren: './database/database.module#DatabaseModule'},
      {path:'login-solutions', loadChildren: './login-solutions/login-solutions.module#LoginSolutionsModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRouting {
}
