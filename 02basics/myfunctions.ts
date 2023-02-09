function addTwo(num: number): number {
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

let myValue = addTwo(5)
getUpper("Jefferson")
console.log(signUpUser("Jefferson", "jefferson_lpu@hotmail.com", true));
loginUser("Bianca", "bia@gmail.com")

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

console.log(heros.map((hero): string => {
    return `hero is ${hero}`
}));
// : string foi colocado fora do parênteses, pois é o retorno esperado. Caso tivesse sido colocado dentro dos parênteses, estaria relacionado ao argumento, porém não é necssário pois o TS já identifica automaticamente de acordo com o array.

function consoleError (errmsg: string): void{
    console.log(errmsg);
}
// Como não houve retorno, foi explicitado que deveria haver um void (algo sem retorno). Para que futuramente ninguém crie uma função que retorne algo.

function handleError (errmsg: string): never{
    throw new Error(errmsg);
}
// Não ficou tão claro! never - é mais enfático que o "void", transmitindo um erro?



export {}