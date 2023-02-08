function addTwo(num: number) {
    return num + 2
}
// É necessário inserir nas funções!

function getUpper (val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return {name, email, isPaid}
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
// Foi necessário incluir o false como padrão, pois não há argumento na função quando chamada.

addTwo(5)
getUpper("Jefferson")
console.log(signUpUser("Jefferson", "jefferson_lpu@hotmail.com", true));
loginUser("Bianca", "bia@gmail.com")

export {}