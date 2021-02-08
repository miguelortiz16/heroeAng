import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../Services/heroes.service';
import { Heroe } from '../models/Heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroe$:Promise<Heroe>|undefined;
  constructor(
    private heroeServices:HeroesService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getheroe();
  }
getheroe=async()=>{
  let routerParamid:string |number|null=this.activateRouter.snapshot!.paramMap.get("id");
  if(routerParamid){
    routerParamid=parseInt(routerParamid);
   this.heroe$=this.heroeServices.getheroeById(routerParamid);
  }
}
}
