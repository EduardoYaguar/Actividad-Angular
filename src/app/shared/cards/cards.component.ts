import { Component } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  // This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
  photos: Foto[] = [];
  cards: any[] = [
    {'name':'Leon', 'content': 'El rey de la selva, símbolo de fuerza y valentía. Vive en manadas y es un experto cazador.'},
    {'name':'Elefante', 'content': 'El gigante de la sabana. Inteligente y sociable, con una memoria prodigiosa y una trompa '},
    {'name':'Tigre', 'content': 'El felino más grande del mundo. Ágil y sigiloso, con un pelaje anaranjado y rayas negras únicas.'},
    {'name':'Aguila', 'content': 'Dueña del cielo, con una vista increíble. Puede detectar presas desde grandes alturas y cazar con precisión.'},
    {'name':'Delfin', 'content': 'El más inteligente del océano. Juguetón y social, usa un sistema de sonidos para comunicarse y orientarse.'},
    {'name':'Lobo', 'content': 'El espíritu del bosque. Vive en manadas organizadas y se comunica con aullidos que resuenan en la noche.'},
    {'name':'Panda', 'content': 'El tierno comedor de bambú. Un símbolo de paz que pasa la mayor parte del día comiendo y descansando.'},
    {'name':'Cebra', 'content': 'Rayas en blanco y negro que la hacen única. Vive en grupos y su piel la ayuda a camuflarse y confundir a los depredadores.'},
    {'name':'Colibri', 'content': 'Pequeño pero veloz. Su aleteo es tan rápido que parece flotar en el aire mientras bebe néctar de las flores.'},
  ];

  constructor(private recursosService:RecursosService ){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.photos = respuesta as Array<Foto>
    })
  }
}
