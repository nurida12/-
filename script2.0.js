function add(a, b) {
    return a + b;
}

let a = Number(prompt("Бірінші санды енгізіңіз"));
let b = Number(prompt("Екінші санды енгізіңіз"));

alert(add(a, b));


function greet(name) {
    return "Сәлем, " + name + "!";
}

let name = prompt("Атыңызды енгізіңіз");

alert(greet(name));


function age5(age) {
    return age + 5;
}

let age = Number(prompt("Жасыңызды енгізіңіз"));

alert(age5(age));


function check(number) {
    if (number % 2 == 0) {
        return "Жұп сан";
    } else {
        return "Тақ сан";
    }
}

let number = Number(prompt("Сан енгізіңіз"));

alert(check(number));