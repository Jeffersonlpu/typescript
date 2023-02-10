var assentoAviao;
(function (assentoAviao) {
    assentoAviao[assentoAviao["CORREDOR"] = 10] = "CORREDOR";
    assentoAviao[assentoAviao["MEIO"] = 11] = "MEIO";
    assentoAviao[assentoAviao["JANELA"] = 14] = "JANELA";
    assentoAviao[assentoAviao["CABINE"] = 15] = "CABINE";
})(assentoAviao || (assentoAviao = {}));
var assento = assentoAviao.JANELA;
// Por padrão o primeiro item começará no 0, porém poderá ser trocado por outro número quando estabelecido.
var assentoAviao2;
(function (assentoAviao2) {
    assentoAviao2["CORREDOR"] = "corredor";
    assentoAviao2["MEIO"] = "meio";
    assentoAviao2["JANELA"] = "janela";
    assentoAviao2[assentoAviao2["CABINE"] = 4] = "CABINE";
    assentoAviao2[assentoAviao2["BANHEIRO"] = 5] = "BANHEIRO"; // Automaticamente terá o valor de 5
})(assentoAviao2 || (assentoAviao2 = {}));
var assento2 = assentoAviao2.JANELA;
// Ao transcrever esse código para o javascript, será produzido um código grande e difícil de ler. Como solução, estabelecer uma "const" para o enum irá gerar apenas uma linha de código: const enum assentoAviao ...
