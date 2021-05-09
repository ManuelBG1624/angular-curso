import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]=['Spriderman','Ironam','Hulk','Thor']
  heroeborrado:string="";
  borraHeroe(){
    console.log('Borrado...')
   let borrado=this.heroes.pop() || '';
  this.heroeborrado=borrado
  }

}
