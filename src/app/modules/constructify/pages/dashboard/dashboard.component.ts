import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routerData: any;
  constructor(private router:Router) { 
    this.router.events.subscribe((val) => {
      this.routerData = val;
  });
  }

  ngOnInit() {
    
    this.router.navigate(['/dashboard/home']);
    
  }

  isInventoryActive(){
    if (this.routerData.url == '/dashboard/inventory'){
     
      return false
    } else {
      return true
    }
    
  }

}
