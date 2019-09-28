import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructifyRoutingModule } from './constructify-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/dashboard/navbar/navbar.component';
import { NotificationsbarComponent } from './pages/dashboard/notificationsbar/notificationsbar.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { InventoryComponent } from './pages/dashboard/inventory/inventory.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    NotificationsbarComponent,
    HomeComponent,
    InventoryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ConstructifyRoutingModule
  ]
})
export class ConstructifyModule { }
