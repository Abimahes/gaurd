import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostofficeService } from '../postoffice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignupForm!:FormGroup;
  constructor(private fb:FormBuilder , private post:PostofficeService , private route:Router, 
    activatedRoute:ActivatedRoute ){
    this.SignupForm=this.fb.group({
      username:[''],
      password:[''],
      reenterpassword:[''],
      phoneNo:[''],
      email:['']
    })

    console.log(activatedRoute.snapshot.params['id']);

    activatedRoute.queryParams.subscribe((res)=>{
      console.log(res)
    })
  }

  canDeactivateEx(){
    if(this.SignupForm.value.username){
      return confirm("Are you sure you want to leave this page without saving?");
    }else{
      return false
    }
  }

onSubmit(){
  this.post.addUser(this.SignupForm.value).subscribe((res)=>{
    console.log(res);
    this.route.navigate([''])
  })

}
} 