import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { PostofficeService } from '../postoffice.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
 @Input() user!:any;
 value!:any;

 constructor(private http:HttpClient, private post:PostofficeService){


 }
  

}
