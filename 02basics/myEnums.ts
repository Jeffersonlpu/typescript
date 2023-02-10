enum assentoAviao {
    CORREDOR = 10,
    MEIO,
    JANELA = 14,
    CABINE
}

const assento = assentoAviao.JANELA
// Por padrão o primeiro item começará no 0, porém poderá ser trocado por outro número quando estabelecido.

enum assentoAviao2 {
    CORREDOR = "corredor",
    MEIO = "meio",
    JANELA = "janela",
    CABINE = 4,
    BANHEIRO // Automaticamente terá o valor de 5
}

const assento2 = assentoAviao2.JANELA

// Ao transcrever esse código para o javascript, será produzido um código grande e difícil de ler. Como solução, estabelecer uma "const" para o enum irá gerar apenas uma linha de código: const enum assentoAviao ...