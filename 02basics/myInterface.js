// Interface permite que seja reaberto e inserido novas propriedades.
var jefferson = { dbId: 22, email: "j@gmail.com", userId: 2211,
    githubToken: "github",
    role: "admin",
    startTrail: function () {
        return "trail started";
    },
    startClimb: function () {
        return "climb started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
jefferson.email = "jefferson@gmail.com";
// jefferson.dbId => não poderá ser alterado por causa do READONLY
