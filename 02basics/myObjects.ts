// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dv",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "hitesh", isPaid: false})

// let newUser ={name: "jefferson", isPaid: true, email: "jefferson@gmail.com"}
// // Não deveria aceitar, por estar passando uma parâmtro a mais, porém foi aceito por estar em uma variável.

// createUser(newUser);

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price:399}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
}

let myUser: User = {
    _id: "12345",
    name: "j",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com" // Pode ser modificado
// myUser._id = "asa" // READONLY não permite que seja modificado.

export {}