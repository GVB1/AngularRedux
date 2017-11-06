import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { NgRedux, select } from '@angular-redux/store';
import { ICountry } from '../gppadmin-redux/ICountry'; 
import {LOAD_COUNTRY,ADD_COUNTRY,EDIT_COUNTRY,DELETE_COUNTRY} from '../gppadmin-redux/actions';
import {TemplateRef, ViewChild} from '@angular/core'; 

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  @ViewChild('editTemplate')editTemplate : TemplateRef < any >; 
  @select() countries;
  countryForm:FormGroup;
  showAddCountryDetails:boolean=false;
  showEditCountryDetails:boolean=false;
  isNewRecord : boolean=false;
  showAddRow : boolean=false; 
  currentCountry:ICountry= {
    countryId:0,
    countryName:"",
    countryCode:"",
    bu:"",
    createdDate:new Date(),
    createdBy:"",
    modifiedBy:"",
    modifiedDate:new Date(),
    excelCalculator:""
};
  
  constructor(private ngRedux:NgRedux<ICountry[]>,private countryService:CountryService,private formBuilder:FormBuilder) {
    this.countryForm=formBuilder.group({
        'countryCode':[],
        'countryName':[]
    })
  }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(countries => 
                     this.ngRedux.dispatch({type:LOAD_COUNTRY,countries}))
  }

  toggleDetails(){
    this.countryForm.reset();
    this.isNewRecord=true;
    this.showAddRow=true;
    this.showAddCountryDetails=false;
    this.showEditCountryDetails=false;
  }

  hideDetails(){
    this.countryForm.reset();
    this.showAddCountryDetails=false;
    this.showEditCountryDetails=false;
  }

  addCountry(country){
    this.showAddRow=false;
    this.showEditCountryDetails=false;
    //this.ngRedux.dispatch({type:ADD_COUNTRY,country});
    this.hideDetails();
  }

  editDetails(country){
  this.currentCountry=country;
  this.showAddRow=false;
   this.showEditCountryDetails=false;
   this.showAddCountryDetails=false;
   (<FormControl>this.countryForm.controls['countryCode'])
      .setValue(country.countryCode, { onlySelf: true });
    (<FormControl>this.countryForm.controls['countryName'])
      .setValue(country.countryName, { onlySelf: true }); 
  }

  editCountry(country){
    this.currentCountry=country;
    this.ngRedux.dispatch({type:EDIT_COUNTRY,country});
    this.hideDetails();
  }

   loadTemplate(country : ICountry) {
        if (this.currentCountry && this.currentCountry.countryCode == country.countryCode) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
         
    } 


 saveCountry(country) {
      console.log(" inside saveDepartment");
       
        if(this.isNewRecord){
           console.log(" Is New record");
           this.countryService.addCountry(country);
           this.ngRedux.dispatch({type: ADD_COUNTRY, country});
            this.isNewRecord=false;
            this.currentCountry = null;
            this.countryForm.reset();
            this.showAddRow=false;
           
        }else{     
          console.log(" Is Edit record");     
            //edit the record
              this.countryService.editCountry(country);
              this.ngRedux.dispatch({type: EDIT_COUNTRY, country});               
              this.currentCountry = null;            
        }
    }
    
    cancel() {
      this.showAddRow=false;
      this.isNewRecord=false;
      this.countryForm.reset();     
      this.currentCountry = null;
    }
 

  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1; 
}
