import {Component} from '@angular/core';

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;  

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre (): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
        this.edad = 35;

    }
    cambiarEdad(): void{
        console.log('Hey..');
        this.edad = 35;

    }
}
 //es lo mismo que decir
 //return `${ this.nombre } - ${ this.edad }`;
 //return this.nombre + ' - ' + this.edad.toString()