import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanoAplicacaoProdutoModule } from './plano-aplicacao-produto/plano-aplicacao-produto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfSectionComponent } from './pdf-section/pdf-section.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlanoAplicacaoProdutoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
