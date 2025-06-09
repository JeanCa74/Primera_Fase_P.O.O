export class Paciente {
    private id: string;
    private nombre: string;
    private edad: number;
    private genero: string;
    private historialMedico: string;
    private fechaRegistro: Date;
    private rangoNormalMin: number;
    private rangoNormalMax: number;

    constructor(id: string, nombre: string, edad: number, genero: string, historialMedico: string) {}

    public getId(): string {}
    public getNombre(): string {}
    public getEdad(): number {}
    public getGenero(): string {}
    public getHistorialMedico(): string {}
    public getFechaRegistro(): Date {}
    public setRangoNormal(min: number, max: number): void {}
    public getRangoNormal(): { min: number; max: number } {}
    public toString(): string {}
}
