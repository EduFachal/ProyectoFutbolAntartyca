import { Ciudad } from "src/app/ciudades/interfaces/ciudad";
import { Equipo } from "src/app/equipos/interfaces/equipo";

export interface Torneo {
    cod_torneo: string,
    nombre: string,
    descripcion: string,
    ciudad: Ciudad,
    equipos:Equipo[]
}
