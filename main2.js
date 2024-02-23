console.log('conciertos')
const conciertosRecientes = [
  {
    id: 11,
    nombreGrupo: "Arctic Monkeys",
    fecha: "2024-02-15",
    lugar: {
      ciudad: "Madrid",
      pais: "España"
    },
    precioEntrada: 50
  },
  {
    id: 12,
    nombreGrupo: "Foo Fighters",
    fecha: "2024-02-18",
    lugar: {
      ciudad: "Barcelona",
      pais: "España"
    },
    precioEntrada: 60
  },
  {
    id: 13,
    nombreGrupo: "Radiohead",
    fecha: "2024-02-20",
    lugar: {
      ciudad: "Barcelona",
      pais: "España"
    },
    precioEntrada: 55
  },
  {
    id: 14,
    nombreGrupo: "Red Hot Chili Peppers",
    fecha: "2024-02-22",
    lugar: {
      ciudad: "Los Angeles",
      pais: "Estados Unidos"
    },
    precioEntrada: 70
  },
  {
    id: 15,
    nombreGrupo: "Queen",
    fecha: "2024-02-25",
    lugar: {
      ciudad: "París",
      pais: "Francia"
    },
    precioEntrada: 65
  },
  {
    id: 16,
    nombreGrupo: "Metallica",
    fecha: "2024-02-28",
    lugar: {
      ciudad: "Tokio",
      pais: "Japón"
    },
    precioEntrada: 75
  },
  {
    id: 17,
    nombreGrupo: "The Beatles Tribute Band",
    fecha: "2024-03-02",
    lugar: {
      ciudad: "Liverpool",
      pais: "Reino Unido"
    },
    precioEntrada: 40
  },
  {
    id: 18,
    nombreGrupo: "Green Day",
    fecha: "2024-03-05",
    lugar: {
      ciudad: "Nueva York",
      pais: "Estados Unidos"
    },
    precioEntrada: 55
  },
  {
    id: 19,
    nombreGrupo: "U2",
    fecha: "2024-03-08",
    lugar: {
      ciudad: "Dublín",
      pais: "Irlanda"
    },
    precioEntrada: 60
  },
  {
    id: 20,
    nombreGrupo: "Coldplay",
    fecha: "2024-03-10",
    lugar: {
      ciudad: "Sydney",
      pais: "Australia"
    },
    precioEntrada: 65
  }
]

function pintaConciertos(datos){
    let tabla = document.querySelector('tbody')
    let html = ''

    datos.forEach(dato => {
      html +=
      `
      <tr>
      <td>${dato.nombreGrupo}</td>
      <td>${dato.fecha}</td>
      <td>${dato.lugar.ciudad}</td>
      <td>${dato.lugar.pais}</td>
      <td>${dato.precioEntrada} €</td>
      </tr>
      `
    })
    tabla.innerHTML = html
}

pintaConciertos(conciertosRecientes)

function buscaConcierto(datos, id) {
  const conciertoEncontrado = datos.find(concierto => concierto.id === id)

  if (conciertoEncontrado) {
      const divResultado = document.createElement('div')

      const parrafo1 = document.createElement('p')
      parrafo1.textContent = `Nombre del grupo: ${conciertoEncontrado.nombreGrupo}`

      const parrafo2 = document.createElement('p')
      parrafo2.textContent = `Fecha: ${conciertoEncontrado.fecha}`

      const parrafo3 = document.createElement('p')
      parrafo3.textContent = `Ciudad: ${conciertoEncontrado.lugar.ciudad}`

      const parrafo4 = document.createElement('p')
      parrafo4.textContent = `Precio de entrada: ${conciertoEncontrado.precioEntrada} €`

      divResultado.appendChild(parrafo1)
      divResultado.appendChild(parrafo2)
      divResultado.appendChild(parrafo3)
      divResultado.appendChild(parrafo4)

      return divResultado
  } else {
      return `No tengo información de conciertos para el ID ${id}`
  }
}

// console.log(buscaConcierto(conciertosRecientes, 14))
document.querySelector('#infoConciertoId').appendChild(buscaConcierto(conciertosRecientes, 14))

function filtraConciertos(datos, ciudad){
  const arrayFiltrado = datos.filter(dato => dato.lugar.ciudad.includes(ciudad))
  return arrayFiltrado
}


document.querySelector('#filtrar').addEventListener('click', (e) => {
   const ciudad = document.querySelector('#ciudad').value
   const info = filtraConciertos(conciertosRecientes, ciudad)
  //  console.log('infooo',info);
   pintaConciertos(info)
   console.log('ciudad y datos concierto: ', ciudad, info)
})
