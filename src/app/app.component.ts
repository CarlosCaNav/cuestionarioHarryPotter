import { Component } from '@angular/core';

import * as preguntas_harry_potter from 'src/assets/preguntas_harry_potter.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HogwartsPedromi';

  cuestionario: any = preguntas_harry_potter;
  mapa_puntuaciones: Record<string, number> = {/* 
    'Ravenclaw': 0,
    'Slytherin': 0,
    'Hufflepuff': 0,
    'Gryffindor': 0, */
  };

  variable_temporal_para_imprimir: any = this.imprimir_cuestionario();
  indice_pregunta: number = 0;

  imprimir_cuestionario() {
    console.log(this.cuestionario);
  }

  elegirRespuesta(casa: string, puntos: number) {
    if (this.mapa_puntuaciones[casa] == undefined) {
      this.mapa_puntuaciones[casa] = puntos;
    } else {
      this.mapa_puntuaciones[casa] += puntos;
    }

    if (this.indice_pregunta < this.cuestionario.preguntas.length - 1) {
      this.indice_pregunta++;
    }
    else {
      this.indice_pregunta = this.cuestionario.preguntas.length;
      console.log("HAS TERMINADO!!!!");
/* 
      for (var i = 0; i < this.cuestionario.preguntas.length; i++) {
        console.log("mas puntos " + Math.max(+= i));
      } */


      console.log(this.cuestionario.preguntas.length);
      console.log(this.mapa_puntuaciones);
      /* console.log(Math.max(...mapa_puntuaciones[casa])); */
    }
  }
}
