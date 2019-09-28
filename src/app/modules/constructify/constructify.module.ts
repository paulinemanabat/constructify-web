import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructifyRoutingModule } from './constructify-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/dashboard/navbar/navbar.component';
import { NotificationsbarComponent } from './pages/dashboard/notificationsbar/notificationsbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    NotificationsbarComponent
  ],
  imports: [
    CommonModule,
    ConstructifyRoutingModule
  ]
})
export class ConstructifyModule { }
