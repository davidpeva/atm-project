//este es el objeto de datos
var cuentas = [
    { 
        user: 'david', 
        password: '123',
        balance: 100, 
    },
    { 
        user: 'camila', 
        password: '456',
        balance: 200, 
    },
    { 
        user: 'laura', 
        password: '789',
        balance: 300, 
    }
];

//funcion a ejecutar en el onclick
function login() {
    //declaro variables de que el dato q se captura en el input sea el dato q esta en el objeto
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    
    //esta variable es la que me ayudara a q en el segundo if entre o diga vericiar
    let acceder = false;
    //ciclo para recorrer el objeto
    for(i = 0; i < cuentas.length; i++){
        if(user === cuentas[i].user && password === cuentas[i].password){
            //aca digo si los datos estan buenos o no porque asi no me recorre todo el tiempo el arreglo
            acceder = true;
            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
        }
        //CON ESTE PEDAZO ESTOY DECLARANDO EL BALANCE DEL USUARIO A LA MEMORIA 22-02-22
        if(user === cuentas[i].user && password === cuentas[i].password){
            var balance = Number(cuentas[i].balance);
            localStorage.setItem('balance', balance);
        }
    }
    //con este if le doy acceso si los datos estan buenos
    if(acceder == true){
        //este envia a la otra pagina
        window.location = "cajero.html";
    }
    else{
        //esto sale si los datos estan malos
        alert("Verifica tus datos")
    }
}







/*function login() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    
    for(i = 0; i <= cuentas.length; i++){
        if(user === cuentas[i].user && password === cuentas[i].password){
            alert("Ingreso Exitoso");
            window.location = "cajero.html";
            return false; //ME DEJA INGRESAR A DAVID SIN ALERT
    }else{
    alert("Verifique sus datos");
    }
    }
}*/


//LOG IN
/*
function login() {
    var user = document.getElementById('user')
    var password = document.getElementById('password')
    if (nombre === "David" && clave === "123"){
        window.open('cajero.html');
        window.location.href = "cajero.html"
    }else{
        alert('Intenta de Nuevo')
        /*window.location.href = "index.html"
    }
}
*/