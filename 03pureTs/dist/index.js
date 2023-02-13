"use strict";
class User {
    constructor(email, name) {
        this.city = "Ceilândia"; // => private - torna o dado não acessível fora da classe. // OBS: Também pode ser usado com hashtag => #city - possui a mesma característica.
        this.email = email;
        this.name = name;
        this.city; // Pode ser acessado aqui, pois está dentro da classe
    }
}
const jefferson = new User("j@mail.com", "Jefferson");
// jefferson.city = 2; => não será aceito, pois é uma string
// jefferson.city = "Brasília" // Não será aceito devido ao READONLY
// jefferson.city // Não pode ser acessado devido ao PRIVATE e por estar fora da classe.
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Taguatinga";
    }
}
const bianca = new User2("bi@gmail.com", "Bianca");
// Pode ser construído dessa maneira: colocando PRIVATE or PUBLIC dentro do argumento. Sendo que não há necessidade de colocar "this.email" para acessar os argumentos. Porém ao verificar o código em JS, vemos que ele foi transcrito para o THIS.EMAIL ...
