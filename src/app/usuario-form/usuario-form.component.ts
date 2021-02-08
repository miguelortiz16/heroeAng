import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { UsuariosService } from '../Services/usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
public usuarioForm: FormGroup;
public usuario:Usuario|undefined;
public isEditable: boolean=false;
private routerParamid:string |number|null=0;
  constructor(
    private formBuilder:FormBuilder,
    private usuariosServices:UsuariosService,
    private router:Router,
    private activateRouter:ActivatedRoute
  ) {

    this.usuarioForm=this.formBuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',[Validators.required,Validators.minLength(6)]],
      correo:['',Validators.required],
    })
   }

  ngOnInit(): void {
    this.getUsuario();
  }
  onSubmit(form:FormGroup){
    console.log(form.valid);
    console.log(form.value);

    if (form.valid) {
      const call=(this.isEditable)?this.usuariosServices.updateUsuario(this.routerParamid,form.value)
      :this.usuariosServices.createUsuario(form.value)
      call.then(res=>{
        console.log(res)
        alert("guardado con exito");
        this.router.navigateByUrl("/usuarios")
      }).catch(err=>{
        alert("ocurrio un error")
        console.log(err)
      })

    }

  }
  getUsuario(){
    this.routerParamid=this.activateRouter.snapshot!.paramMap.get('id');
    if (this.routerParamid) {
      this.routerParamid=parseInt(this.routerParamid);
      if (this.routerParamid===0) {
        this.isEditable=false;
        return;

      }
      this.isEditable=true;
      this.usuariosServices.getUsuarioById(this.routerParamid).then(res=>{
       this.usuarioForm.setValue({
         nombre:res.nombre,
         apellido:res.apellido,
         telefono:res.telefono,
         correo:res.correo

      });
      console.log(res)

      }).catch(err=>{
        alert("ocurrio un errror")
        console.log(err)
      })

    }
  }
}
