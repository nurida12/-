let sandar = "";

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sandar = sandar + i + " ";
    }
}

alert(sandar);

let text = prompt("Жол енгізіңіз:");
let san = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] == "а" || text[i] == "ә" || text[i] == "е" || text[i] == "и" || text[i] == "о" || text[i] == "ө" || text[i] == "ұ" || text[i] == "ү" || text[i] == "ы" || text[i] == "і") {
        san++;
    }
}

alert("Дауысты дыбыстар саны: " + san);

let kun = prompt("Аптаның күнін енгізіңіз:");

if (kun == "сенбі" || kun == "жексенбі") {
    alert("Бұл демалыс күні");
}
else {
    alert("Бұл жұмыс күні");
}
