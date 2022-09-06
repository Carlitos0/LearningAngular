import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfce";

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 14000
    },
    {
      nombre: 'Riki',
      poder: 9000
    },
  ];

  get personajes(): Personaje[]{
    return [...this._personajes]
  }

  constructor(){}

  addNewCharacter( character: Personaje ){
    this._personajes.push(character);
  }
}
