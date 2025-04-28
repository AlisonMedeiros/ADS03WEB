    // Exemplo 1: Promise

    function tarefaDemorada() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Tarefa concluída!');
            }, 2000); // Simula uma tarefa demorada de 2 segundos
        });
    }



    console.log('Iniciando a tarefa...');

    tarefaDemorada().then(result => {
        console.log(result);  // Isso é executado após 2 segundos
    });

    console.log('Código continua executando enquanto aguarda a tarefa...');