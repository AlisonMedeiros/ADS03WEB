function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Erro: divisão por zero não é permitida.");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
try {
    console.log(divides("A", "B"));
} catch (error) {
    console.log("Divides nao existe");
}