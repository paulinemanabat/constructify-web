import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  title = 'Example of Angular 8 DataTable';
  dtOptions: any = {};
  // dtOptions: DataTables.Settings = {};
  dtInventories =[
    {"id": 10001, "materialName": "Electric Wire", "class": "Electrical", "area": "Guest Lounge", "quantity" : "200", "date":"2019-09-26", "status" : "installed"},
    {"id": 10001, "materialName": "Wood", "class": "Carpentry", "area": "Kitchen", "quantity" : "100", "date":"2019-09-25", "status" : "installed"},
    {"id": 10001, "materialName": "Plywood", "class": "Carpentry", "area": "Admin Office", "quantity" : "50", "date":"2019-09-23", "status" : "installed"},
    {"id": 10001, "materialName": "Metal", "class": "Tinsmithry", "area": "Reception", "quantity" : "100", "date":"2019-09-21", "status" : "installed"},
    {"id": 10001, "materialName": "PCB", "class": "Plumbing", "area": "Kitchen", "quantity" : "200", "date":"2019-09-21", "status" : "installed"},
    {"id": 10001, "materialName": "Switch", "class": "Electrical", "area": "Restaurant", "quantity" : "20", "date":"2019-08-20", "status" : "installed"},
    {"id": 10001, "materialName": "Blue Paint", "class": "Painting", "area": "Restaurant", "quantity" : "50", "date":"2019-08-19", "status" : "installed"},
    {"id": 10001, "materialName": "Brush", "class": "Painting", "area": "Admin Office", "quantity" : "15", "date":"2019-08-19", "status" : "installed"},
    {"id": 10001, "materialName": "Nails", "class": "Carpentry", "area": "Guest Lounge", "quantity" : "2000", "date":"2019-08-17", "status" : "installed"},
    {"id": 10001, "materialName": "Wires", "class": "Electrical", "area": "Reception", "quantity" : "70", "date":"2019-08-10", "status" : "installed"},
    {"id": 10001, "materialName": "Nails", "class": "Carpentry", "area": "Comfort Room", "quantity" : "700", "date":"2019-08-09", "status" : "installed"},
    {"id": 10001, "materialName": "Screw", "class": "Carpentry", "area": "Kitchen", "quantity" : "505", "date":"2019-08-05", "status" : "installed"},
    
  ];
  constructor(private router: Router) { 
   
  }

  ngOnInit() {
    this.dtOptions = {
      data:this.dtInventories,
      columns: [{title: 'Material ID', data: 'id'},
            {title: 'Material Name', data: 'materialName'},
            {title: 'Class', data: 'class'},
            {title: 'Area', data: 'area'},
            {title: 'Quantity', data: 'quantity'},
            {title: 'Date', data: 'date'},
            {title: 'Status', data: 'status' }],
      dom: 'Bfrtip',
      
      buttons: [ 'print', 'excel', 'pdf']
    };
  }

}
