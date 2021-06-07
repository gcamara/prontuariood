import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoAplicacaoProdutoRoutingModule } from './plano-aplicacao-produto-routing.module';
import { PlanoAplicacaoProdutoComponent } from './plano-aplicacao-produto.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PdfSectionComponent } from '../pdf-section/pdf-section.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TblProdutoComponent } from '../tbl-produto/tbl-produto.component';


@NgModule({
  declarations: [
    PlanoAplicacaoProdutoComponent,
    PdfSectionComponent,
    TblProdutoComponent,
  ],
  imports: [
    CommonModule,
    PlanoAplicacaoProdutoRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    NgxMaskModule.forRoot()
  ],
  exports: [ PlanoAplicacaoProdutoComponent ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]

})
export class PlanoAplicacaoProdutoModule { }
