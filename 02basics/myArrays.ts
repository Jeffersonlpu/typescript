const superHeros: string[] = []
// quando definimos um array da maneira normal, ele vai reconhecer como tipo :never, por isso é necessário definir antes o tipo de array.
const heroPower: number[] = []
const heroDefense: Array<number> = [] // Outra maneira de definir um array.


superHeros.push("spiderman");
heroPower.push(2);

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [];

allUsers.push({name: "", isActive: true})

const MDLModels: number[][] = [
    [255, 255, 255]
    //""  // Não foi aceito pois deveria ser outro array e não uma string
]

export {}