class User {
    email: string
    name: string
    city: string = ""
    constructor (email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const jefferson = new User("j@mail.com", "Jefferson")
// jefferson.city = 2; => não será aceito, pois é uma string
jefferson.city = "Brasília"