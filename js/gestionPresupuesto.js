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

let gasto1 = new CrearGasto("Ejemplo de gasto 1", 20.33, "2023-10-11","ordinario","extraordinario","comunidad","luz","agua");
console.log(`La fecha del gasto en timestamp es: ${gasto1.fecha}`);
/*
console.log(`Los gastos del ejercicio son:`);
for (let gastosVariados of gasto1.etiquetas){
    console.log(`-${gastosVariados}`);
}
*/
/*
anyadirGasto(gasto1); 
let gasto2 = new CrearGasto("Er gasto 2", 120356.99, "2024-01-02","uuufffff");
let gasto3 = new CrearGasto("Er gasto 3", 120356.99, "2024-01-02","ahhhhh");
let gasto4 = new CrearGasto("Er gasto 4", 120356.99, "2024-01-02","eeeeee");
anyadirGasto(gasto2);
anyadirGasto(gasto3);
anyadirGasto(gasto4);
console.log(`Longitud después de añadir los gastos: ${gastos.length}`);
console.log(`idGasto después de añadir el último gasto ${idGasto}`);

for (let i = 0; i < gastos.length; i++){
    console.log(`-gasto${i}.id = ${gastos[i].id}`);
}
borrarGasto(0);


console.log(`Longitud después de borrar un gasto: ${gastos.length}`);
console.log(`idGasto después de borrar un gasto ${idGasto}`);
for (let www of gastos)
    {
        console.log(www);
    }
borrarGasto(1)
borrarGasto(2)
borrarGasto(3);
//console.log(gastos);
*/




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

            // Ej.2 - FECHA
            // Ej.2 - Si no se indica el parámetro fecha, se almacenará en la propiedad fecha la fecha actual.
            // Ej.2 - El parámetro fecha deberá ser un string con formato válido que pueda entender la función Date.parse. 
            // Si la fecha no es válida (no sigue el formato indicado), se deberá almacenar la fecha actual en su lugar.
            // Ej.2 - Tal como se indica en la sección de objeto gasto, la fecha se almacenará en formato timestamp.
            
            // Utilizo un condicional ternario
            this.fecha = (!isNaN(Date.parse(fecha))) ? new Date(fecha).getTime() : Date.now();
            // Algunas de las líneas de código probadas sin éxito:
            //this.fecha = (((Date.parse(fecha)).isNaN) == false) ? new Date(fecha) : new Date;
            //this.fecha = (!isNaN(Date.parse(fecha))) ? new Date(fecha) : new Date();




            // Ej.2 - ETIQUETAS
            // Si no se indican los parámetros de etiquetas, se almacenará en la propiedad etiquetas un array vacío.
            // Utilizo un condicional ternario
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
            // Ej. 2 - Crear función de 1 parámetro que realizará tres tareas:
            //Añadir al objeto gasto pasado como parámetro una propiedad id cuyo valor será el valor actual de la variable global idGasto.
            //Incrementar el valor de la variable global idGasto.
            //Añadir el objeto gasto pasado como parámetro a la variable global gastos. El gasto se debe añadir al final del array.

        };

// Ej. 2 - Funciones para añadir al final - FUNCIONES de la práctica: Fundamentos de JavaScript II
        function listarGastos(){
            return (gastos.length == 0 ? [] : gastos);
        }

        function anyadirGasto(gasto){
            gasto.id = idGasto;
            idGasto++;
            gastos.push(gasto);
        }

        function borrarGasto(ide){
             //if (ide <= ((gastos.length)+1))
              //  {
                    console.log("Entra en el if");
                    let buscarGasto = gastos.findIndex(elemento => {
                        //console.log("valor elemento cada vuelta:" + elemento.id);
                        return elemento.id === ide
                });
                    //console.log(buscarGasto);
                    gastos.splice(buscarGasto,1);
                    console.log("Longitud después de borrar, vista desde dentro: " + gastos.length);
              //  }
             
        } 

        function calcularTotalGastos(){

        }

        function calcularBalance(){

        }



// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo

// En el Ej. 2 se añaden listarGastos, anyadirGasto, borrarGasto, calcularTotalGastos y calcularBalance 
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
