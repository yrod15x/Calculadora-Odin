let resultado = document.querySelector(".resultado");
let botones = Array.of(document.getElementsByTagName("button"));
let botOper = Array.of(document.getElementsByClassName("operacion"));
let btnIgual = document.querySelector(".igual");
let signo;
let hecho = false;
let iniciado = false;
let formula;
let cont = 0;

//Comenzar con los botones apgados hasta que se ponga un número
btnIgual.disabled = true;
for(let i = 0; i < botOper[0].length; i++)
{
    botOper[0][i].disabled = true;
}

//Hacer que se pongan en pantalla los dígitos y símbolos al presionar los botones 
botones.forEach((btn) => {
    for(b of btn)
    {
        //Tengo que poner event.target para que solo detecte el botón presionado
        b.addEventListener("click", (event) => {
            //Desactiva los botones de operación. Solo igual queda activo
            if(cont === 0)
            {
                resultado.textContent = "";
                cont++;
            } 
            if(event.target.classList.contains("operacion"))
            {
                btnIgual.disabled = false;
                signo = event.target.textContent;
                iniciado = false; 
            }
            else if(event.target.classList.contains("igual"))
            {
                formula = resultado.textContent.split(/\D/);
                switch (signo) {
                    case "+":
                        resultado.textContent = Number(formula[0]) + Number(formula[1]);
                    break;
                    case "-":
                        resultado.textContent = Number(formula[0]) - Number(formula[1]);
                    break;
                    case "*":
                        resultado.textContent = Number(formula[0]) * Number(formula[1]);
                    break;
                    case "/":
                        if(formula[1] != "0")
                        {
                            resultado.textContent = Number(formula[0]) / Number(formula[1]);
                        }
                        else
                        {
                            resultado.textContent = "Error";
                        } 
                    break;
                    default:
                        break;
                }
                btnIgual.disabled = true;
                hecho = true;
            }
            if(event.target.textContent != "=")
            {
                if(hecho)
                {
                    resultado.textContent = "";
                    hecho = false;
                }
                resultado.textContent += event.target.textContent;
                if(resultado.textContent.length == 1)
                {
                    iniciado = true;
                }
                if(iniciado)
                {
                    for(let i = 0; i < botOper[0].length; i++)
                    {
                        botOper[0][i].disabled = false;
                    }
                }
                else
                {
                    for(let i = 0; i < botOper[0].length; i++)
                    {
                        botOper[0][i].disabled = true;
                    }
                }
            }
        });
    }
});




