const express = require('express');
const router =  express.Router();
const oracledb = require('oracledb');

var connAttrs = {
    "user": "gvb",
    "password": "gvb",
    "connectString": "localhost:1521/serviceName"
}
 
var clients = [
        {departmentCode:'DEP101',departmentName:'001',clientCode:'CLI101',clientName:'CLIENT101',clientStatus : 'active',  clientDescription:'CLIENT101 DESCRIPTION',clientSetupCommands:'No Command', additionalClientInformation:''},
        {departmentCode:'DEP102',departmentName:'Australia Dept',clientCode:'CLI102',clientName:'CLIENT102', clientStatus : 'active', clientDescription:'CLIENT102 DESCRIPTION',clientSetupCommands:'No Command', additionalClientInformation:''},
        {departmentCode:'DEP103',departmentName:'Australia Dept',clientCode:'CLI103',clientName:'CLIENT103', clientStatus : 'inactive', clientDescription:'CLIENT103 DESCRIPTION',clientSetupCommands:'No Command', additionalClientInformation:''},
        {departmentCode:'DEP104',departmentName:'Australia Dept',clientCode:'CLI104',clientName:'CLIENT104',clientStatus : 'active', clientDescription:'CLIENT104 DESCRIPTION',clientSetupCommands:'No Command', additionalClientInformation:''},
        {departmentCode:'DEP105',departmentName:'002',clientCode:'CLI105',clientName:'CLIENT105',clientStatus : 'inactive', clientDescription:'CLIENT105 DESCRIPTION',clientSetupCommands:'No Command', additionalClientInformation:''}
    ];

var countries = [{
                    countryId:1,
                    countryName:'INDIA',
                    countryCode:'IND',
                    bu:'IN',
                    createdDate:new Date(),
                    createdBy:'GVB',
                    modifiedBy:'GVB',
                    modifiedDate:new Date(),
                    excelCalculator:''
                }];
                

router.post('/addCountry', function(req, res){
    console.log("add country rest call"+req.body.countryName);
    var newCountry = req.body;
     "use strict";
      oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            console.log("Error While getting connection....");
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("Insert into COUNTRY_CODES (COUNTRY_ID,COUNTRY_NAME,COUNTRY_CODE,BU,CREATED_BY,MODIFIED_BY,EXCEL_CALCULATOR) values (:COUNTRY_ID,:COUNTRY_NAME,:COUNTRY_CODE,:BU,:CREATED_BY,:MODIFIED_BY,:EXCEL_CALCULATOR)",[1003, req.body.countryName,
                            req.body.countryCode, req.body.BU, req.body.CREATED_BY, req.body.MODIFIED_BY,
                            req.body.EXCEL_CALCULATOR], {
            autoCommit:true,
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                console.log("Error While Inserting ",err);
                res.set('Content-Type', 'application/json');
                res.status(400).send(JSON.stringify({
                    status: 400,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
            } else {
                console.log("ESLE BLOCK Error While Inserting ",result);
                res.status(201).json(req.body);
                console.log("Reocrds added successfully");
               // res.send(result.rows);
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /Countries : Connection released");
                    }
                });
        });
    }); 
});


router.get('/countries', function(req, res){
    "use strict";
      oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("SELECT COUNTRY_ID as \"countryId\",COUNTRY_NAME as \"countryName\",COUNTRY_CODE as \"countryCode\",BU as \"bu\",CREATED_D as \"createdDate\",CREATED_BY as \"createdBy\",MODIFIED_D as \"modifiedDate\",MODIFIED_BY as \"modifiedBy\",EXCEL_CALCULATOR as \"excelCalculator\" FROM COUNTRY_CODES", {}, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
            } else {
                res.contentType('application/json').status(200);
                res.send(result.rows);
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /Countries : Connection released");
                    }
                });
        });
    });
});

//Bharghav
router.put('/editCountry', function(req, res){
    console.log("edit country rest call"+req.body.countryName);
    var newCountry = req.body;
     "use strict";
      oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            console.log("Error While getting connection....");
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("Update COUNTRY_CODES set COUNTRY_NAME = :COUNTRY_NAME  where COUNTRY_CODE = :COUNTRY_CODE",[req.body.countryName, req.body.countryCode], {
            autoCommit:true,
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                console.log("Error While Inserting ",err);
                res.set('Content-Type', 'application/json');
                res.status(400).send(JSON.stringify({
                    status: 400,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
            } else {
                console.log("ESLE BLOCK Error While Inserting ",result);
                res.status(204).end();
                console.log("Record updated successfully");
               // res.send(result.rows);
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("PUT /Countries : Connection released");
                    }
                });
        });
    }); 
});

router.delete('/deleteCountry/:countryCode', function(req, res){
    console.log("edit country rest call"+req.body.countryName);
    var newCountry = req.body;
     "use strict";
      oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            console.log("Error While getting connection....");
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("DELETE FROM COUNTRY_CODES where COUNTRY_CODE = :COUNTRY_CODE" ,[req.params.countryCode], {
            autoCommit:true,
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                console.log("Error While Inserting ",err);
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
            } else {
                console.log("ESLE BLOCK Error While Inserting ",result);
                res.status(204).end();
                console.log("Record deleted successfully");
               // res.send(result.rows);
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("DELETE /Countries : Connection released");
                    }
                });
        });
    }); 
});

//Bharghav
// router.get('/countries',function(req, res){
//     console.log('Code to get countries from oracle db goes here');
//     res.send(countries);
// });

// router.get('/countries/:id',function(req, res){
   

//     var result = {};
//     for(var country of countriesObject){
//         if(country.name === req.params.id){
//             result = country;
//         }
//     }   

//      console.log('Code to get single country with given id USING '+ req.params.id);
//      //console.log('result : ' + result);

//     res.send('Country matching id: '+ result.value);
// });


router.get('/',function(req, res){
    res.send('api works');
});


var departmentNameForClient = [{departmentName:'001'},{departmentName:'002'},{departmentName:'Australia Dept'},{departmentName:'ESIAU'},{departmentName:'Majors'}];



router.get('/clients',function(req, res){
    console.log('Code to get clients from oracle db goes here');
    res.send(clients);
});

router.post('/addclient',function(req, res){
    console.log('Code to add clients to db goes here');
    var newClient = req.body;    
});

router.get('/departmentNameForClient', function(req, res){
    console.log('code to get department Name for client Page goes here');
    res.send(departmentNameForClient);
});

router.get('/clientsForADepartment/:depName', function(req, res){
    console.log('code to get clients for department goes here');
    var deps = clients.filter(function(dep){
        return dep.departmentName === req.params.depName;
    });
    
    res.send(deps);
});


module.exports = router;