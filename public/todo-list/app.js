import { Todo } from './Todo.js';

(function () {

    const todoList = {};

    function disableAddButton(disabled) {
        document.getElementById('add-btn').disabled = disabled;
    }

    function renderTodos(data) {
        const container = document.getElementById('todoList');
        container.innerHTML = '';
        for (const id in data) {
            const info = data[id];
            const todoObject = new Todo(id, info.title, info.isChecked);
            const todoRender = todoObject.render(toggleCheck, deleteTodo);
            container.append(todoRender);
        }
    }

    /*** Funcoes que chamam api */

    async function fetchTodos() {
        const res = await fetch('/todos');
        const data = await res.json();
        renderTodos(data);
    }

    async function addTodo() {
        const titleInput = document.getElementById('newTodoTitle');
        const title = titleInput.value.trim();

        if (!title) {
            titleInput.focus();
            return;
        }


        const id = crypto.randomUUID();
        const todo = new Todo(id, title);
        todoList[id] = todo;

        disableAddButton(true);
        await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'add', todo, id })
        });
        titleInput.value = '';
        await fetchTodos();
        disableAddButton(false);
    }

    async function toggleCheck(id) {
        disableAddButton(true);
        await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'check', id })
        });
        await fetchTodos();
        disableAddButton(false);
    }

    async function deleteTodo(id) {
        disableAddButton(true);
        await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'delete', id })
        });
        await fetchTodos();
        disableAddButton(false);
    }

    /*** Listener iniciais */

    // Suporte para Enter no input
    document.getElementById('newTodoTitle').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita comportamento padrão
            addTodo(); // Chama função de adicionar
        }
    });

    //Incluir
    document.getElementById('add-btn').addEventListener('click', function (event) {
        addTodo();
    });


    fetchTodos();

})();
