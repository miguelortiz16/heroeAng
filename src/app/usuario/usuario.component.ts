import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../Services/usuarios.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public usuario$:Promise<Usuario>|undefined;
  constructor(
    private usuarioServices:UsuariosService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getusuario();
  }
getusuario=async()=>{
  let routerParamid:string |number|null=this.activateRouter.snapshot!.paramMap.get("id");
  if(routerParamid){
    routerParamid=parseInt(routerParamid);
   this.usuario$=this.usuarioServices.getUsuarioById(routerParamid);
  }
}
}
