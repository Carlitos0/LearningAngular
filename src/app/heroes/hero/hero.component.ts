import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent{
  name: string = 'Iroman';
  age: number = 43;

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getName(): string{
    return `${ this.name } - ${ this.age }`
  }

  changeName(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 30;
  }
}
