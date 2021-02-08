import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


const routes: Routes = [
  {path:'usuarios',component:UsuariosComponent},
 { path: '*',   redirectTo: 'usuarios', pathMatch: 'full' },
  {path:'usuario/:id',component:UsuarioComponent},
  {path:'usuario-form/:id',component:UsuarioFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
