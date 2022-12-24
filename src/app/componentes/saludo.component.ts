import { Component } from "@angular/core";

@Component({
    selector: 'saludo-leito',
    templateUrl: './saludo.component.html'
})

export class componente_saludo{

    public nombre: string;
    public anos: number;

    constructor(){
        this.nombre = "Andre";
        this.anos = 17;
        console.log("¡El componente de saludo Andre está hecho!");
    }
}