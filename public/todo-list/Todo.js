export function Todo(id, title = '', isChecked = false, toggleCallback, deleteCallback) {
    const uuid = id;
    this.title = title;
    this.isChecked = isChecked;
    this.check = function () {
        this.isChecked = true;
    };
    this.uuid = function () {
        return uuid;
    }
    this.render = function (toggleCallback, deleteCallback) {
        const liElement = document.createElement('li');
        liElement.className = 'list-group-item d-flex justify-content-between align-items-center';

        const labelElement = document.createElement('label');
        labelElement.className = "form-check flex-grow-1 d-flex align-items-center";
        labelElement.style = "cursor:pointer";

        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.className = 'form-check-input me-2';
        checkboxElement.checked = this.isChecked;
        checkboxElement.addEventListener("change", () => {
            toggleCallback(uuid);
        });

        const spanElement = document.createElement('span');
        spanElement.textContent = this.title;
        if (this.isChecked) {
            spanElement.className = 'text-decoration-line-through text-muted';
        }

        labelElement.appendChild(checkboxElement);
        labelElement.appendChild(spanElement);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.className = 'btn btn-sm btn-danger ms-2';
        deleteButtonElement.textContent = 'Excluir';
        deleteButtonElement.addEventListener("click", () => {
            deleteCallback(id);
        });

        liElement.appendChild(labelElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }
}
