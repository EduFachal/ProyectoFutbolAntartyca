import { Torneo } from "src/app/torneos/interfaces/torneo";

export interface Ciudad {
    cod_ciudad: string,
    nombre: string,
    torneos:Torneo[]
}
