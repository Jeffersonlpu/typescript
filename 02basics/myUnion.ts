let score: number | string = 33; 
// Tentar deixar o mais estrito possível para evitar bugs. Poderiam ser adicionados outros tipos como: | boolean

score = 44;

score = "55";

type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}

let jefferson: User | Admin = {name: "Jefferson", id: 334}

jefferson = {userName: "hc", id: 334}
// Foram misturadas as caracteríscticas de User e Admin


function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

function getAdress(adress: number | string){
    // Não é possível utilizar: adress.toLowerCase(), pq não se sabe o tipo.
    if (typeof adress === "string") {
        adress.toLowerCase()
        // Agora foi aceito, pois restringiu para String.
    }
}


// ARRAY //

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string) [] = [1, 2, "3"];

// number [] | string [] => sem os parênteses, significa que o array será por inteiro de números ou será inteiro de string. Por isso daria erro.

let pi:3.14 = 3.14
// pi =3.145 // Não vai permitir, pois é uma definição literal

let assentoAviao: "corredor" | "meio" | "janela"

assentoAviao = "corredor"
// assentoAviao = "cabine" // Não será aceito pois fugiu da definição literal.

export {}