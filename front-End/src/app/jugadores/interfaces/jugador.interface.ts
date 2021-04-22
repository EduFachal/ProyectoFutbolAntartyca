export interface Jugador {
    cod_jugador: string,
    nombre: string,
    telefono: string,
    puesto: string,
    goles: number,
    altura: number,
    tarjetas: number,
    activo: boolean,
    fecha_nacimiento: Date,
    equipo: Equipo
}

export interface Equipo{
    cod_equipo:string,
    nombre_equipo:string
}
