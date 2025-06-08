export class EstadisticasPulsacion {
    public promedio: number;
    public maximo: number;
    public minimo: number;
    public desviacionEstandar: number;
    public mediana: number;
    public totalMediciones: number;

    constructor(mediciones: MedicionPulsacion[]) {}

    public toString(): string {}
}