import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  personajes: string[] = ['Legoshi', 'Haru', 'Jack', 'Rouis', 'Juno'];

  personajesBorrados: string = '';

  borrarPersonaje(){
    this.personajesBorrados = this.personajes.shift() || '';     
  }

  
}
