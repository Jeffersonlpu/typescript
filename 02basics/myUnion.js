var score = 33;
// Tentar deixar o mais estrito possível para evitar bugs. Poderiam ser adicionados outros tipos como: | boolean
score = 44;
score = "55";
var jefferson = { name: "Jefferson", id: 334 };
jefferson = { userName: "hc", id: 334 };
// Foram misturadas as caracteríscticas de User e Admin
function getDbId(id) {
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getAdress(adress) {
    // Não é possível utilizar: adress.toLowerCase(), pq não se sabe o tipo.
    if (typeof adress === "string") {
        adress.toLowerCase();
        // Agora foi aceito, pois restringiu para String.
    }
}
// ARRAY //
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3"];
// number [] | string [] => sem os parênteses, significa que o array será por inteiro de números ou será inteiro de string. Por isso daria erro.
var pi = 3.14;
// pi =3.145 // Não vai permitir, pois é uma definição literal
var assentoAviao;
assentoAviao = "corredor";
// assentoAviao = "cabine" // Não será aceito pois fugiu da definição literal.
