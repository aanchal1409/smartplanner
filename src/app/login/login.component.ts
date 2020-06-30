import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform;

  constructor(private fb:FormBuilder,public userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-login')
    this.initForm();
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-login')
  }
  initForm(){
    this.loginform=this.fb.group({
      password:['',Validators.required],
      username:['',Validators.required],
    })
  }

  formSubmit(formdata){
    console.log(formdata);

    this.userservice.getuserbyUsername(formdata.username).subscribe(data => {
      console.log(data);

      if(data){
        if(data['password'] == formdata['password']){
          console.log('login success!!');
          this.userservice.loggedin = true;
          // sessionStorage.setItem('username',formdata.username);
          sessionStorage.setItem('user',JSON.stringify(data));
          Swal.fire({
            icon:'success',
            title:'success',
            text:'Successfully Logged in'
          })
          this.router.navigate(['/dashboard']);
        }
      }
    })
  }
}
