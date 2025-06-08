export class MedicionPulsacion {
    private id: string;
    private pacienteId: string;
    private valor: number;
    private timestamp: Date;
    private sesionId: string;
    private notas: string;

    constructor(pacienteId: string, valor: number, sesionId: string, notas?: string) {}

    public getId(): string {}
    public getPacienteId(): string {}
    public getValor(): number {}
    public getTimestamp(): Date {}
    public getSesionId(): string {}
    public getNotas(): string {}
    public esAnomal(rangoMin: number, rangoMax: number): boolean {}
    public toString(): string {}
}