let result = "";
for (var i = 0; i <= 100; i++) {
    while (!(i % 3) && i != 0) {
        result += "fizz";
        break;
    }

    while (!(i % 5) && i != 0) {
        result += "buzz";
        break;
    }

    while (i % 3 && i % 5 || i == 0) {
        result += i;
        break;
    }
    result += ", ";
}
console.log(result);