import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoAplicacaoProdutoComponent } from './plano-aplicacao-produto.component';

const routes: Routes = [{
  path: '',
  component: PlanoAplicacaoProdutoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoAplicacaoProdutoRoutingModule { }
