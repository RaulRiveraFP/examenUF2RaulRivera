console.log('hola Barquitos');
//Funcion aleatorio crea dos numeros aleatorios entre 0 y 7 y ontre 0 y 9
function aleatorio() {
    let x = Math.floor(Math.random() * 8);

    let y = Math.floor(Math.random() * 10);

    return {
        x: x,
        y: y
    };
  }

console.log(aleatorio());

//Creación de objeto game con el panel de 10 x 10

let game = {
    panel: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],

    insertaBarco: function() {
        // HAgo 5 veces este bucle para inesrtar 5 barcos
        for (let i = 0; i < 5; i++) {
        // Llamo a la funcion aleatorio para obtener las coordenadas de los barcos
          let coordinates = aleatorio();
          let x = coordinates.x;
          let y = coordinates.y;

        // Convierto en 1 el espacio que ocupará el barco en la matriz
          for (let j = 0; j < 3; j++) {
            if (x + j < 10) {
              this.panel[y][x + j] = 1;
            }
          }
        }
    },
    pintaPanel: function() {
        let panelContainer = document.querySelector('.panel');
    
        // Itera sobre las filas del panel
        for (let i = 0; i < 10; i++) {
        //El children sería el hijo [i], es decir de los hijos (filas ese numero)
        let filas = panelContainer.children[i]; 
    
        // Itera sobre las casillas de la fila actual
        for (let j = 0; j < 10; j++) {
            //El children sería el hijo [i], es decir de los hijos (casillas [ese numero])
            let casillas = filas.children[j];
    
            // Verifica si en la posición correspondiente del panel hay un barco (valor 1)
            if (this.panel[i][j] === 1) {
            // Si hay un barco, añade la clase 'barco' a la celda
            casillas.classList.add('barco');
            } else {
            // Si no hay un barco quitasela
            casillas.classList.remove('barco');
            }
        }
        }
    }
  };

console.log('panel', game.panel);

game.insertaBarco()
console.log('panel con barcos', game.panel);

game.pintaPanel()

let btnDispara = document.querySelector('#btnDispara')

btnDispara.addEventListener('click' , (event) =>{
    event.preventDefault()
    // capturamos el valor de los inputs y los pasamos a nyumero
    let x = parseInt(document.querySelector('#x').value)
    let y = parseInt(document.querySelector('#y').value)
    let mensaje = document.querySelector('#mensaje')

    // console.log(x,y)
    // console.log('panel desde disparar', game.panel)
    // recorremos el array para ver si esa posicion es 0 o 1
    if (game.panel[x - 1][y - 1] === 1) {
        // console.log('TOCADO');
        mensaje.innerHTML = 'Tocado'
    } else {
        // console.log('AGUA');
        mensaje.innerHTML = 'Agua'
    }
})




// Clase

class Barquito {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    mostraInfo() {
      alert(`Datos de la instancia: x = ${this.x}, y = ${this.y}`);
    }
}
  
  
  
// Creamos instancia

const miBarquito = new Barquito(3, 5);

//miBarco.mostrarInfo()

miBarquito.mostraInfo();
