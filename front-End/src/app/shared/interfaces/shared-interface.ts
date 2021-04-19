export interface MenuRutasPrincipales {
    ruta: string,
    texto: string,
    childrenRouting?: MenuRutasAcciones[]
  }
  
  export  interface MenuRutasAcciones {
    rutaChildren: string,
    textoChildren: string
  }