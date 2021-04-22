//import { Ciudad } from "src/app/ciudades/interfaces/ciudad";
import { Empleado } from "src/app/empleados/interfaces/empleado";
//import { Federacion } from "src/app/federaciones/interfaces/federacion";

export interface Departamento {
    cod_depart: string,
    nombre: string,
    descripcion: string,
    federacion: Federacion,
    ciudad: Ciudad,
    empleados: Empleado[]
}

export interface Federacion{
    cod_federacion: string,
    cif: string
}

export interface Ciudad{
    cod_ciudad: string,
    nombre: string
}
