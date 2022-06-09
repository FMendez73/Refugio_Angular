export interface Animales{
  Id_animal:number;
  Nombre:string;
  Especie:string;
  Edad:string;
  Vacunas:string;
  Fecha_ingreso:Date;
}

export interface Dueños{
  Id_dueño:number;
  Nombre:string;
  Correo_electronico:string;
  Edad:string;
  Vacunas:string;
  Fecha_ingreso:Date;
}

export interface Adopciones{
  Id_adopcion:number;
  Id_animal:number;
  Nombre_animal:string;
  Id_dueño:number;
  Nombre_dueño:string;
  Fecha_adopcion:Date;
}

export interface Usuarios{
  Id_usuario:number;
  Nombre:string;
  Especie:string;
  Edad:string;
  Vacunas:string;
  Fecha_ingreso:number;
}
