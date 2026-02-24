import { Component } from '@angular/core';
import { PostofficeService } from '../postoffice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  details!:any
  data!:any;
  iddetails!:any
  constructor(private post:PostofficeService , private route:Router,private http:HttpClient){}
  ngOnInit(){
    this.post.getuser().subscribe((res)=>{
      this.data=res;
    })
  }
  onDel(x:number){
    this.post.deleteUser(x).subscribe((res)=>{
      alert('User Deleted');
      this.ngOnInit();
    })
  }
  onLogout(){
    localStorage.removeItem('token');
    this.route.navigate(['']);

  }

  ondetail(id:any){
    this.post.getUserById(id).subscribe((res)=>{
      this.iddetails=res
    })  

  }

}
