import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Batman','Hulk','Thor','Deadpool','Superman'];

  heroesDrop:string[] = [];


  borrarHeroe(){
    const heroDeleted = this.heroes.pop()!;
    this.heroesDrop.push(heroDeleted);
  }
}
