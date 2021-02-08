import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../Services/heroes.service';
import { Heroe } from '../models/Heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

public heroes$:Promise<Heroe[]>|undefined
public heroe$:Promise<Heroe[]>|undefined
public hero:any;
  constructor(
    public heroesServices:HeroesService
  ) {

    this.hero=heroesServices
  }

  ngOnInit(): void {
  this.getheroes();
    this.getheroe();
  }

  deleteheroe(id:number|undefined){
if (confirm("esta seguro de eliminar este heroe")) {

  this.heroesServices.deteleheroeById(id)
  .then(() =>{


  }).catch(err=>{

    console.log(err);
  }).finally(() =>
    this.getheroes()
  )
}


  }

  getheroes=()=>{
    this.heroes$= this.heroesServices.getAllheroe();

  }

  getheroe=()=>{
    this.heroe$= this.heroesServices.getOneHero();

  }


onClickLike(id:number|undefined){
 this.hero.heroLikeById(id)
 .then(() =>{


  }).catch(err=>{

    console.log(err);
  }).finally(() =>

     this.getheroe()
  )
}


onClickDisLike(id:number|undefined){
 this.hero.dislikeHeroById(id)
 .then(() =>{


  }).catch(err=>{

    console.log(err);
  }).finally(() =>

     this.getheroe()
  )
}
statusHero(id:number|undefined){
 this.hero.statusHeroById(id)
.then(() =>{


  }).catch(err=>{

    console.log(err);
  }).finally(() =>

    this.getheroe()
  )
}
}
