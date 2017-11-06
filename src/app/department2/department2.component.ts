import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IDepartment } from '../gppadmin-redux/IDepartment';
import { ADD_DEPARTMENT, EDIT_DEPARTMENT,REMOVE_DEPARTMENT } from '../gppadmin-redux/actions';
import {FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-department2',
  templateUrl: './department2.component.html',
  styleUrls: ['./department2.component.css']
})
export class Department2Component implements OnInit {

  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  @ViewChild('editTemplate')editTemplate : TemplateRef < any >;

  @select() departments;

  isNewRecord : boolean;
  showAddRow : boolean;
  currentDepartment : IDepartment = {
    country: "",
    departmentCode : "",
    departmentName: ""   
  }
  departmentForm:FormGroup;
  
  constructor(private ngRedux : NgRedux<IDepartment[]>,private formBuilder :FormBuilder) { 

     this.departmentForm = formBuilder.group({
      /*First parameter is default value, second is an array of validations*/
      'country': [null, Validators.required],
      'departmentCode': [this.currentDepartment.departmentCode, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(7)])],
      'departmentName': [this.currentDepartment.departmentName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
    
  }

   

  addDepartment() {   
    this.departmentForm.reset();
    this.showAddRow = true;
  // var newDepartment : IDepartment = {
  //   country: "",
  //   departmentCode : "",
  //   departmentName: ""   
  // }
  //       this.currentDepartment=newDepartment;
  //       this.ngRedux.dispatch({type: ADD_DEPARTMENT, newDepartment});
  //       this.isNewRecord = true;
         //return this.editTemplate;
    }

    addDepartmentValues(department){
      console.log("Inside addDepartmentValues"+ department.country);
      this.ngRedux.dispatch({type: ADD_DEPARTMENT, department});
      this.departmentForm.reset();
      this.showAddRow=false;
    }

//6. Edit Employee
    editDepartment(department : IDepartment) {
      this.showAddRow=false;
        this.currentDepartment = department;
        (<FormControl>this.departmentForm.controls['country'])
        .setValue(department.country, { onlySelf: true });
        (<FormControl>this.departmentForm.controls['departmentCode'])
        .setValue(department.departmentCode, { onlySelf: true });
        (<FormControl>this.departmentForm.controls['departmentName'])
        .setValue(department.departmentName, { onlySelf: true });
    }
//7. Load either Read-Onoy Template or EditTemplate
    loadTemplate(department : IDepartment) {
        if (this.currentDepartment && this.currentDepartment.departmentCode == department.departmentCode) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
         
    }
    //8. Save Employee
    saveDepartment(department) {
      console.log(" inside saveDepartment");
       
        if(this.isNewRecord){
            //add a new Employee
           this.ngRedux.dispatch({type: ADD_DEPARTMENT, department});
            this.isNewRecord=false;
            this.currentDepartment = null;
           
        }else{          
            //edit the record
              this.ngRedux.dispatch({type: EDIT_DEPARTMENT, department});               
              this.currentDepartment = null;            
        }
    }
    //9. Cancel edit
    cancel() {
      this.showAddRow=false;
      this.departmentForm.reset();     
      this.currentDepartment = null;
    }


    //10 Delete Employee
    deleteDepartment(department){        
          this.ngRedux.dispatch({type: REMOVE_DEPARTMENT, department});            
    }

     //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

}