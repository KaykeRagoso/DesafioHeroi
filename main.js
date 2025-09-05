const form = document.getElementById("formHeroi");

const herois = [];

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("fname").value;
    const xp = parseInt(document.getElementById("xp").value);

    if (isNaN(xp) || xp < 0) {
        alert("Insira um valor válido de XP!");
        return;
    }

    herois.push({ nome: nome, xp: xp });

    const resultados = herois.map(heroi => {
        const nivel = rankHeroi(heroi.xp);
        return `O Herói de nome ${heroi.nome} está no nível de ${nivel}`;
    });

    document.getElementById("resultado").innerHTML = resultados.join("<br>");

    form.reset();
});

function rankHeroi(xp) {
    let nivel = "";
    switch (true) {
        case xp < 1000:
            nivel = "Ferro";
            break;
        case xp >= 1001 && xp <= 2000:
            nivel = "Bronze";
            break;
        case xp >= 2001 && xp <= 5000:
            nivel = "Prata";
            break;
        case xp >= 5001 && xp <= 7000:
            nivel = "Ouro";
            break;
        case xp >= 7001 && xp <= 8000:
            nivel = "Platina";
            break;
        case xp >= 8001 && xp <= 9000:
            nivel = "Ascendente";
            break;
        case xp >= 9001 && xp <= 10000:
            nivel = "Imortal";
            break;
        case xp >= 10001:
            nivel = "Radiante";
            break;
        default:
            nivel = "Ferro";
            break;
    }
    return nivel;
}
