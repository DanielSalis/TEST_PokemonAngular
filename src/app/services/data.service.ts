import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPTY, empty, of } from "rxjs";
//import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { 

  }

  getPokemonByName(name: string){
    let response = new Observable<Object>()
    try{
      response = this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }catch(e){
      response = EMPTY
    }finally{
      return response
    }
  }
}
