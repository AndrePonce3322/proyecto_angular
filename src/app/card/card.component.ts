import { Component } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class card_component{
     
    public imagenes: Array<any> = [
        "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg",
        "https://www.tonica.la/__export/1595779332746/sites/debate/img/2020/07/26/luigi-en-super-mario-64-es-real.jpg_1902800913.jpg",
        "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/VJKRS5C54ZCKVECZIHO3FSHOMY.jpg",
        "https://www.nintenderos.com/wp-content/uploads/2017/06/Mario_Party_10_Yoshi_phixr.jpg"
    ];
    public titulo_Array: Array<any> = [
        {title: "Mario bro´s el inicio de una nueva era"},
        {title: "Luigi el despertar de browser 😶‍🌫️"},
        {title: "Pricensa kart, el nuevo juego lanzado de nintendo 64"},
        {title: "Joshi lo ha vuelto a hacer 🤯 le ha ganado a Mario!"}
    ];

    constructor(){
    }
}