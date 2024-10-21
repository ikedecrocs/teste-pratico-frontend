import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';

const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
