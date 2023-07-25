export const productErrorIncompleteValues = (product) => {
    return `Uno o más parámetros obligatorios no fueron proporcionados:
      Propiedades obligatorias:
      * title: se esperaba una cadena definida, y se recibió ${product.title};
      * description: se esperaba una cadena definida, y se recibió ${product.description};
      * price: se esperaba un número definido, y se recibió ${product.price};
      * department: se esperaba una cadena definida, y se recibió ${product.department};
      * stock: se esperaba un número definido, y se recibió ${product.stock};
    `;
  };

  
export const productErrorGeneration = () => {
  return "Error al generar los productos.";
};

  export const productErrorDeletion = () => {
    return "Error al eliminar los productos.";
  };

  export const countError = () =>{
    return "El parámetro 'count' debe ser un número entero mayor o igual a 1."
  }