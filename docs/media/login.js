const alunosDB = {
    "111111": { nome: "Maria", plano: "Mensal" },
    "222222": { nome: "João", plano: "Trimestral" },
    "333333": { nome: "Ana", plano: "Anual" }
};

const checkBtn = document.getElementById("checkBtn");
if (checkBtn) {
    checkBtn.addEventListener("click", () => {
        const input = document.getElementById("inputCode");
        const codigoDigitado = input ? input.value.trim() : "";
        const aluno = alunosDB[codigoDigitado];

        if (!aluno) {
            alert("❌ Código inválido! Tente novamente.");
            return;
        }

        const horario = new Date().toLocaleTimeString();

        const params = new URLSearchParams();
        params.append("nome", aluno.nome);
        params.append("plano", aluno.plano);
        params.append("horario", horario);

        window.location.href = "sucesso.html?" + params.toString();
    });
} else {
    console.warn("Elemento #checkBtn não encontrado no DOM.");
}

function carregarDadosCheckin() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome") || "";
    const horario = params.get("horario") || "";
    const plano = params.get("plano") || "";

    const elNome = document.getElementById("aluno-nome");
    const elHorario = document.getElementById("horario-checkin");
    const elPlano = document.getElementById("status-plano");

    if (elNome) elNome.innerText = "Olá, " + nome + "!";
    if (elHorario) elHorario.innerText = "Horário do check-in: " + horario;
    if (elPlano) elPlano.innerText = "Plano: " + plano;
}
