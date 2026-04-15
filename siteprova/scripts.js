function aviso() {
    alert("ATENÇÃO!! O CALCULO SÓ FUNCIONA COM CONTAS DO TIPO: SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO");
}

function calcular() {
  let input = document.getElementById("conta");
  let conta = input.value;

  if (conta === "") return;

  let resultado;

  try {
    resultado = eval(conta);
  } catch {
    resultado = "Erro";
  }

  let li = document.createElement("li");
  li.textContent = conta + " = " + resultado;

  let botao = document.createElement("button");
  botao.textContent = "Apagar";
  botao.style.marginLeft = "10px";

  botao.onclick = function () {
    li.remove();
  };

  li.appendChild(botao);

  document.getElementById("lista").appendChild(li);

  input.value = "";
}
