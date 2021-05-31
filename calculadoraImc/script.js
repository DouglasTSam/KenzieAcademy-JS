let botaoCalcular = document.getElementById("botaoCalcular");

function calculandoImc(){
  let peso = document.getElementById("numericPeso").value;
  let rangePeso = document.getElementById("rangePeso").value;
  let altura = document.getElementById("numericAltura").value/100;
  let rangeAltura = document.getElementById("rangeAltura").value/100;
 
 	if(altura !== "" && peso !== ""){
		let imc = (peso/(altura * altura)).toFixed(2);
		let mensagem = "";

		if(imc < 18.5){
			mensagem = "Você está abaixo do peso !!!"
		}
		else if(imc < 25){
			mensagem = "Você está no peso ideal !!!"
		}
		else if(imc < 30){
			mensagem = "Você está levemente acima do peso !!!"
		}
		else if(imc < 35){
			mensagem = "Cuidado! Obesidade grau I !!!"
		}
		else if(imc < 40){
			mensagem = "Cuidado! Obesidade grau II !!!"
		}
		else {
			mensagem = "Cuidado! Obesidade grau III !!!"
		}

		resultado.textContent = `Seu IMC é ${imc}.</br>${mensagem}`;
	}else{
		resultado.textContent="Preencha Todos os campos !!!"
    numericPeso.textContent = "";
    numericPeso.textContent ="";
	}
}

botaoCalcular.addEventListener("click",calculandoImc);
