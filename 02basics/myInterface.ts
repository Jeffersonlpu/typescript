interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string // ? => Torna não obrigatório o uso. 
    startTrail: () => string
    startClimb(): string
    getCoupon(couponName: string, value: number): number
}

const jefferson: User = {dbId: 22, email: "j@gmail.com", userId: 2211,
startTrail: () => {
    return "trail started"
},
startClimb: () => {
    return "climb started"
},
getCoupon: (name: "jefferson10", off: 10) => {
    return 10
}
}
jefferson.email = "jefferson@gmail.com"
// jefferson.dbId => não poderá ser alterado por causa do READONLY

