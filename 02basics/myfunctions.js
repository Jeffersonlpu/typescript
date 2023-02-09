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
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// Foi necessário incluir o false como padrão, pois não há argumento na função quando chamada.
var myValue = addTwo(5);
getUpper("Jefferson");
console.log(signUpUser("Jefferson", "jefferson_lpu@hotmail.com", true));
loginUser("Bianca", "bia@gmail.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
