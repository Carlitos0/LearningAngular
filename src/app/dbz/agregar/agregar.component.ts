import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfce';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() new: Personaje = {
    nombre:"",
    poder: 0
  }

  constructor( private dbzService: DbzService ){

  }

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.new.nombre.trim().length == 0){
      return;
    }
    // this.onNewCharacter.emit( this.new );
    this.dbzService.addNewCharacter( this.new );
    this.new = {
      nombre: '',
      poder: 0
    }
  }
}
