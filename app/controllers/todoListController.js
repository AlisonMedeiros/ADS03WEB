import { existsSync, writeFileSync, readFileSync } from 'fs';
import constants from '../../bootstrap/constants.js';

const FILE = constants.DIR + '/storage/todos.json';

export default (function () {

    // Função para ler o arquivo JSON
    function readTodos() {
        if (!existsSync(FILE)) writeFileSync(FILE, '{}');
        const data = readFileSync(FILE);
        return JSON.parse(data);
    };

    // Função para salvar no arquivo JSON
    function saveTodos(todos) {
        writeFileSync(FILE, JSON.stringify(todos, null, 2));
    };

    return {

        // Rota GET para listar todos
        'fetch': (req, res) => {
            const todos = readTodos();
            res.json(todos);
        },

        // Rota POST para adicionar, checar ou excluir
        'actions': (req, res) => {
            const { action, todo, id } = req.body;
            let todos = readTodos();

            if (action === 'add' && todo) {
                todos[id] = todo;
            } else if (action === 'check' && id && todos[id]) {
                todos[id].isChecked = !todos[id].isChecked;
            } else if (action === 'delete' && id && todos[id]) {
                delete todos[id];
            }

            saveTodos(todos);
            res.json({ success: true });
        }

    }

})();
