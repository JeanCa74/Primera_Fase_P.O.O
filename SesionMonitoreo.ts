export class SesionMonitoreo {
    private id: string;
    private pacienteId: string;
    private fechaInicio: Date;
    private fechaFin: Date | null;
    private estado: EstadoSesion;
    private duracionMinutos: number;
    private notas: string;

    constructor(pacienteId: string, duracionMinutos: number, notas?: string) {}

    public getId(): string {}
    public getPacienteId(): string {}
    public getFechaInicio(): Date {}
    public getFechaFin(): Date | null {}
    public getEstado(): EstadoSesion {}
    public getDuracionMinutos(): number {}
    public iniciarSesion(): void {}
    public pausarSesion(): void {}
    public finalizarSesion(): void {}
    public estaActiva(): boolean {}
    public toString(): string {}
}