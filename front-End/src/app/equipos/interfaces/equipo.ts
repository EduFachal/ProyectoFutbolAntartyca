import { Jugador } from "src/app/jugadores/interfaces/jugador.interface";
import { Torneo } from "src/app/torneos/interfaces/torneo";

export interface Equipo {
    cod_equipo : string,
    nombre_equipo : string,
    direccion : string,
    fecha_fundacion : string,
    jugadores: Jugador[],
    torneos: Torneo[]
}
