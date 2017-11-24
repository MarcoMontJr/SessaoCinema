function LibrerarPoltronas() {
    var imagens = document.getElementsByTagName("img");

    for (var cont in imagens) {
        if (imagens[cont].name == "PoltronaLivre" || imagens[cont].name == "PoltronaOcupada") {
            imagens[cont].src = "_Imagens/PoltronaLivre.png ";
            imagens[cont].name = "PoltronaLivre";
        } else if (imagens[cont].name == "PoltronaLivrePreferencial" || imagens[cont].name == "PoltronaOcupadaPreferencial") {
            imagens[cont].src = "_Imagens/PoltronaLivrePreferencial.png ";
            imagens[cont].name = "PoltronaLivrePreferencial";
        }
    }
}

function VerificarPoltronas(name, id) {
    if (name == "PoltronaLivre") {
        OcuparPoltronas(id);
    } else if (name == "PoltronaLivrePreferencial") {
        OcuparPoltronasPreferenciais(id)
    } else {
        if (name == "PoltronaOcupada" || name == "PoltronaOcupadaPreferencial") {
            alert("A Poltrona está Ocupada!");
        }
    }
}

function OcuparPoltronas(id) {
    document.getElementById(id).src = "_Imagens/PoltronaEscolhida.png ";
    document.getElementById(id).name = "PoltronaEscolhida";
}

function OcuparPoltronasPreferenciais(id) {
    document.getElementById(id).src = "_Imagens/PoltronaEscolhidaPreferencial.png";
    document.getElementById(id).name = "PoltronaEscolhidaPreferencial";
}

function CalcularValorTotal() {
    var imagens = document.getElementsByTagName("img");
    var acumulador = 0;
    var total = 0;

    for (var cont in imagens) {
        if (imagens[cont].name == "PoltronaEscolhida" || imagens[cont].name == "PoltronaEscolhidaPreferencial") {
            acumulador += 1;
        }
    }

    if (acumulador % 2 == 0) {
        var aux = acumulador / 2 - 1;
    } else {
        var aux = acumulador / 2 - 0.5;
    }

    total = aux * 5;

    alert("Preço do Ingresso Unitário: R$5,00\n" +
        "Quantidade de Assentos Escolhidos: " + aux + "\n" +
        "Valor Total: R$" + total.toFixed(2));

    for (var cont in imagens) {
        if (imagens[cont].name == "PoltronaEscolhida")
            imagens[cont].src = "_Imagens/PoltronaOcupada.png";
        else if (imagens[cont].name == "PoltronaEscolhidaPreferencial")
            imagens[cont].src = "_Imagens/PoltronaOcupadaPreferencial.png"
    }
}