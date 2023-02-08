let greetings: string = "Hello Jefferson";

greetings.toLowerCase();
console.log(greetings);

// number
let userId = 334455.3; // Não há necessidade de colocar :number - O TS já reconhece e faz os apontamentos necessários como abaixo, sugerindo o .tofixe() e características apenas para números.

userId.toFixed();


// boolean
let isLoggedIn: boolean = false;

export {}

// any - deve ser evitado
let hero: string; // Nesse caso deve ser definido para que não haja uma alteração no código para algo diferente de String. Caso não fosse delimitado, seria uma ANY

function getHero() {
    return "thor"
}

hero = getHero();