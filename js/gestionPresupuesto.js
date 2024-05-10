// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
// Asignación e inicialización de la variable presupuesto
let presupuesto = 0; // Ej. 1 Inicialmente = 0
console.log("Presupuesto inicial igual a " + presupuesto);

let gastos = []; // Ej. 2 - Inicialmente contiene un array vacío
let idGasto = 0; // Ej. 2 - Almacena el identificador actual de cada gasto. Inicialmente = 0

// EJECUCIÓN DEL PROGRAMA

// Ej. 1 - Llamada a las funciones de la práctica: Fundamentos de JavaScript I
/* actualizarPresupuesto(0);
mostrarPresupuesto() */

// Ej. 2 - Llamada a las funciones de la práctica: Fundamentos de JavaScript II
let gasto = new CrearGasto("Ejemplo de gasto 1", 20.33, "2023-10-11","ordinario","extraordinario","comunidad","luz","agua");
console.log(`La fecha del gasto en timestamp es: ${gasto.fecha}`);
let gastosVarios = "";
for (let i = 0; i < gasto.etiquetas.length; i++){
    gastosVarios += `-${gasto.etiquetas[i]}\n`;
}
console.log(`Los gastos del ejercicio son:\n ${gastosVarios}`);






// FUNCIONES

// FUNCIONES de la práctica: Fundamentos de JavaScript I

// Ej. 1 - Crear función actualizarPresupuesto
function actualizarPresupuesto(numero) {
    if ((numero >= 0) && (!isNaN(numero))){
        presupuesto = numero
        return numero;
    } else {
        console.log("Error: número menor que cero o carácter no numérico");
        return -1;
    }
}

// Ej. 1 - Crear función mostrarPresupuesto
function mostrarPresupuesto() {
        return "Tu presupuesto actual es de " + presupuesto + " €";
}

// Ej. 1 - Crear función constructora CrearGasto
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {

            // Ej.1 - Propiedades del objeto crearGasto: descripción y valor

            this.descripcion = descripcion;
            this.valor = (valor >=0) ? valor : 0;


            //this.fecha = (((Date.parse(fecha)).isNaN) == false) ? new Date(fecha) : new Date;
            //this.fecha = (!isNaN(Date.parse(fecha))) ? new Date(fecha) : new Date();
            this.fecha = (!isNaN(Date.parse(fecha))) ? new Date(fecha).getTime() : Date.now();
            //this.etiquetas = [];
            this.etiquetas = (etiquetas.length > 0) ? etiquetas : [];


            // Métodos del objeto crearGasto
            // Ej. 1 - Métodos creados en el Ejercicio 1º
            // Ej. 1 - Crear función mostrarGasto
            this.mostrarGasto = function(){
                //return "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €";
                return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
            }

            // Ej. 1 - Crear función actualizarDescripcion
            this.actualizarDescripcion = function (nuevaDescripcion){
                this.descripcion = nuevaDescripcion;
            }

            // Ej. 1 - Crear función actualizarValor
            this.actualizarValor = function (nuevoValor){
                if ((nuevoValor >= 0) && (!isNaN(nuevoValor))){
                    this.valor = nuevoValor;
                } else {
                    return 0;
                }
              }     
              
            // Ej. 2 - Métodos creados en el Ejercicio 2º
            // Ej. 2 - Crear función xx
            this.anyadirGasto = function(...lleganTags){
                    this.etiquetas.push(lleganTags);
            }

            // Ej. 2 - Crear función xx
            this.borrarGasto = function(id){

            }

            // Ej. 2 - Crear función xx
            function mostrarGastoCompleto(){
                console.log("mostrarGastoCompleto");
            }



        };

// Ej. 2 - Funciones para añadir al final - FUNCIONES de la práctica: Fundamentos de JavaScript II
        function listarGastos(){
            return gastos;
        }

        function anyadirGasto(){

        }

        function borrarGasto(){

        } 

        function calcularTotalGastos(){

        }

        function calcularBalance(){

        }



// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto, 
    calcularTotalGastos,
    calcularBalance
}
