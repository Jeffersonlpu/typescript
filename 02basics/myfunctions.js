"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
// É necessário inserir nas funções!
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
addTwo(5);
getUpper("Jefferson");
console.log(signUpUser("Jefferson", "jefferson_lpu@hotmail.com", true));
