
// function mostrarResposta(){
//      let idade = document.getElementById("idade").value;
//      let resposta = document.getElementById("resposta");
  
//     if( idade >= 18){
//         resposta.innerHTML= "Você pode consumir bebidas alcolicas!"  } 
//      else {
//          resposta.innerHTML= "Você não pode beber, porque você ainda é bebezinhu! Buááá";
//     };

//  };

// Função corrigida no gpt

function mostrarResposta() {
    let idade = document.getElementById("idade").value;
    let resposta = document.getElementById("resposta");

    // Verifica se a entrada contém apenas números( Regex)
    if (!/^\d+$/.test(idade)) {
        resposta.innerHTML = "Por favor, insira apenas números.";
        return; // Interrompe a execução se não for número
    };

    idade = parseInt(idade); // Converte a entrada para número

    if (idade >= 18) {
        resposta.innerHTML = "Você pode consumir bebidas alcoólicas!";
    } else {
        resposta.innerHTML = "Você não pode  consumir bedidas alcoólicas!";
    };
};


// Aqui esta uma forma de add eventos pelo js 

 const mostrar = document.querySelector("#mostrar");

 mostrar.addEventListener("click",mostrarResposta);