const user: (string | number)[] = [1, "hc"]

// TUPLES //
let tuser: [string, number, boolean]

tuser = ["jefferson", 34, true]
// Tuples - Restringe a ordem do Array, logo não irá aceitar outra ordem que não seja estabelecida na variável como: número, string, boolean

let rgb: [number, number, number] = [255, 123, 321];


type User = [number, string]
const newUser: User = [34, "Bianca"]

newUser[1] = "Jefferson"; // É possível trocar o valor, porém não o tipo

export {}