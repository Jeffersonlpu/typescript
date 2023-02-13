"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const jefferson = new User("j@mail.com", "Jefferson");
// jefferson.city = 2; => não será aceito, pois é uma string
jefferson.city = "Brasília";
