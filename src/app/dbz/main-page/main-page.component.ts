import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfce';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  new: Personaje = {
    nombre: 'Eddy',
    poder: 9999999
  }

  constructor(){}

}
