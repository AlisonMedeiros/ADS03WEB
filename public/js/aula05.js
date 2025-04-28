document.getElementById("nome").addEventListener("input", function () {
    document.getElementById("nome-preview").textContent = this.value;
});