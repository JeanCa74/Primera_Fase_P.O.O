export class GestorReportes {
    private formatoFecha: string;

    constructor() {}

    public generarReportePaciente(paciente: Paciente, mediciones: MedicionPulsacion[], sesiones: SesionMonitoreo[]): string {}
    public generarReporteEstadistico(mediciones: MedicionPulsacion[], periodo: string): string {}
    public generarReporteTendencias(mediciones: MedicionPulsacion[], fechaInicio: Date, fechaFin: Date): string {}
    public exportarDatos(datos: any[], formato: string): string {}
    public generarAlerta(medicion: MedicionPulsacion, tipoAnomalia: TipoAnomaliaCardiaca): Alerta {}
}