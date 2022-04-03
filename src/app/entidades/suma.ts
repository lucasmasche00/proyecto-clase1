export class Suma {
    edadUno: number = 0;
    edadDos: number = 0;
    promedio: number = 0;
    suma: number = 0;

    public sumar(): void {
        this.suma = this.edadUno + this.edadDos;
    }

    public promediar(): void {
        this.promedio = this.suma != 0 ? this.suma / 2 : 0;
    }
}
