import { Equipo } from "src/app/equipos/interfaces/equipo";

export interface Jugador {
    cod_jugador: string,
    nombre: string,
    telefono: string,
    puesto: string,
    equipo: Equipo
}
