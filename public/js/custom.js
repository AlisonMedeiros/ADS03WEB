(function () {
    let tempoInicial = 0;
    let tempoFinal = 0;
    let intervalo;



    window.addEventListener("mousedown", () => {
        tempoInicial = performance.now(); // mais preciso que Date.now()

        intervalo = setInterval(() => {
            const agora = performance.now();
            const diff = Math.floor(agora - tempoInicial);
            if (diff % 1000 === 0 && diff > 0) {
                const newEvent = new CustomEvent("oi", {
                    detail: { "time": diff },
                    bubbles: true
                });
                document.querySelector("div").dispatchEvent(newEvent);
            }
        }, 100); // atualiza a cada 100ms
    });

    window.addEventListener("oi", (event) => {
        console.log(event);
    })

    window.addEventListener("mouseup", () => {
        tempoFinal = performance.now();
        clearInterval(intervalo);

        const duracao = Math.floor(tempoFinal - tempoInicial);
        console.log(`Você segurou por ${duracao} ms`);
    });
})();