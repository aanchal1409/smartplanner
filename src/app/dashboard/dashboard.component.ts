import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  currentUser;
  showeditform=false;
  editform;
  constructor(public userservice:UserserviceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.classList.add('bg-dashboard')
    this.currentUser=JSON.parse(sessionStorage.getItem('user'));
    this.getUser()
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-dashboard')
  }
  getUser(){
    this.userservice.getallUser().subscribe((data)=>{
      console.log(data);
      this.users=data;
    })
  }
  // deleteUser(id){
  //   console.log(id);
  //   this.userservice.deleteuser(id).subscribe((data)=>{
  //     console.log(data);
  //     this.getUser();
  //   })
  // }
  // initUser(user){
  //    this.editform=this.fb.group(user);    

  // }

  // submitForm(formdata){
  //   if(this.editform.invalid){
  //     alert('forminvalid');
  //     return;
  //   }
    
  //   console.log(formdata);
  //   this.userservice.updateuser(this.editform.value._id,formdata).subscribe((data)=>{      //formdata=this.userform.value
  //     console.log(data);
  //   })    
  // }  
  // updateUser(user){
  //   this.showeditform=true;
  //   this.initUser(user);
  // }
}
