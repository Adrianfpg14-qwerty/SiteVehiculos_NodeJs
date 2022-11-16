export interface PersonaI {
    id?: number;
    dni: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    ciudad: string;
    tipoDePersonas: string;
    createAt?: Date;
    updateAt?: Date;
}
