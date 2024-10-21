// Write your solution in this file!

// employee object
let employee = {
    name: "Sam",
    streetAddress : "123 Main St"
}

// Function: updateEmployeeWithKeyAndValue
// This function creates a new employee object with an updated or added property,
// without modifying the original object.
// It uses the spread operator (...) to create a shallow copy of the employee object,
// then adds or updates the property specified by 'key' with the given 'value'.
// Returns a new object, leaving the original employee object unchanged.
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key] : value
    }
}

// Function: destructivelyUpdateEmployeeWithKeyAndValue
// This function directly modifies the original employee object.
// It adds or updates the property specified by 'key' with the given 'value'.
// Changes are made directly to the input 'employee' object.
// Returns the modified employee object.
function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value ){
    employee[key] = value;
    return employee;
}

// Function: deleteFromEmployeeByKey
// This function creates a new employee object with a specified property removed,
// without modifying the original object.
// It creates a shallow copy of the employee object using the spread operator,
// then uses the 'delete' operator to remove the property specified by 'key'.
// Returns a new object, leaving the original employee object unchanged.
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// Function: destructivelyDeleteFromEmployeeByKey
// This function directly modifies the original employee object by deleting a specified property.
// It uses the 'delete' operator to remove the property specified by 'key' from the input 'employee' object.
// Returns the modified employee object.
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
