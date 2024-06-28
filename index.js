// Write your solution in this file!
const employee={
    name:"Stella",
    streetAddress:"Mudumo",
}

function updateEmployeeWithKeyAndValue(employee,key,value){

    const newEmployee={...employee};
    newEmployee[key]="11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]="12 Broadway";
    return employee;
    
}
function deleteFromEmployeeByKey(employee,key){

    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
 function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
    return employee;
 }