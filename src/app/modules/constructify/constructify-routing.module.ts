import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { InventoryComponent } from './pages/dashboard/inventory/inventory.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';


const routes: Routes = [{
          path: 'dashboard',
          component: DashboardComponent,
          children: [
            {path: 'home', component: HomeComponent},
            {path: 'inventory', component: InventoryComponent},
            {path: 'profile', component: ProfileComponent}
          ]
        },
        {
          path: 'login',
          component: LoginComponent
        }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConstructifyRoutingModule { }
