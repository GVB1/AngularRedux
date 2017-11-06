import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IUser } from '../gppadmin-redux/IUser';
import { LOGIN_USER } from '../gppadmin-redux/actions'; 

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm:FormGroup;
  error : boolean= false;
  loggedIn: boolean = false;

  constructor(private formBuilder :FormBuilder, private router: Router,private ngRedux : NgRedux<IUser>) {

     this.loginForm = formBuilder.group({
      /*First parameter is default value, second is an array of validations*/
      'username': [null, Validators.required],
      'password': [null, Validators.required]
      
    });
   }

  ngOnInit() {
  }

  loginUser(user){
    if(user.username === "gvb" && user.password === "gvb"){
      console.log("Inside login page"+ user.username);
      this.error=false;
      this.loggedIn = true;
      // var newUser = {username:user.username, loggedin: true }
      // this.ngRedux.dispatch({type: LOGIN_USER, user:newUser}); 
       //this.router.navigate(['/']);
    }
    else{
        this.error=true;
    }
  }

}
