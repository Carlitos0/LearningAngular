import { Component } from "@angular/core";

@Component({
  selector: 'app-names',
  template: `
    <div>
      <ul>
        <li *ngFor="let nombre of nombres; let i = index">{{i+1}}. {{nombre}}</li>
      </ul>
      <div>
        <label for="nombre">Nuevo Nombre: </label>
        <input type="text" name="nombre" #name class="nombreNuevo">
      </div>
      <button id="bt" (click)="agregarNombre(name.value)">Agregar Nombre</button>
    </div>
  `
})
export class NamesComponent{
  nombres: string[] = ['Carlos','Belinda','Rosario','Priscila','José'];
  newnombre: string = '';

  agregarNombre(inputValue: string) {
    this.nombres.push(inputValue);
  }
}
