let tiendadelibros = ()=>{
    class Libro {
        constructor(nombre, precio, autor, editorial){
            this.nombre = nombre;
            this.precio = precio;
            this.autor = autor;
            this.editorial = editorial;
        }
    
        vender() {
            this.vendido = true;
        }
    }
    
    const libros = [];
    
    libros.push(new Libro("El Principito", 6500, "Antoine de Saint Exupery", "Puerto de Palos"))
    libros.push(new Libro("El Psicoanalista", 9000, "John Katzenbach", "Estrada"))
    libros.push(new Libro("Platero y yo", 7200, "Juan Ramon Jimenez", "Puerto de Palos"))
    libros.push(new Libro("Retrato en Sangre", 12000, "John Katzenbach", "Laprida"))
    
    let nombre = prompt("Ingresá el libro que estás buscando");
    let libro = libros.find((item) => item.nombre === nombre);
    
    if(libro){
        let mensaje = `
           Nombre: ${libro.nombre}
           Precio: $${libro.precio}
           Autor: ${libro.autor}
           Editorial: ${libro.editorial}
        `;
    
        alert(mensaje);
    } else {
        alert("Este libro no se encuentra disponible");
    }
}
tiendadelibros();