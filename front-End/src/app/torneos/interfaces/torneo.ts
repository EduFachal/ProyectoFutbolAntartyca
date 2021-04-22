import { Equipo } from "src/app/equipos/interfaces/equipo";

export interface Torneo {
    cod_torneo: string,
    nombre: string,
    descripcion: string,
    ciudad: Ciudad,
    equipos:Equipo[]
}

export interface Ciudad{
    cod_ciudad: string,
    nombre: string
}
