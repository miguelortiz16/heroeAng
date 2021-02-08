import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../Services/usuarios.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

public usuarios$:Promise<Usuario[]>|undefined
public usuario$:Promise<Usuario[]>|undefined
public hero:any;
  constructor(
    public usuariosServices:UsuariosService
  ) { 

    this.hero=usuariosServices
  }

  ngOnInit(): void {
  this.getUsuarios();
    this.getUsuario();
  }

  deleteUsuario(id:number|undefined){
if (confirm("esta seguro de eliminar este usuario")) {

  this.usuariosServices.deteleUsuarioById(id)
  .then(() =>{
    alert("eliminado con exitos")

  }).catch(err=>{
    alert("ocuarrio un error")
    console.log(err);
  }).finally(() =>
    this.getUsuarios()
  )
}


  }

  getUsuarios=()=>{
    this.usuarios$= this.usuariosServices.getAllUsuario();
    console.log( this.usuarios$)
  }

  getUsuario=()=>{
    this.usuario$= this.usuariosServices.getOneHero();
    console.log( this.usuario$)
  }

 
onClickLike(id:number|undefined){
 this.hero.heroLikeById(id)
 .then(() =>{
  

  }).catch(err=>{
    
    console.log(err);
  }).finally(() =>
    
     this.getUsuario()
  )
}


onClickDisLike(id:number|undefined){
 this.hero.dislikeHeroById(id)
 .then(() =>{
  

  }).catch(err=>{
    
    console.log(err);
  }).finally(() =>
    
     this.getUsuario()
  )
}
statusHero(id:number|undefined){
 this.hero.statusHeroById(id)
.then(() =>{
  

  }).catch(err=>{
    
    console.log(err);
  }).finally(() =>
    
    this.getUsuario()
  )
}
}
