import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostofficeService } from '../postoffice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
name: string='';
password: string='';

  constructor(private route:Router,private post:PostofficeService){}
  

  onlogin(){
    this.post.getuser().subscribe((data:any)=>{
      let found = false;
      data.forEach((x:any) => {
        if(x.username===this.name && x.password===this.password){
          this.route.navigate(['dashboard']);
          found = true;
        }
      });
      if(!found){
        alert('invalid credentials');
      }
    });
    localStorage.setItem('token','true');
  }

  id = 4;


  onSignup(){
    this.route.navigate([`signup/${this.id}`],{queryParams:{name:this.name}})
  }
}
