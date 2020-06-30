import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url="http://localhost:3000/planner";
  loggedin=false;
  constructor(private http: HttpClient, private router: Router) {
    if(sessionStorage.getItem('user')){
      this.loggedin=true;
    }
   }

  addUser(userdata){
    return this.http.post(this.url+"/add",userdata);
  }
  getallUser(){
    return this.http.get(this.url+"/getall");
  }
  getuserbyUsername(username){
    return this.http.get(this.url+'/getbyusername/'+username);
  }
  logout(){
    this.loggedin=false;
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  deleteuser(id){
    return this.http.delete(this.url+'/delete/'+id);
  }
  updateuser(id,data){
    return this.http.put(this.url+'/updata/'+id,data);
  }
}


