export const MARCAS = [
    { id: 1, nombre: 'Europeo' },
    { id: 2, nombre: 'Americano' },
    { id: 3, nombre: 'Asiatico' },
];

export const MODELOS = [
    { id: 1, nombre: 'Audi' },
    { id: 2, nombre: 'BMW' },
    { id: 3, nombre: 'Chevrolet' },
    { id: 4, nombre: 'Ford' },
    { id: 5, nombre: 'Honda' },
];

const YEARMAX = new Date().getFullYear();

export const ANIOS = Array.from(
    new Array(20), 
    (val, index) => YEARMAX - index
);
export const PLANES = [
    { id: 1, nombre: 'Básico' },
    { id: 2, nombre: 'Completo' },
];
