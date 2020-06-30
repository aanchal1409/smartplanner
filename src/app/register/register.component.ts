import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   userform;
   users;
  constructor( public fb:FormBuilder, public userservice: UserserviceService,private router:Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-register')
    this.initForm();
    this.getUserdata();
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-register')
  }
  initForm(){
    this.userform=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      confirm:'',
      username:['',Validators.required],
      contact:['',[Validators.minLength(10) ,Validators.required]],      
      age:['',Validators.required]
    },{validator : this.matchPassword('password','confirm')})
  }
  matchPassword(password,confirm){
    return (form)=>{
      let control1=form.controls[password];
      let control2=form.controls[confirm];

      if(control1.value !== control2.value){
        control2.setErrors({match:true})
      }else{
        control2.setErrors(null);
      }
    }
  }
  submitForm(formdata){

    console.log('Submitted!!');
    if(this.userform.invalid){
      alert('forminvalid');
      return;
    }
    console.log(formdata);
    this.userservice.addUser(formdata).subscribe((data)=>{                  //formdata=this.userform.value
      console.log(data);
   
      // this.userservice.loggedin = true;
    
          // sessionStorage.setItem('username',formdata.username);
          sessionStorage.setItem('user',JSON.stringify(data));
          Swal.fire({
            icon:'success',
            title:'success',
            text:'Registration Successfull'
          })
          this.router.navigate(['/login']);
    })
  }   
  signin(){
    this.router.navigate(['/login']);

  }
  getUserdata(){
    this.userservice.getallUser().subscribe((data)=>{
      console.log(data);
    })
  }
}
