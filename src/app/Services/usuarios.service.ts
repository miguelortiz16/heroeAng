import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'

})
export class UsuariosService {
  private url=environment.urlEndPoin;

  constructor(
    private httpClient:HttpClient
  ) {


  }
   getAllUsuario= async():Promise<Usuario[]>=>{
    return await this.httpClient.get(`${this.url}hero`).toPromise() as Promise<Usuario[]>;
  }
  getOneHero= async():Promise<Usuario[]>=>{
    return await this.httpClient.get(`${this.url}Getonehero`).toPromise() as Promise<Usuario[]>;
  }

  getUsuarioById= async(id:number):Promise<Usuario>=>{
    return await this.httpClient.get(`${this.url}hero/${id}`).toPromise() as Promise<Usuario>;
  }

  deteleUsuarioById= async(id:number|undefined):Promise<Object>=>{
    return await this.httpClient.delete(`${this.url}hero/${id}`).toPromise() as Promise<Object>;
  }

  createUsuario= async(usuario:Usuario|undefined):Promise<Object>=>{
    return await this.httpClient.post(`${this.url}hero`,usuario).toPromise();
  }

  updateUsuario= async(id:string|number|null,usuario:Usuario):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}hero/${id}`,usuario).toPromise();
  }


 heroLikeById= async(id:string|number|null,usuario:Usuario):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}likeHero/${id}`,usuario).toPromise();
  }
  dislikeHeroById= async(id:string|number|null,usuario:Usuario):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}dislikeHero/${id}`,usuario).toPromise();
  }

  
  statusHeroById= async(id:string|number|null,usuario:Usuario):Promise<Object>=>{
    return await this.httpClient.put(`${this.url}statusHero/${id}`,usuario).toPromise();
  }

  
  
}

