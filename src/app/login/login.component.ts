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
          this.route.navigate(['dashboard'], {queryParams:{name:this.name}})
          found = true;
        }
      });

      if(!found){
        alert('invalid credentials');
      }
    });
    localStorage.setItem('token','true');
  }




  onSignup(){
    this.route.navigate(['signup'])
  }
}
