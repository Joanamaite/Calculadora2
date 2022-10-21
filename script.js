let operacaoanterior = document.querySelector('#operacaoanterior');
let operacaoatual = document.querySelector('#operacaoatual');
let bnts = document.querySelectorAll("button");
let valor;
let igual = document.querySelector("#result");
let resultado = document.querySelector(".resultado");
let apagar = document.querySelector("#apagar")
bnts.forEach((btn)=>{
    btn.addEventListener("click", (e) =>{
        valor = e.target.innerHTML;
    operacaoanterior.innerHTML += valor;


     if(valor =='CE'){
         this.operacaoatual.innerHTML = '';
        this.operacaoanterior.innerHTML = '';

    }else if(valor =='C'){

        let resultado = document.querySelector('.resultado').innerHTML;
        operacaoanterior.innerHTML = resultado.substring(0, resultado.length -2);

    }else if(valor =='DEL'){
        let resultado = document.querySelector('.resultado').innerHTML;
            operacaoanterior.innerHTML = resultado.substring(0, resultado.length -4);

    }else if(igual = '='){
        operacaoatual.innerHTML = eval(operacaoanterior.innerHTML)
    }
    })
}
)



   











