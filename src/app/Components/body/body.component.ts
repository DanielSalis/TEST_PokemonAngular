import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  inputValue = ""
  data:any
  pokemon:any
  searchedPokemons:Array<String>

  constructor(private ds:DataService) { 
    this.pokemon = null
    this.searchedPokemons = [] 
  }

  ngOnInit(): void {
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  handleSearchChange(event: any): void{
    
    this.inputValue = event

    this.ds.getPokemonByName(this.inputValue.toLocaleLowerCase()).subscribe(async (response: any)=>{
      response && response.name != undefined ? this.searchedPokemons.push(response.name) : null
      this.pokemon = response
      
      console.log(this.searchedPokemons)
    })

  }
}
