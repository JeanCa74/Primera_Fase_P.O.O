export class Alerta {
    private id: string;
    private pacienteId: string;
    private tipoAlerta: TipoAlerta;
    private mensaje: string;
    private timestamp: Date;
    private prioridad: NivelPrioridad;

    constructor(pacienteId: string, tipoAlerta: TipoAlerta, mensaje: string, prioridad: NivelPrioridad) {}

    public getId(): string {}
    public getPacienteId(): string {}
    public getTipoAlerta(): TipoAlerta {}
    public getMensaje(): string {}
    public getTimestamp(): Date {}
    public getPrioridad(): NivelPrioridad {}
    public toString(): string {}
}
