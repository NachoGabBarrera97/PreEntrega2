
const usuarios = []

class Usuario {
    constructor(nombre, apellido, contraseña, dinero) {
        this.nombre = nombre
        this.apellido = apellido
        this.contraseña = contraseña
        this.dinero = dinero
    }
}

//creacion de nuevo usuario

let nombre = prompt('Ingrese su Nombre')
let apellido = prompt('Ingrese su Apellido')
let contraseña = prompt('Ingrese su Contraseña')
let dinero = Number(prompt('Ingrese cantidad de dinero a depositar'))
const usuario = new Usuario(nombre, apellido, contraseña, dinero)
usuarios.unshift(usuario)
console.log(usuarios)

//Busqueda de algun usuario
let usuarioBuscado = prompt('Ingrese su nombre de usuario para comprobar si esta registrado.')
const usuarioEncontrado = usuarios.find(usuario=>usuario.nombre=usuarioBuscado)
alert('El usuario se registro correctamente: \nNombre: '+usuarioEncontrado.nombre +' \nApellido: '+ usuarioEncontrado.apellido +'\nDinero Disponible para conversion: $' + usuarioEncontrado.dinero)




let dolar = 550;
let euro = 293.55;
let yen = 1.91;
let libra = 342.90;
let real = 54.86;

let monedaIngresada;
let montoIngresado;
let valorFinal;
let respuesta;

function conversionDeMoneda(monedaIngresada, montoIngresado){
    switch(monedaIngresada){
        case 'dolar':
            valorFinal = montoIngresado / dolar;
            return  'Monto ingresado: ' + montoIngresado +'\nValor en Dolares: '+ valorFinal.toFixed(2)

        case 'euro':
            valorFinal = montoIngresado / euro;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Euros: '+ valorFinal.toFixed(2)

        case 'yen':
            valorFinal = montoIngresado / yen;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Yens: '+ valorFinal.toFixed(2)
        
        case 'libra':
            valorFinal = montoIngresado / libra;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Libras: '+ valorFinal.toFixed(2)

        case 'real':
            valorFinal = montoIngresado / real;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Reales: '+ valorFinal.toFixed(2)
        
        default:
            return 'Ingrese una de las opcinoes correctas'
    }
}   

do{
    monedaIngresada = prompt('Seleccione una de las siguientes monedas a convertir: "Dolar" "Euro" "Real" "Yen" o "Libra"').toLocaleLowerCase()

    while(monedaIngresada != 'dolar' && monedaIngresada != 'euro' && monedaIngresada != 'real' && monedaIngresada != 'yen' && monedaIngresada != 'libra' ){
    monedaIngresada = prompt('Opcion no valida, ingrese una de las siguientes opciones: "Dolar" "Euro" "Real" "Yen" o "Libra"')     
    
    }
    montoIngresado = Number(prompt('Ingrese el monto que desea convertir'))

    while(isNaN(montoIngresado) && dinero < montoIngresado || montoIngresado < 0 && dinero < montoIngresado){
        montoIngresado=Number(prompt('ingrese un monto correcto (O un monto inferior a su saldo actual)'))
    }
    alert(conversionDeMoneda(monedaIngresada, montoIngresado))
    respuesta = prompt('Desea seguir convirtiendo? (si o no)').toLocaleLowerCase();

}while (respuesta != 'no'){
    alert('Muchas gracias por usar nuestro sistema!!')
}



