function jup(massiv) {
    let a = [];

    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] % 2 == 0) {
            a.push(massiv[i]);
        }
    }

    return a;
}

let sandar = [1, 2, 3, 4, 5, 6];

console.log(sandar);
console.log(jup(sandar));



