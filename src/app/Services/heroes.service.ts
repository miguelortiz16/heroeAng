import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Heroe } from '../models/Heroe';

@Injectable({
  providedIn: 'root'

})
export class HeroesService {
  private url=environment.urlEndPoin;

  constructor(
    private httpClient:HttpClient
  ) {


  }
   getAllheroe= async():Promise<Heroe[]>=>{
    return await this.httpClient.get(`${this.url}hero`).toPromise() as Promise<Heroe[]>;
  }
  getOneHero= async():Promise<Heroe[]>=>{
    return await this.httpClient.get(`${this.url}Getonehero`).toPromise() as Promise<Heroe[]>;
  }

  getheroeById= async(id:number):Promise<Heroe>=>{
    return await this.httpClient.get(`${this.url}hero/${id}`).toPromise() as Promise<Heroe>;
  }

  deteleheroeById= async(id:number|undefined):Promise<Object>=>{
    return await this.httpClient.delete(`${this.url}hero/${id}`).toPromise() as Promise<Object>;
  }

  createheroe= async(heroe:Heroe|undefined):Promise<Object>=>{
    return await this.httpClient.post(`${this.url}hero`,heroe).toPromise();
  }

  updateheroe= async(id:string|number|null,heroe:Heroe):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}hero/${id}`,heroe).toPromise();
  }


 heroLikeById= async(id:string|number|null,heroe:Heroe):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}likeHero/${id}`,heroe).toPromise();
  }
  dislikeHeroById= async(id:string|number|null,heroe:Heroe):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}dislikeHero/${id}`,heroe).toPromise();
  }


  statusHeroById= async(id:string|number|null,heroe:Heroe):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}statusHero/${id}`,heroe).toPromise();
  }



}

