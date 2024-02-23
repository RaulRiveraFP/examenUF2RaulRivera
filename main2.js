console.log('conciertos');
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
];



// pintaConciertos()



// console.log(buscaConcierto(conciertosRecientes, 14))
// document.querySelector('#infoConciertoId').innerHTML = buscaConcierto(conciertosRecientes, 14);



// document.querySelector('#filtrar').addEventListener('click', (e) => {
//   const ciudad = document.querySelector('#ciudad').value;
//   const info = filtraConciertos(conciertosRecientes, ciudad) 
//   pintaConciertos(info)
//   console.log('ciudad y datos concierto: ', ciudad, info);
// });
