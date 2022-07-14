
const resta = (a, b) => a - b;
let flag = true;

function droides(droides) {
    return droides = parseFloat(prompt("¡Peligro! Se acercan varios droides de batalla, ¿cuántos alcanzas a ver?"));
}


while (flag) {
    var ingresarDroides = droides();
    if (parseInt(ingresarDroides) && ingresarDroides != "" && ingresarDroides != null) {
        alert("¡Eso es malo! Deberías llamar a un Jedi para que te ayude");
        break;
    } else {
        alert("No ingresaste un número");
        continue;
    }
}

let elegirJedi;

while (elegirJedi != "Yoda" && elegirJedi != "Obi-Wan" && elegirJedi != "Anakin" && elegirJedi != "Mace" && elegirJedi != "Luke") {
    elegirJedi = (prompt("De acuerdo a sus habilidades, cada Jedi puede derrotar determinada cantidad de droides. ¡Elige sabiamente entre Yoda, Obi-Wan, Anakin, Mace o Luke!"));

    switch (elegirJedi) {
        case "Yoda":
            alert(`La cantidad e droides restantes después de la batalla de Yoda son ${resta(ingresarDroides,(50))}`);
            alert("La república te lo agradece.");
            break;

        case "Obi-Wan":
            alert(`La cantidad e droides restantes después de la batalla de Obi-Wan son ${resta(ingresarDroides,(30))}`);
            alert("La república te lo agradece.");
            break;

        case "Anakin":
            alert(`La cantidad e droides restantes después de la batalla de Anakin son ${resta(ingresarDroides,(40))}`);
            alert("La república te lo agradece.");
            break;

        case "Mace":
            alert(`La cantidad e droides restantes después de la batalla de Mace son ${resta(ingresarDroides,(35))}`);
            alert("La república te lo agradece.");
            break;

        case "Luke":
            alert(`La cantidad e droides restantes después de la batalla de Luke son ${resta(ingresarDroides,(45))}`);
            alert("La república te lo agradece.");
            break;

        default:
            alert("No ingresaste un nombre Jedi.");
    }
}

