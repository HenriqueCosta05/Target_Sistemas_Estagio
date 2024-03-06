function fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
    if (fib.includes(n)) {
        console.log("Pertence a sequência de Fibonacci");
    } else {
        console.log("Não pertence a sequência de Fibonacci");
    }
    return fib;
}
fibonacci(10); //Não pertence a sequência de Fibonacci
fibonacci(13); //Pertence a sequência de Fibonacci
