import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  @select() user;

  loginForm:FormGroup;
  error : boolean= false;
  loggedIn: boolean ;

  constructor(private formBuilder :FormBuilder) {
      this.loginForm = formBuilder.group({
      /*First parameter is default value, second is an array of validations*/
      'username': [null, Validators.required],
      'password': [null, Validators.required]      
    });
   }

  ngOnInit() {
  }

    loginUser(user){
    if(user.username === "esibpmtest1" && user.password === "ADPadp01"){
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
