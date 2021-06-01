let botaoCalcular = document.getElementById("botaoCalcular");

function calculandoImc() {
  let peso = document.getElementById("numericPeso").value;
  let rangePeso = document.getElementById("rangePeso").value;
  let altura = document.getElementById("numericAltura").value / 100;
  let rangeAltura = document.getElementById("rangeAltura").value / 100;


  if (altura !== 0 && peso !== 0) {
    let imc = (peso / (altura * altura)).toFixed(2);
    let imc2 = (rangePeso / (rangeAltura * rangeAltura)).toFixed(2);
      let mensagem = "";

    if (imc < 18.5 || imc2 < 18.5) {
      mensagem =
        "Você está abaixo do peso !!!  DICA: Coma uma pouco mais, vamos? !!! 🥘";
      resultado.style.backgroundColor = "white";
      resultado.style.backgroundColor = "#99eE99";
      resultado.style.color="black";
    } else if (imc < 25 || imc2 < 25) {
      mensagem =
        "Você está no peso ideal !!! DICA: Se mantenha assim, arrasou!!👏";
      resultado.style.backgroundColor = "white";
      resultado.style.color="white";
      resultado.style.backgroundColor = "green";
    } else if (imc < 30 || imc2 < 30) {
      mensagem =
        "Você está levemente acima do peso !!!  DICA: Comece a se controlar, confio em você !!! 👏";
      resultado.style.backgroundColor = "white";
      resultado.style.color="black";
      resultado.style.backgroundColor = "#99eE99";
    } else if (imc < 35 || imc2 < 35) {
      mensagem =
        "Cuidado! Obesidade grau I !!!  DICA: Vamos começar a se exercicitar ?? vem comigo !!🏋️‍♀️";
      resultado.style.backgroundColor = "white";
      resultado.style.color="white";
      resultado.style.backgroundColor = "orange";
    } else if (imc < 40 || imc2 < 40) {
      mensagem =
        "Cuidado! Obesidade grau II !!!  DICA: Não desista, você consegue EMAGRECER, só basta querer🏋️‍♀️🧠!!";
      resultado.style.backgroundColor = "white";
      resultado.style.color="white";
      resultado.style.backgroundColor = "red";
    } else {
      mensagem =
        "Cuidado! Obesidade grau III !!!  DICA: Procure um médico/nutricionista, cuide da sua saúde !! 🏋️‍♀️🧠💪🥕";
      resultado.style.backgroundColor = "white";
      resultado.style.color="white";
      resultado.style.backgroundColor = "#8b0000";
    }
    resultado.textContent = `Seu IMC é ${imc}.`;
    mensagemImc.textContent = `${mensagem}`;
  } else {
    resultado.textContent = "Preencha Todos os campos !!!";
    numericPeso = "";
    numericAltura = "";
    resultado.style.backgroundColor = "white";
    mensagemImc.textContent= ""; 
  }
}

botaoCalcular.addEventListener("click", calculandoImc);
