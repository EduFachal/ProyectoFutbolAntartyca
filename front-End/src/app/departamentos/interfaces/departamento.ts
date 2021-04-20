import { Federacion } from "src/app/federaciones/interfaces/federacion";

export interface Departamento {
    cod_depart: string,
    nombre: string,
    descripcion: string,
    federacion: Federacion,
    empleados: number[]
}
