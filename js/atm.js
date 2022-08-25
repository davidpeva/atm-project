onclick = false;
//con esta funcion y el onclick le doy clear
// al local storage para que se vacie cuando cierre sesion
function logout() {
    if(onclick = true){
        window.location = "index.html";
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        localStorage.removeItem('balance');
    }

}

//ESTA ES PARA ACCEDER A EL SALDO AL USUARIO CUANDO INGRESE
var balanceInicial = Number(localStorage.getItem('balance'));
document.getElementById('total').innerHTML = balanceInicial;

//esta var me pone en el div el saludo y nombre
var nombre = localStorage.getItem('user');
bienvenidoCompleto = ('Bienvenid@ '  + nombre + ' tu saldo es ' + balanceInicial);
document.getElementById('bienvenida').innerHTML = bienvenidoCompleto;

let numero, operador;

function Calculo(data){
    let resultado = balanceInicial; 
    let operacion = '';
    
    for(i=0; i < data.length; i++)
    {
        if(data[i]==="+" || data[i]==="-")
        {
            operacion = data[i];
        }
        else
        {
        if(operacion === '+')
        {
        resultado = resultado + Number(data[i]);
        }
        if(operacion === '-')
        {
        resultado = resultado - Number(data[i]);
        }
        }
    }
    return resultado;
}



function CapturarDatos(id){
    let imprimirTotal = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let historial = document.getElementById('historial');
    let total;


    if(id==="+" || id==="-")
    {
        operaciones.innerText = balanceInicial + ' ' + id;
        
        operador = 1;

        
    }
    else if(id==="=")
    {
        operaciones.innerText = operaciones.innerText + ' ' + imprimirTotal.innerText;
        array = operaciones.innerText.split(' ');
        total = Calculo(array);
        
        imprimirTotal.innerText = total;

        historial.innerHTML = operaciones.innerText + ' ' + id +' ' + total + "<br>" + historial.innerHTML;
        

        if(total > 990)
        {
        imprimirTotal.innerText = false;
        operaciones.innerText = '-';
        historial.innerHTML = '';
        operacionInvalida = (nombre + '<br>' + ' tu cuenta no puede tener mas de 990 ');
        document.getElementById('nuevosaldo').innerHTML = operacionInvalida;
        }
        if(total < 10)
        {
        imprimirTotal.innerText = false;
        operaciones.innerText = '-';
        historial.innerHTML = '';
        operacionInvalida = (nombre + '<br>' + ' tu cuenta no puede tener menos de 10 ');
        document.getElementById('nuevosaldo').innerHTML = operacionInvalida;
        }
        else if(array.includes('+') && total < 990)
        {
        nuevoSaldo = (nombre + ' consignaste ' + array[2] + ' tu nuevo saldo es: ' + total);
        document.getElementById('bienvenida').innerHTML = nuevoSaldo;
        // con esta de abajo el valor del arreglo se va modificando
        balanceInicial = Calculo(array);
        document.getElementById('nuevosaldo').innerHTML = '';
        nuevoSaldo = '';
        }
        else if(array.includes('-') && total > 10)
        {
        nuevoSaldo = (nombre + ' retiraste ' + array[2] + ' tu nuevo saldo es: ' + total);
        document.getElementById('bienvenida').innerHTML = nuevoSaldo;
        balanceInicial = Calculo(array);
        document.getElementById('nuevosaldo').innerHTML = '';
        nuevoSaldo = '';
        }
    }
    else if(id==="c")
    {
        imprimirTotal.innerText = balanceInicial;
        operaciones.innerText = '-';
        document.getElementById('nuevosaldo').innerHTML = '';
        nuevoSaldo = '';
    }

    else
    {
        numero = Number(id);
        if(imprimirTotal.innerText === '0' || operador === 1)
        {
            imprimirTotal.innerText = numero;
            operador = 0;
        }
        else
        {
        imprimirTotal.innerText = imprimirTotal.innerText + numero;
        }
    }
}










/*
onclick = false;
//con esta funcion y el onclick le doy clear
// al local storage para que se vacie cuando cierre sesion
function logout() {
    if(onclick = true){
        window.location = "index.html";
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        localStorage.removeItem('balance');
    }

}

//ESTA ES PARA ACCEDER A EL SALDO AL USUARIO CUANDO INGRESE
var balanceInicial = localStorage.getItem('balance');

//esta var me pone en el div el saludo y nombre
var nombre = localStorage.getItem('user');
bienvenidoCompleto = ('Bienvenid@ '  + nombre + ' tu saldo es ' + balanceInicial);
document.getElementById('bienvenida').innerHTML = bienvenidoCompleto;

let numero, operador;

function Calculo(data){
    let resultado = 0; 
    let operacion = '';
    
    for(i=0; i < data.length; i++)
    {
        if(data[i]==="+" || data[i]==="-")
        {
            operacion = data[i];
        }
        else
        {
            if(operacion === '')
            {
                resultado = Number(data[i]);
            }
            else
            {
                if(operacion === '+')
                {
                    resultado = resultado + Number(data[i]);
                }
                if(operacion === '-')
                {
                    resultado = resultado - Number(data[i]);
                }
            }
        }
    }
    return resultado;
}



function CapturarDatos(id){
    let imprimirTotal = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let historial = document.getElementById('historial');
    let total;


    if(id==="+" || id==="-")
    {
        operaciones.innerText = imprimirTotal.innerText + ' ' + id;
        imprimirTotal.innerText = '';
        operador = 1;
    }
    else if(id==="=")
    {
        operaciones.innerText = operaciones.innerText + ' ' + imprimirTotal.innerText;
        array = operaciones.innerText.split(' ');
        total = Calculo(array);
        
        imprimirTotal.innerText = total;



        historial.innerHTML = operaciones.innerText + ' ' + id +' ' + total + "<br>" + historial.innerHTML;

    }
    else if(id==="c")
    {
        imprimirTotal.innerText = 0;
        operaciones.innerText = '';
    
    }

    else
    {
        numero = Number(id);
        if(imprimirTotal.innerText === '0' || operador === 1)
        {
            imprimirTotal.innerText = numero;
            operador = 0;
        }
        else
        {
        imprimirTotal.innerText = imprimirTotal.innerText + numero;
        }
    }
}
*/












/*function bienvenida() {
    var bienvenido = document.getElementById('bienvenida');
    var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);
}*/

//asi como esta abajo funciona pero sale donde le da la gana
    /*var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);*/