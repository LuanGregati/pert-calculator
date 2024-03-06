function calcularPert() {
    const inputProvavel = document.getElementById('provavel');
    const inputOtimista = document.getElementById('otimista');
    const inputPessimista = document.getElementById('pessimista');
    const spanResultado = document.getElementById('resultado');

    let valueProvavel = inputProvavel.value ? Number(inputProvavel.value) : 0;
    let valueOtimista = inputOtimista.value ? Number(inputOtimista.value) : 0;
    let valuePessimista = inputPessimista.value ? Number(inputPessimista.value) : 0;

    let pert = (valueOtimista + 4 * valueProvavel + valuePessimista) / 6;

    if (pert > 0) {
        spanResultado.textContent = `PERT: ${pert.toFixed(2)}h / Provável (${valueProvavel}h) / Otimista (${valueOtimista}h) / Pessimista (${valuePessimista}h)`;

        navigator.clipboard.writeText(spanResultado.textContent);
    }else{
        spanResultado.textContent = 'PERT: 0h';
    }
}