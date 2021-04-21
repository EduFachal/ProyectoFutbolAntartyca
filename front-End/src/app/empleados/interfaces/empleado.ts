import { Departamento } from "src/app/departamentos/interfaces/departamento";

export interface Empleado {
    cod_emp: string,
	dni: string,
	nombre: string,
	direccion: string,
	telefono: string,
	departamento:Departamento
}
