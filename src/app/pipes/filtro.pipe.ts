import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  //Recibimos tres parametros 1.el arreglo a evaluar el filtro, el texto de busqueda, la columna del arreglo
  transform(arreglo: any[], texto: string, columna: string): any[] {

    //Si el arreglo no tiene ni un texto de busqueda retornamos el arreglo entero
    if(texto === ''){
      //return arreglo;
      return null;
    }

    //Convertimos el texto a minuscula
    texto = texto.toLowerCase();

    //Retornamos el arreglo filtrado por el texto que se encuentre en la columna especificada
    return arreglo.filter( item => {
      return item[columna].toLowerCase().includes(texto);
    });
  }

}
