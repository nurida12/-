function add(a, b) {
    return a + b;
}

function greet(name) {
    return "Hello, " + name;
}

function age5(age) {
    return age + 5;
}

function check(number) {
    if (number % 2 == 0) {
        return "Жұп сан";
    } else {
        return "Тақ сан";
    }
}

console.log(add(5, 3));
console.log(greet("Ali"));
console.log(age5(15));
console.log(check(8));
console.log(check(7));