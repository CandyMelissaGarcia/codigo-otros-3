// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.querySelector('#lista-de-productos'); //se le agrega # para identificar un selector por ID
const text = document.querySelector('.input');
const button = document.getElementById('btnFilter'); //se crea variable para botón filtrar

// se crea función para mostrar productos
const showProductos = (productos) => {
  li.innerHTML = '';
  productos.forEach(producto => { // se utiliza forEach con insertAdjacentHTML para agregarlos en contenedores
    li.insertAdjacentHTML('beforeend', `
      <div class="producto">
        <p class="titulo">${producto.nombre}</p>
        <img src="${producto.img}" alt="${producto.nombre}">
      </div>
    `);
  });
};

showProductos(productos)

button.onclick = () => { //se cambia a una función de tipo flecha se elimina el while y se utilizan los métodos filter e includes
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }  
  
  const texto = text.value.trim().toLowerCase(); // añadí los métodos .trim y .toLowerCase para que el texto fuera en minúsculas y sin espacios
    const productosFiltrados = productos.filter(producto =>
      producto.tipo.includes(texto) || producto.color.includes(texto)
    );
    showProductos(productosFiltrados); // Muestra los productos filtrados
  };
  

