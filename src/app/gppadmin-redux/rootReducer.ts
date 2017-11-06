
import {ADD_DEPARTMENT, EDIT_DEPARTMENT, REMOVE_DEPARTMENT} from './actions';

import {LOAD_CLIENTS,ADD_CLIENT,EDIT_CLIENT,LOAD_COUNTRY, ADD_COUNTRY, EDIT_COUNTRY} from './actions';
import {LOGIN_USER} from './actions';

export function rootReducer(state, action){
    switch(action.type){
        
        case ADD_DEPARTMENT:           
            return Object.assign({}, state, {
                departments: state.departments.concat(Object.assign({},action.department))                
            });
        
        case EDIT_DEPARTMENT:
            var department = state.departments.find(department => department.departmentCode === action.department.departmentCode);
            var index = state.departments.indexOf(department);
            console.log('Index:'+ index);
            return Object.assign({}, state, {
                departments: [...state.departments.slice(0,index),Object.assign({},department,{country : action.department.country, departmentCode : action.department.departmentCode, departmentName : action.department.departmentName}), ...state.departments.slice(index+1) ]                
            });

        case REMOVE_DEPARTMENT:    
            var myDeparment = state.departments.find(department => department.departmentCode === action.department.departmentCode);
            var myIndex = state.departments.indexOf(myDeparment);     
            console.log('Inside remove Department'+ myIndex);  
            return Object.assign({}, state, {                
                departments: [...state.departments.slice(0,myIndex), ...state.departments.slice(myIndex+1) ]                               
            });        

        case LOAD_CLIENTS:
              return Object.assign({}, state, {
                clients:  action.clients              
            });    

        case ADD_CLIENT:
             return Object.assign({}, state, {
                clients: state.clients.concat(Object.assign({},action.client))                
            });

        case EDIT_CLIENT:
            var client = state.clients.find(client => client.clientCode === action.client.clientCode);
            var index = state.clients.indexOf(client);
            console.log('Index:'+ index + client.clientDescription);
            return Object.assign({}, state, {
                clients: [...state.clients.slice(0,index), Object.assign({},client,{departmentName : action.client.departmentName, clientDescription : action.client.clientDescription, clientName : action.client.clientName, clientStatus: action.client.clientStatus, clientSetupComments: action.client.clientSetupComments , additionalClientInformation: action.client.additionalClientInformation}), ...state.clients.slice(index+1) ]                
            });  

        case LOAD_COUNTRY:
             return Object.assign({},state,{countries:action.countries}); 

        case LOGIN_USER:
            console.log('Inside REDUX login user'+ action.user.username + ' loggedin ' + action.user.loggedin);
            return Object.assign({},state,{user:action.user});

        case ADD_COUNTRY:           
            return Object.assign({}, state, {
                countries: state.countries.concat(Object.assign({},action.country))                
            }); 

        case EDIT_COUNTRY:            
            var country = state.countries.find(country => country.countryCode === action.country.countryCode);
            var index = state.countries.indexOf(country);            
            return Object.assign({}, state, {
                countries: [...state.countries.slice(0,index), Object.assign({},action.country), ...state.countries.slice(index+1) ]                
            });            

    }
    return state;
}