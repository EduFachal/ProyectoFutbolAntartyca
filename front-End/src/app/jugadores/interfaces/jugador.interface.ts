import { Equipo } from "src/app/equipos/interfaces/equipo";

export interface Jugador {
    cod_jugador: string,
    nombre: string,
    telefono: string,
    puesto: string,
    goles: number,
    altura: number,
    tarjetas: number,
    activo: boolean,
    equipo: Equipo
}
