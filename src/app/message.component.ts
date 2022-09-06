import { Component } from "@angular/core";

@Component({
  selector:'app-message',
  template:`
    <h1 class="message">aea</h1>
    <button (click)="mostrarMessage('Hola '+name)">Mostrar Mensaje</button>
  `
})
export class Message{
  name: string = 'Rodrigo';

  mostrarMessage(mensaje:string){
    let obj: Element = document.querySelector('.message')!;
    return obj.textContent = mensaje;
  }
}
